import React from "react";
import '../comp.css';


function Register() {
  return (
    <div>
       <img class="card-img" src="/assets/bg.jpg" alt="background" height="550px" />
      <div className="register">
        <form>
          <div className="mb-3">
            <label for="userName" className="shine">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-3"
              id="userName"
              aria-describedby="userName"
            />
            <label for="phone" className="shine">
              Contact No.
            </label>
            <input
              type="tel"
              className="form-control mb-3"
              id="phone"
              aria-describedby="phone"
            />
            <label for="exampleInputEmail1" className="shine">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="shine2">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="shine">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-3"
              id="exampleInputPassword1"
            />
            <label for="exampleConfirmtPassword1" className="shine">
              Confirm Password
            </label>
            <input
              type="confirm-password"
              className="form-control"
              id="exampleConfirm    Password1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked
            />
            <label className="shine" for="exampleCheck1">
              Login once registered
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;