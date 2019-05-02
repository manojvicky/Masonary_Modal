import React from "react";
import { Modal } from "react-bootstrap";
class ModalComponent extends React.Component {
  componentWillMount() {
    if (this.props.match.params.id) {
      if (
        this.props.match.params.id !== (this.props.data && this.props.data.id)
      ) {
        this.props.history.push("/F0F");
      }
    }
  }

  render() {
    console.log("modal Props", this.props);
    const { data, imageURL, history, match } = this.props;
    return (
      <Modal
        show={!!match.params.id}
        onHide={() => {
          history.push("/");
        }}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img style={{ width: "100%" }} src={imageURL} alt={data.title} />
        </Modal.Body>
        <Modal.Footer>{data.ownername}</Modal.Footer>
      </Modal>
    );
  }
}

export default ModalComponent;
