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
            <div className='align-middle bg-primary mt-4 pb-4'>
                <div className='mx-2'>
                    <form>
                        <label>Search</label>
                    </form>
                </div>

                <div className='rounded-top border border-dark b-3 mx-3 mt-4'>
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
            <div className='align-middle bg-primary mt-4 pb-4'>
                asd
            </div>
        </section>  
    );
}

/** Venue File card */

export default UserLocation;
