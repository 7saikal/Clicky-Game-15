import React, {Component} from 'react';
import Navbar from './components/Navbar'
// import Banner from './components/Banner'
// import Container from './components/Container'
import Character from './components/Character'
import Footer from './components/Footer'
import data from "./data.json"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    data:data,
    score: 0,
    topScore: 0
  }
  //FUNCTIONS GO HERE
  componentDidMount = () =>{
    console.log(this.state.data)
    this.setState({data: this.shuffle(this.state.data)})
  }
  //id and clicked are switched in their values, do not understand why they are not representing argument fed to them in order at render()
  handleClick = (id, clicked) => {
    console.log(id, clicked.target.id);
    if(id === false){
      //They clicked a correct card
      console.log("This was correct")
      //Map over this.state.data and change the corresponding id clicked value to true
      //setState the new array provided by the map, shuffled
      this.setState({data: this.shuffle(this.state.data)})
    }else{
      //They clicked an incorrect card
      //Check to see if their score is the new topScore
      alert("LOOOOOOOOSER")
      //Reset game, score to zero
      //map over data and set all clicked values to false i.e. e.clicked = false
      this.setState({data: this.shuffle(this.state.data)})
    }
    this.setState({data: this.shuffle(this.state.data)})

  } 
  shuffle= data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  render(){
  return (
    <div className="App">
     <Navbar />
    {this.state.data.map (e => (
      <img 
      key = {e.id}
      id = {e.id}
      src={e.url}
      onClick = {this.handleClick.bind(e.id, e.clicked)}
      clicked={e.clicked}
      />
    ))} 
    </div>
  );
}
}

export default App;
