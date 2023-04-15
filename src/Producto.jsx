import react, { Component } from "react";
class Producto extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.nombre}</h1>
        <p>{this.props.precio}</p>
        <p>{this.props.categoria}</p>
      </div>
    );
  }
}

export default Producto;
