import React, { Component } from "react";
class Beautywater extends Component {
    state = {
        facemask: " "
    }
    componentDidMount(){
        alert('Show Beautywater! (Proses mount)')
    }
    ChangeBeautywater = () => {
        this.setState((state) => { 
            if (state.facemask === "Beauty Water 500 ml= Rp. 55.000") {
                return {facemask : "Beauty Water 550 ml = 60.000"}   
            } else {
                return {facemask : "Beauty Water 500 ml = Rp. 55.000"}                 
            }
        })
    }
  componentWillUnmount(){
        alert('Hide Beautywater (Proses Unmount)!')
    }
    render() {
        return (
            <div>  
             <h3>Beauty Water</h3>                       
                <p>Beauty Water 100 ml = Rp. 15.000</p>  
                <p>Beauty Water 150 ml = Rp. 20.000</p>
                <p>Beauty Water 200 ml = Rp. 25.000</p>

                <button onClick={this.ChangeBeautywater}>Isi lebih banyak</button>
                <br />
                <p>{this.state.facemask}</p>
            </div>
        );
    }
}
export default Beautywater;