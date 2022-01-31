import React from "react";

const ListePays = (props) => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 m-3">
          <div className="card">
            <div className="card-header">{props.nom}</div>
            <div className="card-body">{props.addresses}</div>
            <div className="card-body">{props.pivotLocal}</div>
            <div className="card-body">{props.telephone}</div>

            <div className="card-footer">
              Footer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListePays;
