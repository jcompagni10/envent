import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class SessionModal extends React.Component {
  constructor(props) {
    super(props);
  }


  // getInitialState() {
  //   return { showModal: false };
  // }

  // close() {
  //   this.setState ({ showModal: false });
  // }

  // open() {
  //   this.setState({ showModal: true });
  // }

  render() {
    return (
      <div className="static-modal">
      <Modal show={true} onHide={this.props.closeModal}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            One fine body...
          </Modal.Body>

          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>

        </Modal.Dialog>
          </Modal>

      </div>
    );
  }
}