import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "./Modal";
export default withRouter(
  connect((state, ownProps) => {
    const data = state.app.data.filter(
      image => image.id === ownProps.match.params.id
    );
    const url = state.IMAGES_URL[ownProps.match.params.id];
    return {
      data: (data && data[0]) || false,
      imageURL: (url && url.imageURL) || ""
    };
  })(Modal)
);
