import React, {useEffect, useImperativeHandle, useState} from "react";
import PropTypes from "prop-types";
import {Col, Modal, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import DatePicker from "react-date-picker";

const UpdateEventModal = React.forwardRef(function UpdateEventDialog(props, ref) {
    const [show, setShow] = useState(false);
    const [programDate, setProgramDate] = useState(new Date());
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
    const [eventSelected, setEventSelected] = useState(null); //number
    const [venueSelected, setVenueSelected] = useState(null); //number

    function handleClose() {
        setShow(false)

    }

    function onSubmit(data) {
        console.log(data);

        props?.updateNewEvent(
            eventSelected.eventId,
            data.eventTitle,
            data.programDate,
            data.eventDescription,
            data.eventPresenter,
            data.eventPrice,
            data.programTime,
            data.eventLocation,
            data.remark,
        );
        handleClose();
    }

    function showDialog() {
        setShow(true);
    }




    useImperativeHandle(ref, () => ({
        showDialog,
    }), []);

    useEffect(()=>{
        setEventSelected(props.eventSelected);
        setVenueSelected(props.eventSelected.venueId);
    },[props]);

    return(
        <Modal show={show} onHide={handleClose} backdrop="static" size="xl">
            <form onSubmit={handleSubmit(onSubmit)}>

                <Modal.Header>
                    <Modal.Title>
                        <h4 className={"m-0"}>{props.dialogTitle}</h4>
                    </Modal.Title>

                    <Row>
                        <Col>
                            <button type="submit" className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                                <i className="fa fa-circle-plus color-green fa-2x"></i>
                                <div className='color-green'>Update</div>
                            </button>
                        </Col>
                        <Col>
                            <button type="button" onClick={handleClose}
                                    className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
                                <i className="fas fa-trash-alt color-red fa-2x"></i>
                                <div className='color-red'>Cancel</div>
                            </button>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body>
                    <label>Event Description</label>
                    <div className="container rounded w-100 border border-dark px-3 pt-2 pb-3">
                        <label htmlFor="eventTitle">Event Title</label>
                        <input className="form-control border border-dark w-75" id="eventTitle" value={eventSelected?.title}
                               placeholder="Event Title" {...register("eventTitle", { required: true})}/>
                        <label>Program Date</label>
                        <input className="form-control border border-dark w-75" id="eventTitle" defaultValue={eventSelected?.datetime}
                               placeholder="Program Date" {...register("programDate", { required: true})}/>
                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea className="form-control border border-dark w-75" id="eventDescription"
                                  cols="40" rows="5" defaultValue={eventSelected?.description}
                                  placeholder="Event Description" {...register("eventDescription", { required: true})}/>
                        <label htmlFor="eventPresenter">Presenter</label>
                        <input className="form-control border border-dark w-75" id="eventPresenter" defaultValue={eventSelected?.presenter}
                               placeholder="Event Presenter" {...register("eventPresenter", { required: true})}/>
                        <label htmlFor="eventPrice">Price</label>
                        <input className="form-control border border-dark w-75" id="eventPrice" defaultValue={eventSelected?.price}
                               placeholder="Event Price" {...register("eventPrice", { required: true})}/>
                        <label>Program Time</label>
                        <input className="form-control border border-dark w-75" id="eventPrice" defaultValue={eventSelected?.programTime}
                               placeholder="Program Time" {...register("programTime", { required: true})}/>
                        {/*<label htmlFor="ageLimit">Age Limit</label>*/}
                        {/*<input className="form-control border border-dark w-75" id="ageLimit" value={eventSelected?.ageLimit}*/}
                        {/*       placeholder="Age Limit" {...register("ageLimit", { required: true})}/>*/}
                        <label htmlFor="remark">Remark</label>
                        <input className="form-control border border-dark w-75" id="remark"  defaultValue={eventSelected?.remark}
                               placeholder="Remark" {...register("remark", { required: true})}/>
                    </div>
                    <label>Location</label>
                    <div className="container rounded w-100 border border-dark px-3 pt-2 pb-3">
                        <label htmlFor="eventLocation">Location</label>
                        <select className="form-select border border-dark w-75" aria-label="Order by"
                                id="eventLocation" {...register("eventLocation")} defaultValue={venueSelected} onChange={(value)=>{setVenueSelected(value)}}>
                            {
                                props?.locations.map((location) => {
                                    return <option value={location.venueId}>{location.name}</option>
                                })
                            }
                        </select>
                    </div>
                </Modal.Body>
            </form>
        </Modal>
    )
});

UpdateEventModal.defaultProps = {};

UpdateEventModal.propTypes = {
    updateEvent: PropTypes.func,
    dialogTitle: PropTypes.string,
    eventSelected: PropTypes.object,
    locations: PropTypes.object,
};

export default UpdateEventModal;