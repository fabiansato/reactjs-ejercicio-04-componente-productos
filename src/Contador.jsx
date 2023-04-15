//Componente tipo clase
import react, { Component } from "react";

class Contador extends Component {
  constructor(){
    super()
    this.state={
      cantidad:0
    }
  }
  handleClickDecrementar = ()=>{

    this.setState({
      cantidad:this.state.cantidad - 1
    })
  }
  handleClickIncrementar = ()=>{
    this.setState({
      cantidad:this.state.cantidad + 1
    })
  }
  render() {
    return (
    <div>
      <button onClick={this.handleClickDecrementar}>Decrementar</button>
      <span>{this.state.cantidad}</span>
      <button onClick={this.handleClickIncrementar}>Incrementar</button>
    </div>
    );
  }
}

export default Contador;
