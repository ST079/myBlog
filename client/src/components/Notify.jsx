import React from "react";
import { Alert } from "react-bootstrap";
const Notify = ({ variant = "danger", msg, color = "red" }) => {
  return (
    <>
      <Alert
        variant={variant}
        style={{ textAlign: "center", fontWeight: "900", color }}
      >
        {msg}
      </Alert>
    </>
  );
};

export default Notify;
