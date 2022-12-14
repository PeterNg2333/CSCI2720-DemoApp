import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import placeholder_canRemove from './placeholder_canRemove.png'
import {UserEventFileCard_small} from './UserEventFileCard';

function UserVenueFileCard(){
    return (
        <tr className=''>
            <th scope="row">
                <div className='row'>
                    <Link to="/Location/Location_A/Events" className='col-9' >
                        <h4 style={{color: "#181E84"}}>Location A</h4>
                    </Link>
                    
                    <form  className="custom-checkbox d-inlineBlock col-3 mt-1">
                        <label for={/**assign a unique id*/ "LikeButton"}  id="likeButtionLabel">
                            <input type="checkbox" id={/**assign a unique id*/ "LikeButton"} className='label' style={{}}/>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star"></i>
                            <span>Like</span>
                        </label>
                    </form>
                </div>

                <div className='row'>
                    <p className='mx-3'><i className='fa fa-map'></i> This is a address</p>
                    <p className='mx-3'><i className='fa fa-info'></i> This is some information about the location</p>
                </div>      
            </th>

            <td width={100}><div>
                <img className='img-fluid' src={placeholder_canRemove} alt="img" style={{ maxWidth: '100px', verticalAlign:"middle", height: 'auto'}}/>
            </div></td>

            <td className=''><div>
                    <UserEventFileCard_small/>
            </div></td>

        </tr>
    );
}

function UserVenueFileCard_favorite(props){
    return(
        <div className='col-xl-6 col-lg-12 p-0 my-2 bg-danger'>
            <div className='row m-0'>
                <UserVenueFileCard_favorite_A/>
                <UserVenueFileCard_favorite_B/>
            </div>

        </div>
    );
}

function UserVenueFileCard_favorite_A(props){
    return (
        <div className='card col-sm-3 col-md-3 col-xl-3 bg-primary tag-center' style={{maxWidth: "15rem"}}>
            <img className='card-img-top' src={placeholder_canRemove} alt="img" />
            <div className='card-body'>
                <h5 className='card-title'> Pasasdasdasdasdasdaasdasdasdsdasdasddasd </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );
}

function UserVenueFileCard_favorite_B(props){
    return (
    <div className="card bg-light mb-3 tag-center col-6 ms-2 mt-2 tag-center" style={{maxWidth: "25rem", padding:"0"}}>
        <h3 className="card-header">
            Header
        </h3>
            
        <div className="card-body">   
            <h5 className="card-title">Info card title</h5>
            <p className="card-text">Some quick example text to bxt to build onxt to build onxt to build onxt to build onxt to build onxt to build onxt to build onxt to build onxt to build onxt to build onuild on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
        
    );
}


export {UserVenueFileCard, UserVenueFileCard_favorite};