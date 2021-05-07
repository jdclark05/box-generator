import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props) => {

    // PASSES INPUT DATA TO APP/PARENT
    const handleSubmit = (e, bgColor) => {
        e.preventDefault();
        props.onNewColor( bgColor );
    };

    return (
        <div className="mt-5">
            {/* COLOR SUBMIT FORM */}
            <div className="d-flex flex-row align-items-center justify-content-center mt-5" style={{ height: '10rem', width: '100%'}}>
                {/* HANDLE SUBMIT OnSubmit EVENT */}
                <form onSubmit={ (e) => handleSubmit(e, e.target[0].value) } className="d-flex flex-row align-items-center justify-content-center" style={{width: '40rem'}} >
                    {/* LABEL FOR FORM */}
                    <label className="m-1" style={{fontSize: '2rem'}}>Color</label>
                    {/* INPUT FOR FORM */}
                    <input className="m-1" name="color" style={{width: '20rem', height: '2.5rem', borderRadius: '10px'}} type="text"/>
                    {/* SUBMIT BUTTON FOR FORM */}
                    <input className="m-1 d-flex flex-row align-items-center justify-content-center" style={{height: '2.25rem', width: '6rem', borderRadius: '5px', backgroundColor: 'white', border: '1px solid #999', color: '#000', fontSize: '1.3rem'}} type="submit" />

                </form>
            </div>
        </div>
    );
}


export default Form;
