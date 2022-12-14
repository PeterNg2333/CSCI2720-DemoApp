import React from 'react';
import UserVenueFileCard from './UserVenueFileCard';
import placeholder_canRemove from './placeholder_canRemove.png'

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
        <section className='col-lg-6 '>
            <div className='container-fluid align-middle bg-light mt-4 pb-4  table-responsive'>
                <table className="col-5 table mt-3 table-hover">
                    <thead className='shadow shadow-sm border-bottom-1'>
                        <tr className=''>
                        <th scope="col" colspan="2" className='border border-dark'>Location</th>
                        <th scope="col" className='border border-dark '> What's on </th>
                        </tr>
                    </thead >

                    <tbody className='mt-1'>
                    <UserVenueFileCard/>
                        <UserVenueFileCard/>
                        <UserVenueFileCard/>
                    </tbody>
                </table>
            </div>
        </section>  
    );
}



export {MapSection, VenueSection};
