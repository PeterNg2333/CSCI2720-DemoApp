import AdminEventCard from "../components/AdminEventCard";
import React, {useEffect, useRef, useState} from "react";
import AdminNavBar from "../components/AdminNavBar";
import {backendUrl} from "../variables";
import CreatEventDialog from "../components/CreateEventDialog";
import DatePicker from 'react-date-picker'

function AdminPanelEventPage() {
    const [eventTypes, setEventTypes] = useState(["type one", "type two", "type three"])
    const [locations, setLocation] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventSelected, setEventSelected] = useState(null); //number
    const creatEventRef = useRef(null);

    function getLocation() {
        fetch(`${backendUrl}/venue/all`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.venues);
                setLocation(data.data.venues);
            });
    }

    function getVenue() {
        fetch(`${backendUrl}/event/all`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data);
                setEvents(data.data);
            });
    }

    function createNewEvent(eventTitle,programDate,eventDescription,eventPresenter,eventPrice,programTime,ageLimit,remark,eventLocation) {
        let myHeaders = new Headers();
        let urlencoded = new URLSearchParams();
        urlencoded.append("venue", eventLocation);
        urlencoded.append("title", eventTitle);
        urlencoded.append("datetime", programDate);
        urlencoded.append("description", eventDescription);
        urlencoded.append("presenter", eventPresenter);
        urlencoded.append("price", eventPrice);
        urlencoded.append("programTime", programTime);
        urlencoded.append("ageLimit", ageLimit);
        urlencoded.append("remark", remark);
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        };

        fetch(`${backendUrl}/event/create`, requestOptions)
            .then((response) => {
                console.log(response)
            })
    }

    useEffect(() => {
        getLocation();
        getVenue();
        //createNewEvent();
    }, []);

    return (
        <div>
            <CreatEventDialog ref={creatEventRef} dialogTitle="create event" locations={locations} createNewEvent={createNewEvent}/>
            <AdminNavBar isAdmin/>
            <form className='mt-3 d-flex flex-row '>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="location"
                           placeholder="Location"/>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventId"
                           placeholder="Event ID"/>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventName"
                           placeholder="Event Name"/>
                </section>
                <section className="col mx-2">
                    <select className="form-select border border-dark h-100" aria-label="Even Type">
                        <option selected>Event Type</option>
                        {
                            eventTypes.map((eventType, index) => {
                                return <option value={index}>{eventType}</option>
                            })
                        }
                    </select>
                </section>
                <section className="col mx-2">
                    <input type="search" className="form-control border border-dark h-100" id="eventName"
                           placeholder="Date and time"/>
                </section>
                <section className="col mx-2">
                    <button type="button" className="btn btn-sm btn-dark one-line bg-deep-blue h-100 w-100">Find Event
                    </button>
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
                    <button onClick={() => creatEventRef?.current?.showDialog()}
                            type="button"
                            className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                        <i className="fa fa-circle-plus color-green fa-2x"></i>
                        <div className='color-green'>Create</div>
                    </button>
                </section>
                {eventSelected ?
                    <section className="col mx-2 ">
                        <button type="button"
                                className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                            <i className="fas fa-trash-alt color-red fa-2x"></i>
                            <div className='color-red'>Cancel</div>
                        </button>
                    </section> :
                    <section className="col mx-2 ">
                        <button type="button"
                                className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                            <i className="fas fa-trash-alt color-red fa-2x"></i>
                            <div className='color-red'>Delete</div>
                        </button>
                    </section>
                }

                `
            </form>
            <div className="container-xl">
                {events?.map((event,index)=>{
                    return(
                        <div className="form-check d-flex flex-row align-items-center">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={eventSelected===event.eventId} onClick={()=>{
                                setEventSelected(event.eventId);
                            }}/>
                            <AdminEventCard name={event.name} description={event.description} location={""} type={"type"}
                                            datetime={"datetime"}/>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default AdminPanelEventPage;