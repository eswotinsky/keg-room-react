import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import AddKegForm from './AddKegForm';
import Error404 from './Error404';
import { v4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: {}
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleDecreasePintsLeft = this.handleDecreasePintsLeft.bind(this);
  }

  handleNewKeg(newKeg) {
    let newKegId = v4();
    let newKegList = Object.assign({}, this.state.kegList, {
      [newKegId]: newKeg
    });
    this.setState({kegList: newKegList});
  }

  handleDecreasePintsLeft(keg) {

  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><KegList
            kegList={this.state.kegList}
            onDecreasePintsLeft={this.handleDecreasePintsLeft} />} />
          <Route path='/add-keg' render={()=><AddKegForm onNewKeg={this.handleNewKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
