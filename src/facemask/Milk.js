import React, { Component } from "react";
class Milk extends Component {
    state = {
        isi: 0
    }
     componentDidMount(){
        alert('Show Menu Milk! (Proses mount)')
}
    tambahisi = () => {
        this.setState((state) => { return { isi: state.isi + 10000 } })
    }
    kurangiisi = () => {
        this.setState((state) => { return { isi: state.isi - 10000 } })
    }
    componentWillUnmount(){
        alert('Hide Menu Milk (Unmount)!')
    }
    render() {
        return (
            <div>
            <h3>Face Mask and Scrub MILK</h3>
                <h4> Harga / 10 gr : Rp {this.state.isi} </h4>
                
                <button onClick={this.tambahisi}>+10 gr</button>
                <button onClick={this.kurangiisi}>-10 gr</button>
                <br/>
            </div>
        );
    }
}
export default Milk;