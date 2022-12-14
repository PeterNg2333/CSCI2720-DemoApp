import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import placeholder_canRemove from './placeholder_canRemove.png'
import UserEventFileCard_smallSize from './UserEventFileCard';

function UserVenueFileCard(){
    return (
        <tr className=''>
            <th scope="row">
                <div className='row'>
                    <Link to="/Location/Location_A/Events" className='col-7' ><h4 style={{color: "#181E84"}}>Location A</h4></Link>
                    
                    <form  class="custom-checkbox d-inlineBlock col-4 mt-1">
                    <label for={/**assign a unique id*/ "LikeButton"}  id="likeButtionLabel">
                        <input type="checkbox" id={/**assign a unique id*/ "LikeButton"} className='label' style={{}}/>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star"></i>
                        <span>Like</span>
                    </label>
                    </form>
                </div>

                <div className='row'>
                    <p className='mx-3'>
                        <i className='fa fa-map'></i> This is a address
                    </p>

                    <p className='mx-3'>
                        <i className='fa fa-info'></i> This is some information about the location
                    </p>
                </div>
               
            </th>

            <td width={100}>
                <div>
                <img className='img-fluid' src={placeholder_canRemove} alt="img" style={{ maxWidth: '100px', verticalAlign:"middle", height: 'auto'}}/>
                </div>
        
            </td>

            <td className=''>
                <div>
                    <UserEventFileCard_smallSize/>
                </div>
            </td>
        </tr>
    );
}

export default UserVenueFileCard;