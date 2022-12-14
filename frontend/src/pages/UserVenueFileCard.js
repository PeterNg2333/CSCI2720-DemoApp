import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import placeholder_canRemove from './placeholder_canRemove.png'
import {UserEventFileCardSmall} from './UserEventFileCard';


/** Components for showing location/venue information of different pages
*/

/** 
* UserVenueFileCard: location and latest event in the location pages http://localhost:3000/Location/
*/
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
                    <UserEventFileCardSmall/>
            </div></td>

        </tr>
    );
}

/** 
* UserVenueFileCard_favorite: location and latest events in the favourite pages http://localhost:3000/Location/Favorite_Venue
* What's special about the component is: it integrates the following component "UserVenueFileCard_favorite_A" & "UserVenueFileCard_favorite_A" (can show A&B in different sequence)
*/

function UserVenueFileCardFavorite(props){
    if (props.cardOrder == "AB")
        return(
            <div className='col-12 px-2 my-2'>
                <div className='row m-0'>
                    <div className='col-1'></div>
                    <UserVenueFileCardFavorite_A/>
                    <UserVenueFileCardFavorite_B/>
                    <div className='col-1'></div>
                </div>

            </div>
        );
    
    else 
        return(
            <div className='col-12 col-12 px-0 my-2 '>
                <div className='row m-0'>
                    <div className='col-1 '></div>
                    <UserVenueFileCardFavorite_B/>
                    <UserVenueFileCardFavorite_A/>
                    <div className='col-1 '></div>
                </div>

            </div>
        );
}


/** 
* Part of UserVenueFileCard_favorite: Image and address
*/
function UserVenueFileCardFavorite_A(props){
    return (
        <div className='card col-lg-5 col-md-3' style={{maxWidth: "28rem", padding:"0px" ,margin: "auto" }}>
            <h5 className='card-title mt-2 text-center'> Location Photo </h5>
            <img className='card-img-top' src={placeholder_canRemove} alt="img" style={{maxWidth: "50%" ,margin: "auto" }}/>
            <div className='card-body'>
                <h6 className='mx-3'><i className='fa fa-map'></i> This is a address</h6>
                <h6 className='mx-3'><i className='fa fa-info'></i> This is some information about the location</h6>
            </div>
        </div>
    );
}

/** 
* Part of UserVenueFileCard_favorite: Name and upcomming event
*/
function UserVenueFileCardFavorite_B(props){
    let zeroPadding={paddingRight: "0px",
                    paddingLeft: "0px"}

    return (
    <div className="card bg-lighttag-center col-lg-6 col-md-6 ms-3 mt-3 border-0" style={{maxWidth: "36rem", padding:"0" , margin: "auto" }}>
        <div className="card-header row mb-0">
            <Link to="/Location/Location_A/Events" className='col-9' >
                <h3 style={{color: "#181E84"}}>Location A</h3>
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
        
            
        <div className="card-body">   
            <h5 className="mx-2 card-title text-primary">Upcoming Event</h5>
            <div className='container '><div className='row' style={zeroPadding}>
                <div className='col-4' style={zeroPadding}><UserEventFileCardSmall/></div>
                <div className='col-4' style={zeroPadding}><UserEventFileCardSmall/></div>
                <div className='col-4' style={zeroPadding}><UserEventFileCardSmall/></div>

            </div></div>
        </div>
    </div>
        
    );
}


export {UserVenueFileCard, UserVenueFileCardFavorite};