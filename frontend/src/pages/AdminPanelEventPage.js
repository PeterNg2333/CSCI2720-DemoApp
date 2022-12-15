import AdminEventCard from "../components/AdminEventCard";
import UserNavBar from "../components/UserNavBar";
import React, {useState} from "react";

function AdminPanelEventPage() {
    const [eventTypes,setEventTypes]=useState(["type one","type two","type three"])
    return (
        <div>
            <UserNavBar isAdmin/>
            <form className='mt-3 d-flex flex-row'>
                <section className="w-10 mx-2">
                    <input type="search" className="form-control border border-dark" id="location" placeholder="Location"/>
                </section>
                <section className="w-10 mx-2">
                    <input type="search" className="form-control border border-dark" id="eventId" placeholder="Event ID"/>
                </section>
                <section className="w-10 mx-2">
                    <input type="search" className="form-control border border-dark" id="eventName" placeholder="Event Name"/>
                </section>
                <section className="w-10 mx-2">
                    <select className="form-select border border-dark" aria-label="Even Type">
                        <option selected>Event Type</option>
                        {
                            eventTypes.map((eventType,index)=>{
                                return <option value={index}>{eventType}</option>
                            })
                        }
                    </select>
                </section>
                <section className="w-10 mx-2">
                    <input type="search" className="form-control border border-dark" id="eventName" placeholder="Date and time"/>
                </section>
                <section className="w-10 mx-2">
                    <select className="form-select border border-dark" aria-label="Order by">
                        <option selected>Order by</option>
                        <option value="location">Location</option>
                        <option value="eventId">Event ID</option>
                        <option value="eventName">Event Name</option>
                        <option value="dateAndTime">Date and time</option>
                    </select>
                </section>
            </form>


            <AdminEventCard name={"name"} description={"description"} location={"location"} type={"type"}
                            datetime={"datetime"}/>
        </div>
    )
}

export default AdminPanelEventPage;