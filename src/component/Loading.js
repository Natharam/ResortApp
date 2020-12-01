import React from "react";
// import { FaSpinner } from "react-icons/fa";

function Loading() {
  return (
    <div className="loading">
      {/* <FaSpinner /> */}
      <i className="fa fa-refresh fa-spin fa-5x fa-fw" aria-hidden="true"></i>
      <span className="sr-only">Refreshing...</span>
    </div>
  );
}

export default Loading;
