import React from 'react';
import {BrowserRouter, Route, Routes, Link, useParams, useLocation} from 'react-router-dom';
import {UserEventFileCard_regular} from './UserEventFileCard';
import placeholder_canRemove from './placeholder_canRemove.png'
import {UserCommentSection, UserCommentInput} from './UserCommentSection';


function UserEventLocationHead(props){
    return(
        <div className='row mt-3'>
            <div className='col-6'>
                <Link to="/Location/Location_A/Events" >
                    <h2 style={{color: "#181E84"}}>Location A</h2>
                </Link>

                <div className='row'>
                    <p className='mx-3 mt-3'><i className='fa fa-map'></i> This is a address</p>
                    <p className='mx-3'><i className='fa fa-info'></i> This is some information about the location</p>
                </div>

                <div className='row'><UserCommentInput/></div>
                
             </div>

            <form  className="d-inlineBlock col-1 mt-1">
                <label for={/**assign a unique id*/ "LikeButton"}  id="likeButtionLabel">
                    <input type="checkbox" id={/**assign a unique id*/ "LikeButton"} className='label' style={{}}/>
                    <i className="fa fa-star-o"></i>  
                    <i className="fa fa-star"></i>
                    <span>Like</span>
                </label>
            </form>

            <div className='col-5'><iframe 
                src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.2497176627135!2d114.20457191495683!3d22.419624985261784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404089e5d1181af%3A0x3ce53c544b7ea29e!2z6aaZ5riv5Lit5paH5aSn5a24!5e0!3m2!1szh-TW!2shk!4v1670991694331!5m2!1szh-TW!2shk"} 
                width="100%" 
                height="250px" 
                style={{border:"0"}}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">         
            </iframe></div>

        </div>
    );
}

function UserEventList(props){
    return(
        <section className='pb-3'>
            <h2 className='m-3 text-center'>Upcoming Events</h2>
            <div className='row'>
                <form className='form-group col-8 mx-3 mr-0 mt-3'>
                    <div className="rounded input-group">
                        <input type="search" className="form-control" placeholder="Find Events"/>
                        <button className='btn navbar-btn bg-dark nav-item-text '>
                                <i class="fa fa-regular fa-search"></i>
                        </button>     
                    </div>
                </form>

                <form className='form-group col-3 mr-3 mt-3 p-0 pt-1 d-inline'>
                    <select class="form-select rounded input-group" aria-label="">
                        <option selected>Sort by </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </form>
            </div><br/>
            
            <div className='row'>
                <UserEventFileCard_regular/>
                <UserEventFileCard_regular/>
                <UserEventFileCard_regular/>
                <UserEventFileCard_regular/>
                <UserEventFileCard_regular/>
            </div>


        </section>  
    )
}

export {UserEventLocationHead, UserEventList}