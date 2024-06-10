import React, { Component } from "react";
import Coin from "./Coin"
import "./Coinflip.css";

class Coinflip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: [0, 0],
            toss: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    rando() {
        return Math.floor(Math.random() * 2)
    }
    handleClick(evt) {
        const click = this.rando();
        const newScore = this.state.score.map((el, i) => i === click ? el + 1 : el);
        this.setState(cur => {
            return {
                score: newScore,
                toss: click
            }
        });
    }
    render() {
        const { toss, score } = this.state;
        return (
            <div class="Coinflip">
                <h1>Coin flipper!</h1>
                <div className="Coinflip-coin-container">
                    <Coin toss={ toss } />
                </div>
                <div>
                    <button onClick={this.handleClick}>Emoji coin!</button>
                </div>
                <div>
                    <p>You have flipped the emoji <strong>{score.reduce((total, el) => total + el)}</strong> times, there have been <strong>{score[0]}</strong> smiles and <strong>{score[1]}</strong> cries
                    </p>
                </div>
            </div>
        )
    }
}

export default Coinflip;