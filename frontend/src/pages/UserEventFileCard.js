import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function UserEventFileCard(props){
    return(
        <div className='container p-0'>
            <div className='row p-0'>
                <div 
                    className='border border-dark EventFileCard'>
                    <div className="text-center" >
                        <h3 style={{marginBottom: "0px"}}>14</h3>
                        <p style={{marginBottom: "0px"}}>Dec</p>
                        <p style={{marginBottom: "0px"}}>2022</p>
                    </div>
                </div>

                
            </div>

            <div className='row mt-1 text-center' style={{width: "100%", marginLeft: "auto", marginRight: "auto"} }>
                <h6 style={{marginBottom: "0px"}} >Latest Event Name</h6>
                <p style={{marginBottom: "0px"}}>Details</p>
                <Link to=""><button> Learn more </button></Link>
            </div>
        </div>
    );
}



export default UserEventFileCard;