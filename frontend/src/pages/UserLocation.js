import React from 'react';
import placeholder_canRemove from './placeholder_canRemove.png'

/** Location Pages*/
function UserLocation(){
    return(<>
        <MapSection/>
        <VenueSection/>
    </>);
}


/** Google API Map* */
function MapSection(){
    return(
        <section className='col-lg-6'>
            <div className='align-middle bg-light mt-4 pb-4'>

                <div className='row'>

                    <form className='form-group col-8 mx-3 mr-0 mt-3'>
                        <div className="rounded input-group">
                            <input type="search" className="form-control" placeholder="Find Venue"/>
                            <button className='btn navbar-btn bg-dark nav-item-text '>
                                    <i class="fa fa-regular fa-search"></i>
                            </button>     
                        </div>
                    </form>

                    <form className='form-group col-3 mr-3 mt-3 p-0 d-inline'>
                        <select class="form-select rounded input-group" aria-label="">
                            <option selected>Sort by </option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </form>

                </div>

                <div className='row rounded-top border border-dark b-3 mx-3 mt-3'>
                    <img className='img-fluid' src={placeholder_canRemove} alt="img" style={{maxWidth: '100%', height: 'auto'}}/>
                </div>

            </div>
        </section>
    );
}


/** Venue table */
function VenueSection(){
    return(
        <section className='col-lg-6'>
            <div className='align-middle bg-light mt-4 pb-4 table-responsive'>
                <table className="row table b-3 mx-3 mt-3 table-hover">
                    <thead>
                        <tr>
                        <th scope="col" colspan="2" className='border border-dark col-10'>Location</th>
                        <th scope="col" className='border border-dark col-9'> What's on </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                        <th scope="row">1sssssssssssssssssssssssssssssss</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Birdasdasdasdasdasdasdasdasdasd</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>  
    );
}

/** Venue File card */

export default UserLocation;
