import React, { Component } from 'react';
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";
// console.log(friends);

//NEW CODE FOR HOMEWORK

class App extends Component {
  
  state = {
    data: friends,
    score: 0,
    topScore: 0

  };
  
  // deleteFriend = id => {
  //   this.setState({ friends: this.state.friends.filter(friend => friend.id !== id) });
  // };

  render () {
    const {score, data} = this.state;
    return (
      <div>
              <Header
              score = {score} />
              <CardBody characters = {data}/>
              <Footer/>
      </div>
      // <Wrapper>
      //   <h1 className="title">Friends List</h1>
      //   {friends.map(friend => (`
      //   <FriendCard
      //     id = {friend.id}
      //     name={friend.name}
      //     image={friend.image}
      //     occupation={friend.occupation}
      //     location={friend.location}
      //     key={friend.id}
      //     deleteFriend={this.deleteFriend}
      //   />
        // )
      // }
    )}

      // </Wrapper>
    
  }
}

export default App;
