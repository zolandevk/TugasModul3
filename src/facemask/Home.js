import { Component } from "react";
import React from "react";
import Milk from "./Milk";
import Beautywater from "./Beautywater";

class Home extends Component {
    state = {
        komponen1: true,
        komponen2: true,
    }
      componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`TERIMA KASIH`)
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm('HALLO SIST');
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1 }
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2 }
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Milk /> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'HIDE' : ''} Menu Milk </button>
                <div style={{ border: "0.5px solid white" }}>
                </div>
                {this.state.komponen2 ? <Beautywater /> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'HIDE' : ''} Beautywater</button>
            </div>
        );
    }
}
export default Home;