import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

function UserEventFileCard_small(props){
    return(
        <div className='container'>
            <div className='row p-0'>
                
                <div className='border border-dark EventFileCardSamll'>
                    <div className="text-center">
                        <h3 className="boxCard">14</h3>
                        <p className="boxCard">Dec</p>
                        <p className="boxCard">2022</p>
                    </div>
                </div>

            </div>

            <div className='row mt-1 text-center card-body tag-center'>
                <h6 style={{marginBottom: "0px"}} >Latest Event Name</h6>
                <Link to="" className='d-none'><button> Learn more </button></Link>
            </div>
        </div>
    );
}

function UserEventFileCard_regular(props){
    return(
        
            <div className='row p-0 mb-4 mt-2 size CardRegular '>

                <div className='col-1 border border-dark'><div className="text-center">
                    <h3 className="boxCard mt-1" style={{marginBottom: "0px"}}>14</h3>
                    <p className="boxCard">Dec</p>
                    <p className="boxCard">2022</p>
                </div></div>

                <div className='col-10'>
                    <div className='mt-1 card-body tag-center'>
                        <h4 className="boxCard my-1" >Latest Event Name</h4>

                        <div className='row'>
                            <div className='col-10 '>
                                <p className="boxCard my-0"> Time </p>
                                <p className="boxCard my-0"> Intro </p>
                            </div>

                            <div className='mt-4 col-2'>
                                <Link to="" ><button> Learn More {">>>"} </button></Link>
                            </div>

                        </div>

                        
                    </div>
                </div>


                
            </div>

    );
}

export {UserEventFileCard_small, UserEventFileCard_regular};