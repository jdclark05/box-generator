import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './BoxBuilder.css';
const BoxBuilder = (props) => {
    return(
            <div className="boxContainer">
                {/* MAP FUNCTION TO LOOP THROUGH LIST */}
                {props.color.map((color) => {
                    return(
                        // EACH INSTANCE WITHIN LIST
                        <div className="boxBuilder" style={{backgroundColor: color }}>&nbsp;</div>
                    )
                })}
            </div>
    );
}

export default BoxBuilder;
