import React, {useState} from 'react'  
import "./App.css";

function App() {
  const [onSave, setOnSave] = useState(true);
  const [email , setEmail] = useState('');
  const [validEmail , setValidEmail] = useState(true)
  const handleSave = () => {
    const isValid = ValidateEmail(email)
      if(isValid) {
        setOnSave(!onSave)
      }
  }
  function ValidateEmail(email){
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
      setValidEmail(true) 
      return true
    } else{
      setValidEmail(false)
      return false
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
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {onSave ? 
                <><div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">
                    Forgot password
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <input type="email" value={email} placeholder="name@example.com" onChange = {(e)=> setEmail(e.target.value)}/>
                  {!validEmail && <p>Modal body text goes here.</p>}

                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    // data-bs-dismiss="modal"
                    onClick = {handleSave}
                  >
                    Save
                  </button>
                </div>
                </> 
                : 
                <><div className="modal-header">
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
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
