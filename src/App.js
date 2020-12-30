
import FirstComponent from './components/FirstComponent';
import './App.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import NavigationBar from './components/NavigationBar';
import axios from 'axios';

class App extends Component{

  state = {
    isLoading: false,
    products: []
  };


componentDidMount(){
  fetch('http://localhost:8081/getAll')
        .then(response => {return response.json();})
        .then(json => {
          this.setState(
            {
              isLoading:true,
              products: json,
            }
          )
        })
}

  render(){

    const {products,isLoading} = this.state;

    if(!isLoading){
      return <div>Loading...</div>
    }
    else {
      return (
        <table className='table'>
          <thead>
          <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Available</th>
          <th>Price</th>
          <th>Categories</th>
          </tr>
          </thead>
          <tbody>
        {
          products.map(product=>(
            <tr key={product.id}>
              <td className='id'>{ product.id }</td>
              <td>{ product.name }</td>
              <td className='center'>{ product.available?"YES":"NO" }</td>
              <td>{ product.price }</td>
              <td>{ product.category.reduce((acc,catg)=>acc+catg+' ',"") }</td>
            </tr>
          ))
        }
          </tbody>
        </table>
      )
    }
  }
}

class SecondComponent extends Component{
  render(){
    return (
      <div className="secondComponent">
        Second Component
      </div>
    );
  }
}

export default App;
