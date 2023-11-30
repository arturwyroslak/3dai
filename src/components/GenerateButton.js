import React from 'react';
import '../styles/GenerateButton.css';

class GenerateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleGenerate = this.handleGenerate.bind(this);
    }

    handleGenerate() {
        this.props.onGenerate();
    }

    render() {
        return (
            <button id="generateButton" className="generate-button" onClick={this.handleGenerate}>
                Generate
            </button>
        );
    }
}

export default GenerateButton;