import React, {useEffect, useImperativeHandle, useState} from "react";
import PropTypes from "prop-types";
import {Col, Modal, Row} from "react-bootstrap";
import {Controller, useForm} from "react-hook-form";
import DatePicker from "react-date-picker";

const UpdateEventDialog = React.forwardRef(function UpdateEventDialog(props, ref) {
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

        // props?.updateNewEvent(
        //     data.eventTitle,
        //     data.programDate.toISOString(),
        //     data.eventDescription,
        //     data.eventPresenter,
        //     data.eventPrice,
        //     data.programTime,
        //     data.ageLimit,
        //     data.remark,
        //     data.eventLocation,
        // );
        // handleClose();
    }

    function showDialog() {

        setShow(true);
    }



    useImperativeHandle(ref, () => ({
        showDialog,
    }), []);

    useEffect(()=>{
        setEventSelected(props.eventSelected);
        setVenueSelected(props.eventSelected.venue._id)
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
                                <div className='color-green'>Create</div>
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
                        <Controller
                            name="programDate"
                            control={control}
                            rules={{ required: true }}
                            defaultValue={eventSelected?.datetime}
                            render={({ field }) => <DatePicker className="d-block w-75 bg-transparent" onChange={(date) => field.onChange(date)}
                                                               value={field.value}/>}
                        />

                        <label htmlFor="eventDescription">Event Description</label>
                        <textarea className="form-control border border-dark w-75" id="eventDescription"
                                  cols="40" rows="5" value={eventSelected?.description}
                                  placeholder="Event Description" {...register("eventDescription", { required: true})}/>
                        <label htmlFor="eventPresenter">Presenter</label>
                        <input className="form-control border border-dark w-75" id="eventPresenter" value={eventSelected?.presenter}
                               placeholder="Event Presenter" {...register("eventPresenter", { required: true})}/>
                        <label htmlFor="eventPrice">Price</label>
                        <input className="form-control border border-dark w-75" id="eventPrice" value={eventSelected?.price}
                               placeholder="Event Price" {...register("eventPrice", { required: true})}/>
                        <label>Program Time</label>
                        <input className="form-control border border-dark w-75" id="eventPrice" value={eventSelected?.programTime}
                               placeholder="Program Time" {...register("programTime", { required: true})}/>
                        <label htmlFor="ageLimit">Age Limit</label>
                        <input className="form-control border border-dark w-75" id="ageLimit" value={eventSelected?.ageLimit}
                               placeholder="Age Limit" {...register("ageLimit", { required: true})}/>
                        <label htmlFor="remark">Remark</label>
                        <input className="form-control border border-dark w-75" id="remark"  value={eventSelected?.remark}
                               placeholder="Remark" {...register("remark", { required: true})}/>
                    </div>
                    <label>Location</label>
                    <div className="container rounded w-100 border border-dark px-3 pt-2 pb-3">
                        <label htmlFor="eventLocation">Location</label>
                        <select className="form-select border border-dark w-75" aria-label="Order by"
                                id="eventLocation" {...register("eventLocation")} defaultValue={venueSelected} onChange={(value)=>{setVenueSelected(value)}}>
                            {
                                props?.locations.map((location) => {
                                    return <option value={location._id}>{location.name}</option>
                                })
                            }
                        </select>
                    </div>
                </Modal.Body>
            </form>
        </Modal>
    )
});

UpdateEventDialog.defaultProps = {};

UpdateEventDialog.propTypes = {
    updateEvent: PropTypes.func,
    dialogTitle: PropTypes.string,
    eventSelected: PropTypes.object,
    locations: PropTypes.object,
};

export default UpdateEventDialog;