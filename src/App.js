import React, { Component } from 'react';
import config from './config';
import Input from './component/select';

class App extends Component {
  state={
    status:false
  }

  componentDidMount(){
    let dbCon = config.database().ref('production/boysopon');
    dbCon.on('value', async (snapshot) => { 
      const snapshotValue = snapshot.val(); 
      this.setState({
        status:snapshotValue
      })
    })
  }
  createProject=()=>{
    let dbCon = config.database().ref('production/');
    dbCon.child('boysopon').set(true); 
  }
  switch=()=>{
    let dbCon = config.database().ref('production/');
    dbCon.child('boysopon').set(!this.state.status); 
  }

  render() {
    return (
      <div> 
        <Input/>
      </div>
    );
   }
  }

  export default App;