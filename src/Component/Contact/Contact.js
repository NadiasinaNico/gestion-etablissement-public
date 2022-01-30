import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <h4 className=" text-success">Contactez nous!</h4>
      <div className="row">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea type="text" className="form-control"></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
