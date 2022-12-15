import AdminEventCard from "../components/AdminEventCard";
import UserNavBar from "../components/UserNavBar";
import React, {useState} from "react";
import AdminNavBar from "../components/AdminNavBar";

function AdminPanelEventPage() {
    const [eventTypes,setEventTypes]=useState(["type one","type two","type three"])
    return (
        <div>
            <AdminNavBar isAdmin/>
            <form className='mt-3 d-flex flex-row '>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="location" placeholder="Location"/>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventId" placeholder="Event ID"/>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventName" placeholder="Event Name"/>
                </section>
                <section className="col mx-2">
                    <select className="form-select border border-dark h-100" aria-label="Even Type">
                        <option selected>Event Type</option>
                        {
                            eventTypes.map((eventType,index)=>{
                                return <option value={index}>{eventType}</option>
                            })
                        }
                    </select>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventName" placeholder="Date and time"/>
                </section>
                <section className="col mx-2">
                    <button type="button" className="btn btn-sm btn-dark one-line bg-deep-blue h-100 w-100">Find Event</button>
                </section>
                <section className="col mx-2">
                    <select className="form-select border border-dark h-100" aria-label="Order by">
                        <option selected>Order by</option>
                        <option value="location">Location</option>
                        <option value="eventId">Event ID</option>
                        <option value="eventName">Event Name</option>
                        <option value="dateAndTime">Date and time</option>
                    </select>
                </section>
                <section className="col mx-2">
                <button type="button" className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                    <i className="fa fa-circle-plus color-green fa-2x"></i>
                    <div className='color-green'>Create</div>
                </button>
                </section>
                <section className="col mx-2 ">
                    <button type="button" className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                        <i className="fas fa-trash-alt color-red fa-2x" ></i>
                        <div className='color-red'>Delete</div>
                    </button>
                </section>
`
            </form>


            <AdminEventCard name={"name"} description={"description"} location={"location"} type={"type"}
                            datetime={"datetime"}/>
        </div>
    )
}

export default AdminPanelEventPage;