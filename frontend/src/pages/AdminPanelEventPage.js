import AdminEventCard from "../components/AdminEventCard";
import UserNavBar from "../components/UserNavBar";
import React from "react";

function AdminPanelEventPage() {
    return (
        <div>
            <UserNavBar isAdmin/>
            <form className='mt-3'>
                <div className='row'>
                <section className="col-2 rounded">
                    <input type="search" className="form-control" id="location" placeholder="Location"/>
                </section>
                <section className="col-2 rounded">
                    <input type="search" className="form-control" id="eventId" placeholder="Event ID"/>
                </section>
                <section className="col-2 rounded ">
                    <input type="search" className="form-control" id="eventName" placeholder="Event Name"/>
                </section>
                <section className="col-2 rounded ">
                    <input type="search" className="form-control" id="eventName" placeholder="Date and time"/>
                </section>
                </div>
            </form>


            <AdminEventCard name={"name"} description={"description"} location={"location"} type={"type"}
                            datetime={"datetime"}/>
        </div>
    )
}

export default AdminPanelEventPage;