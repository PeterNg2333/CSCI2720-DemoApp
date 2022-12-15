import {Col, Modal, Row} from "react-bootstrap";
import React, {useImperativeHandle, useState} from "react";
import PropTypes from "prop-types";


const CreatEventDialog = React.forwardRef(function CreatEventDialog(props, ref) {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false)
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onSubmit();
        handleClose();
    }

    function showDialog() {
        setShow(true);
    }

    useImperativeHandle(ref, () => ({
        showDialog,
    }), []);


    return (
        <Modal show={show} onHide={handleClose} backdrop="static" size="xl">
            <Modal.Header>
                <Modal.Title>
                    <h4 className={"m-0"}>{props.dialogTitle}</h4>
                </Modal.Title>

                <Row>
                    <Col>
                        <button onClick={handleClose}
                                type="button"
                                className="btn btn-outline-light bg-transparent d-flex align-content-center justify-content-around h-100">
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
                <form onSubmit={onSubmit}>
                    <label htmlFor="eventName">Event Name</label>
                    <input className="form-control border border-dark h-100 w-50" id="eventName"
                           placeholder="Event Name"/>
                </form>
            </Modal.Body>
        </Modal>
    )
});

CreatEventDialog.defaultProps = {};

CreatEventDialog.propTypes = {
    onSubmit: PropTypes.func,
    dialogTitle: PropTypes.string
};

export default CreatEventDialog;