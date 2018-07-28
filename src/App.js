import React, {Component} from 'react';
import './App.css';
import clubs from './icons/clubs.svg';
import diams from './icons/diamonds.svg';
import hearts from './icons/hearts.svg';
import spades from './icons/spades.svg';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: ''
        }
    }


    buttonOnClick = (event) => {
        this.setState({
            selected: event.target.className
        });
    };

    fullIconOnClick = (event) => {
        this.setState({
            selected: ''
        });
    };

    render() {
        return (
            <div className="App">
                <Grid onclick={this.buttonOnClick} selected={this.state.selected}/>
                <FullIcon onclick={this.fullIconOnClick} selected={this.state.selected}/>
            </div>
        );
    }
}

function Grid(props) {
    if (props.selected !== '') return null;

    return (
        <div className="grid-container">
            <img className="spades" src={spades} alt="spades" onClick={props.onclick}/>
            <img className="hearts" src={hearts} alt="hearts" onClick={props.onclick}/>
            <img className="diams" src={diams} alt="diamonds" onClick={props.onclick}/>
            <img className="clubs" src={clubs} alt="clubs" onClick={props.onclick}/>
        </div>
    )
}

function FullIcon(props) {
    switch (props.selected) {
        case 'spades':
            return <img className="fullIcon" src={spades} alt="spades" onClick={props.onclick}/>
        case 'hearts':
            return <img className="fullIcon" src={hearts} alt="hearts" onClick={props.onclick}/>
        case 'diams':
            return <img className="fullIcon" src={diams} alt="diamonds" onClick={props.onclick}/>
        case 'clubs':
            return <img className="fullIcon" src={clubs} alt="clubs" onClick={props.onclick}/>
        default:
            return null;
    }
}

export default App;
