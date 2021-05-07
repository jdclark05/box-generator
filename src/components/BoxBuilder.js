import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './BoxBuilder.css';
const BoxBuilder = (props) => {

    console.log(props)
    return(
            <div className="boxContainer">
                {props.color.map((color) => {
                    return(
                        <div className="boxBuilder" style={{backgroundColor: color }}>&nbsp;</div>
                    )
                })}
            </div>
    );
}

export default BoxBuilder;
