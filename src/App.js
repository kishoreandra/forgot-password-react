import React, { useState } from "react";
import "./App.css";

function App() {
  const [onSave, setOnSave] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const handleSave = () => {
    // const isValid = ValidateEmail(email);
    if (validEmail) {
      setOnSave(!onSave);
    }
    // if (isValid) {
    //   setOnSave(!onSave);
    // }
  };
  function ValidateEmail(email) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setValidEmail(true);
      // return true;
    } else {
      setValidEmail(false);
      // return false;
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {onSave ? (
              <>
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Forgot password
                  </h5>
                  {/* <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button> */}
                  <img
                    className="cancel-svg"
                    data-bs-dismiss="modal"
                    src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-cancel-mintab-for-ios-becris-lineal-becris.png"
                  />
                </div>
                <div className="modal-body">
                  <p className="email-msg">
                    Enter the e-mail address linked to your account below.
                  </p>
                  <div class="form-group email-grp required">
                    <label
                      className="control-label"
                      htmlFor="exampleInputEmail1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      class={
                        validEmail
                          ? `form-control input-email`
                          : `form-control input-email invalid`
                      }
                      id="exampleInputEmail1"
                      placeholder="johndoe12@gmail.com"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        ValidateEmail(e.target.value);
                      }}
                    />
                  </div>
                  {!validEmail && (
                    <p className="invalid-email-msg">
                      Modal body text goes here.
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
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <ul>
                    <li>fdsfffffffffffffffffsdfdsddsf</li>
                    <li>fdsfshttttttttttttttttttt</li>
                    <li>zdsssssssssssssssssssss</li>
                    <li>kjfghsdffffffffffffffff</li>
                  </ul>
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
