import React, { useState } from "react";
import { validateEmail } from "./utils/ValidationUtils";
import "./App.css";

function App() {
  const [onSave, setOnSave] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);

  const handleSave = () => {
    const isValid = validateEmail(email);
    if (isValid) {
      setValidEmail(true);
      setOnSave(!onSave);
    }else{
      setValidEmail(false);
    }
  };

  function openModal() {
    setOnSave(true);
    setEmail("");
    setValidEmail(true);
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        onClick={openModal}
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={onSave ? "modal-content" : "modal-content sent"}>
            {onSave ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Forgot password
                  </h5>
                  <img
                    className="cancel-svg"
                    alt="close"
                    data-bs-dismiss="modal"
                    src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
                  />
                </div>
                <div className="modal-body">
                  <p className="email-msg">
                    Enter the e-mail address linked to your account below.
                  </p>
                  <div className="form-group email-grp required">
                    <label
                      className="control-label"
                      htmlFor="exampleInputEmail1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      className={
                        validEmail
                          ? `form-control input-email`
                          : `form-control input-email invalid`
                      }
                      id="exampleInputEmail1"
                      placeholder="johndoe12@gmail.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        // validateEmail(e.target.value);
                      }}
                    />
                  </div>
                  {!validEmail && (
                    <p className="invalid-email-msg">
                      <img
                        alt="caution"
                        src="https://img.icons8.com/material-rounded/24/fa314a/break.png"
                      />
                      &nbsp;Please enter a valid email address
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Ex.
                      sometext@domain.com)
                    </p>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary save-btn"
                    // data-bs-dismiss="modal"
                    onClick={handleSave}
                  >
                    Send
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="modal-header">
                  <h1 className="modal-title" id="staticBackdropLabel">
                    E-mail sent!
                  </h1>
                  <img
                    className="cancel-svg"
                    alt="close"
                    data-bs-dismiss="modal"
                    src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
                  />
                </div>
                <div className="modal-body">
                  <p className="no-email-msg">
                    You will receive a link via e-mail in a few minutes.
                    <br />
                    Don't forget to check your spam.
                  </p>
                  <p className="no-email-msg2">
                    If you don't receive an e-mail, then no account is linked to
                    that e-mail address.
                  </p>
                </div>
                <div className="modal-footer">
                  <a className="create-account-link" href="#">
                    You can create your account here
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
