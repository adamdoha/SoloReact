import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CafeInfo.css';

class CafeInfo extends Component{

    static propTypes = {
        name: PropTypes.string.isRequired,
        picture: PropTypes.string
    }

    render(){
        return(
            <div className="Cafe">
                <div className="Cafe__Column">
                    <CafePicture picture={this.props.picture}/>
                </div>
                <div className="Cafe__Column">
                    <h1>{this.props.name}</h1>
                </div>
            </div>
        )
    }
}

class CafePicture extends Component{
    render(){
        return(
            <img src={this.props.picture} alt={this.props.name} className="Cafe__Poster" />
        )
    }
}

export default CafeInfo