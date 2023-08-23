import React, { Component } from 'react'

 class Cart extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement(){
      this.setState({
          count : this.state.count - 1
      })
    }
  render() {
    return (
      <div>
        <h1>Added to Cart<sup>{this.state.count}</sup></h1>
      <button onClick={()=>this.increment()}>add</button>
      <button onClick={()=>this.decrement()}>remove</button>
      </div>
      
    )
  }
}

export default Cart
