import React from 'react';
import { connect } from 'react-redux';


function GameDisplay(props) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        title: state.title,
        img: state.img,
        description: state.description  
    }
}

export default connect(mapStateToProps)(GameDisplay);