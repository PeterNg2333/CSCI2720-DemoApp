import AdminPanelEventPage from "./AdminPanelEventPage";
import AdminNavBar from "../components/AdminNavBar";
import React from "react";

function AdminPanelUsersPage(){

    function getUser(){

    }
    return(
        <div>
            <AdminNavBar/>
            <form className='m-3 d-flex flex-row '>
                <section className="col-xl-4 col-md-3 col-sm-2 mx-1">
                    <input type="search" className="form-control border border-dark h-100" id="userName"
                           placeholder="User Name"/>
                </section>
                <section className="col-xl-3 col-md-3 col-sm-2 mx-1">
                    <input type="search" className="form-control border border-dark h-100" id="userId"
                           placeholder="User ID"/>
                </section>
                <section className="col mx-1">
                    <button type="button" className="btn btn-sm btn-dark one-line bg-deep-blue h-100 w-100">Find User
                    </button>
                </section>
                <section className="col mx-1">
                    <select className="form-select border border-dark h-100" aria-label="Order by">
                        <option selected>Order by</option>
                        <option value="location">Location</option>
                        <option value="eventId">Event ID</option>
                        <option value="eventName">Event Name</option>
                        <option value="dateAndTime">Date and time</option>
                    </select>
                </section>

                    <section className="col mx-1">
                        <button onClick={() =>{}}
                                type="button"
                                className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-center h-100">
                            <i className="fa fa-circle-plus color-green fa-2x"></i>
                            <div className='color-green'>Create</div>
                        </button>
                    </section>


                <section className="col mx-1">
                    <button type="button" className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100"
                            onClick={()=>{
                            }}
                    >
                        <i className="fas fa-trash-alt color-red fa-2x"></i>
                        <div className='color-red'>Delete</div>
                    </button>
                </section>
            </form>

        </div>
    )
}

export default AdminPanelUsersPage;