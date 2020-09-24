import React, {Component} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component{
  state = {
    users: [],
    loading: false
  }

  async componentDidMount() { //will run when the component mounts, if you ever want to make a HTTP req to GH right when the app loads THIS is where you want to do it.
    
    this.setState({loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false});
  }

  render() { //life cycle method

    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
        <Users loading={this.state.loading} users={this.state.users}/> 
        {/* users compm were passing in loading and users from our state, were passing in as props */}
        </div>
      </div>
    )
  }
}
  
export default App;
