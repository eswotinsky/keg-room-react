import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import KegList from './KegList';
import AddKegForm from './AddKegForm';
import Error404 from './Error404';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: [
        {
          name: 'Beer 1',
          brand: 'Brand',
          price: 5,
          alcoholContent: 5.5,
          pintsLeft:124
        },
        {
          name: 'Beer 2',
          brand: 'Brand',
          price: 6,
          alcoholContent: 7.9,
          pintsLeft:124
        },
        {
          name: 'Beer 3',
          brand: 'Brand',
          price: 4.5,
          alcoholContent: 4.8,
          pintsLeft:124
        }
      ]
    };
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }

  handleNewKeg(keg) {
    let newKegList = [];
    this.state.kegList.forEach(keg=>{
      newKegList.push(Object.create(keg));
    });
    newKegList.push(keg);
    this.setState({kegList: newKegList});
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' render={()=><KegList kegList={this.state.kegList} />} />
          <Route path='/add-keg' render={()=><AddKegForm onNewKeg={this.handleNewKeg} />} />
          <Route component={Error404} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
