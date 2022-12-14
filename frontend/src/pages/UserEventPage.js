import React from 'react';
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import UserVenueFileCard from './UserVenueFileCard';
import placeholder_canRemove from './placeholder_canRemove.png'

function UserEventAddress(props){
    return(
        <section className='col-lg-12 '>
            <div className='container-lg bg-light mt-4 pb-4 table-responsive table-bordered'>
                <div className='row mt-3'>
                    <div className='col-6'>
                        <Link to="/Location/Location_A/Events" >
                            <h2 style={{color: "#181E84"}}>Location A</h2>
                        </Link>
                        <div className='row'>
                            <p className='mx-3 mt-3'>
                                <i className='fa fa-map'></i> This is a address
                            </p>

                            <p className='mx-3'>
                                <i className='fa fa-info'></i> This is some information about the location
                            </p>
                        </div>
                    </div>

                    <form  className="custom-checkbox d-inlineBlock col-1 mt-1">
                        <label for={/**assign a unique id*/ "LikeButton"}  id="likeButtionLabel">
                            <input type="checkbox" id={/**assign a unique id*/ "LikeButton"} className='label' style={{}}/>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star"></i>
                            <span>Like</span>
                        </label>
                    </form>

                    <div className='col-5'>
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.2497176627135!2d114.20457191495683!3d22.419624985261784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089e5d1181af%3A0x3ce53c544b7ea29e!2z6aaZ5riv5Lit5paH5aSn5a24!5e0!3m2!1szh-TW!2shk!4v1670991694331!5m2!1szh-TW!2shk"} 
                                    width="100%" 
                                    height="250px" 
                                    style={{border:"0"}}
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">         
                        </iframe>

                    </div>
                </div>
            </div>
        </section>  
    )
}


function UserEventList(props){
    return(
        <section className=''>
        <div className='container-fluid bg-light mt-4 pb-4  table-responsive table-bordered'>
            <table className="col-5 table mt-3 table-hover">
                <thead className='shadow shadow-sm border-bottom-1'>
                    <tr className='' style={{textAlign: "center"}}>
                        <th scope="col" colspan="2" className='border border-dark '>
                            <h3 ><strong>Locations </strong></h3>
                        </th>
                        <th scope="col" className='border border-dark '>
                            <h3><strong>What's on</strong></h3>
                        </th>
                    </tr>
                </thead >

                <tbody className='mt-1'>
                    <UserVenueFileCard/>
                </tbody>
            </table>
        </div>
    </section>  
    )
}

export {UserEventAddress, UserEventList}