import React, { Component } from 'react';
import Plan from './plan';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state= {
    items: [],
    text: ""
  }

  handleChange = e =>{
    this.setState({text: e.target.value})

  }

  handleDelete = id => {
    console.log("Deleted", id);
    const oldItems = [...this.state.items];
    const items = oldItems.filter((element, i) => {
      return i !== id
    })
    this.setState({items:items});

  }

  handleClick = e => {
    if(this.state.text !== " "){
        const items = [...this.state.items, this.state.text];
        this.setState({items: items, text:""});
    }
  }
  render() {
    return (
      <div className='container-fluid my-5'>
         {/* Row-1 */}
        <div className='row'>
          <div className='col-sm-6 mx-auto text-black shadow-lg p-3'>
            <h1 className='text-center'>Today's Plan</h1>

          {/* Row-2 */}
          <div className='row'>
            <div className='col-9'>
              <input type="text" className='form-control' placeholder='Write your plan' value={this.state.text}  onChange={this.handleChange}/>
            </div>

            <div className='col-2'>
              <button className='btn btn-success px-5 font-weight-bold' onClick={this.handleClick}>Add</button>
            </div>

            <div className='conatiner-fluid'>
              <ul className='list-unstyled row m-5'>
              {
                this.state.items.map((value, i)=> {
                  return <Plan key={i} id ={i} value={value} sendData={this.handleDelete} />
                })
              }
              </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
