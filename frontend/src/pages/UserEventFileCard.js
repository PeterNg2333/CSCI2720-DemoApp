import React from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';

/** Components for showing the event information in different page
*/

/** 
* UserEventFileCard_small: show an event in a rectangle box, used http://localhost:3000/Location/ & http://localhost:3000/Location/Favorite_Venue
*/
function UserEventFileCardSmall(props){
    return(
        <div className='container'>
            <div className='row p-0'>
                {/** Date of the Event  */}
                <div className='border border-dark EventFileCardSamll'>
                    <div className="text-center">
                        <h3 className="boxCard">14</h3>
                        <p className="boxCard">Dec</p>
                        <p className="boxCard">2022</p>
                    </div>
                </div>
            </div>

            {/** Name, details of the event */}
            <div className='row mt-1 text-center card-body tag-center'>
                <h6 style={{marginBottom: "0px"}} >Latest Event Name</h6>
                <Link to="" className='d-none'><button> Learn more </button></Link>
            </div>
        </div>
    );
}


/** 
* UserEventFileCard_regular: show an event as a list item, used in http://localhost:3000/Location/ABC/Events
*/
function UserEventFileCardRegular(props){
    return(
        <div className='col-lg-12 col-md-6'>
            <div className='row p-0 mb-3 mt-2 size CardRegular'>

                {/** Date of the Event  */}
                <div className='col-lg-1 col-md-3 border border-dark'><div className="text-center">
                    <h3 className="boxCard mt-lg-1 mt-md-3" style={{marginBottom: "0px"}}>14</h3>
                    <p className="boxCard">Dec</p>
                    <p className="boxCard">2022</p>
                </div></div>

                {/** Name, details, external links (info pages from the government) of the event */}
                <div className='col-lg-10 col-md-8'>
                    <div className='mt-1 card-body tag-center'>
                        <h4 className="boxCard my-1" >Latest Event Name</h4>

                        <div className='row'>
                            <div className='col-lg-10 col-md-12'>
                                <p className="boxCard my-0"> Time </p>
                                <p className="boxCard my-0"> Intr: abcdefghi123456789 </p>
                            </div>

                            <div className='mt-4 col-lg-2 col-md-12'>
                                <Link to="" ><button> Learn More {">>>"} </button></Link>
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>

                
            </div>

    );
}

export {UserEventFileCardSmall, UserEventFileCardRegular};