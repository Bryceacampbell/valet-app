import React from "react";

import { Modal, Button, ButtonToolbar } from "react-bootstrap";

import "./style.css";

function RequestModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Request Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-4">
                        <p>Column</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Column</p>
                    </div>
                    <div className="col-lg-4">
                        <p>Column</p>
                    </div>
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

function ModalButton(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <ButtonToolbar>
            <Button onClick={() => setModalShow(true)}>
                View Request
        </Button>
            <RequestModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                {...props}
            />
        </ButtonToolbar>
    );
};

export default ModalButton;