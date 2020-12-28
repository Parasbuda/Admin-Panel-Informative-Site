import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
toast.configure();
const Alert = ({ text, error, success, message }) => {
  useEffect(() => {
    notify({ text, error, success, message });
  }, [text, error, success, message]);
  //function which handles the message for alert
  const notify = ({ text, success, error, message }) => {
    if (success) {
      toast.info(`Welcome Admin `);
    }
    if (error) {
      toast.error(`${text}`);
    }

    if (message.create || message.delete) {
      toast.info(message.create || message.delete);
    }
    if (message.createFail || message.deleteFail) {
      toast.error(message.createFail || message.deleteFail);
    }
  };
  return <></>;
};
const mapStateToProps = (state) => ({
  text: state.alert.text,
  error: state.alert.error,
  success: state.alert.success,
  message: state.message,
});
export default connect(mapStateToProps)(Alert);
