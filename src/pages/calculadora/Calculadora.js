import React, { Component } from "react";
import "./styles.css";

export default class Calculadora extends Component {
  state = {
    primeiroNumero: 0,
    segundoNumero: 0,
    resultado: 0
  };

  soma = () => {
    //const primeiroNumero = this.state.primeiroNumero;
    //const segundoNumero = this.state.segundoNumero;
    //chamado de destructuring

    const { primeiroNumero, segundoNumero } = this.state;

    let resultado = parseInt(primeiroNumero) + parseInt(segundoNumero);
    this.setState({ resultado: resultado });
  };

  subtracao = () => {
    const { primeiroNumero, segundoNumero } = this.state;

    let resultado = primeiroNumero - segundoNumero;
    this.setState({ resultado: resultado });
  };

  divisao = () => {
    const { primeiroNumero, segundoNumero } = this.state;

    let resultado = primeiroNumero / segundoNumero;
    this.setState({ resultado: resultado });
  };

  multiplicacao = () =>{
    const {primeiroNumero, segundoNumero} = this.state;

    let resultado = primeiroNumero * segundoNumero;
    this.setState({ resultado: resultado});
    
  }

  render() {
    return (
      <div className="container">
        <div className="top">
          <input
            className="entrada"
            type="number"
            onChange={event => {
              this.setState({ primeiroNumero: event.target.value });
            }}
          />
          <input
            className="entrada"
            type="number"
            onChange={event => {
              this.setState({ segundoNumero: event.target.value });
            }}
          />
        </div>

        <div className="midde">
          <button className="operadores" onClick={this.soma}>
            +
          </button>
          <button className="operadores" onClick={this.subtracao}>
            -
          </button>
          <button className="operadores" onClick={this.divisao}>
            /
          </button>
          <button className="operadores" onClick={this.multiplicacao}>
            *
          </button>
        </div>

        {console.log(this.state.resultado)}

        <div className="botton">
          <button className="resultado">=</button>
        </div>

        <p>{this.state.resultado}</p>
      </div>
    );
  }
}
