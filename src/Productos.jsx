import react, { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
  constructor(){
    super()
    this.state = {
      productos:[
        { id: 1, nombre: "Moto G", precio: "$1000", categoria: "Celulares" },
        { id: 2, nombre: "Moto Z", precio: "$2000", categoria: "Celulares" },
        { id: 3, nombre: "iPhone 13", precio: "$3000", categoria: "Celulares" },
        { id: 4, nombre: "iPhone 14", precio: "$4000", categoria: "Celulares" },
        { id: 5, nombre: "iPhone 12", precio: "$4000", categoria: "Celulares" },
      ],
      titulo:"Listado de productos"
    }
  }
  handleClick = ()=>{
    this.setState({
      productos:[
        { id: 1, nombre: "Samsung", precio: "$1000", categoria: "Celulares" },
        { id: 2, nombre: "Samsung 2", precio: "$2000", categoria: "Celulares" },
      ],
      titulo:"Listado productos filtrado"
    })
  }
  /*handleClick(){
    this.setState({
      productos:[
        { id: 1, nombre: "Samsung", precio: "$1000", categoria: "Celulares" },
        { id: 2, nombre: "Samsung 2", precio: "$2000", categoria: "Celulares" },
      ],
      titulo:"Listado productos filtrado"
    })
  }*/
  render() {
    /*const productos = [
      { id: 1, nombre: "Moto G", precio: "$1000", categoria: "Celulares" },
      { id: 2, nombre: "Moto Z", precio: "$2000", categoria: "Celulares" },
      { id: 3, nombre: "iPhone 13", precio: "$3000", categoria: "Celulares" },
      { id: 4, nombre: "iPhone 14", precio: "$4000", categoria: "Celulares" },
      { id: 5, nombre: "iPhone 12", precio: "$4000", categoria: "Celulares" },
    ];*/

    return (
      <div>
        {/**
         * productos.map(function (producto){
         *  return <Producto nombre={producto.nombre} precio={producto.precio} categoria={producto.categoria} />
         * })
         */}
         <h1>{this.state.titulo}</h1>
        {this.state.productos.map((producto) => 
          <Producto
            nombre={producto.nombre}
            precio={producto.precio}
            categoria={producto.categoria}
          />
        )}
        <button onClick={this.handleClick}>Filtrar</button>
      </div>
    );
  }
}

export default Productos;
