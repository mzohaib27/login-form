import React from "react";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="myCard">
          <div className="row">
            <div className="col-md-6">
              <div className="myLeftCtn">
                <form className="myform text-center">
                  <header>Create New Account</header>

                  <div className="form-group">
                    <i className="fas fa-user"></i>
                    <input
                      className="myInput"
                      type="text"
                      placeholder="Username"
                      id="username"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-envelope"></i>
                    <input
                      className="myInput"
                      type="email"
                      placeholder="Email"
                      id="email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <i className="fas fa-lock"></i>
                    <input
                      className="myInput"
                      type="password"
                      placeholder="Password"
                      id="password"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>
                      <input
                        id="check_1"
                        name="check_1"
                        type="checkbox"
                        required
                      />
                        <small>I read and agree to Terms and Conditions</small>
                      
                      <div className="invalid-feedback">
                        You must check the box.
                      </div>
                    </label>
                  </div>

                  <input
                    className="butt"
                    type="submit"
                    value="CREATE ACCOUNT"
                  />
                </form>
              </div>
            </div>

            <div className="col-md-6">
              <div className="myRightCtn">
                <div className="box">
                  <header>Hello World!</header>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Maecenas porttitor congue massa. Fusce posuere, magna sed
                    pulvinar ultricies, purus lectus malesuada libero, sit amet
                    commodo magna eros quis urna. Nunc viverra imperdiet enim.
                    Fusce est. Vivamus a tellus.
                  </p>
                  <input
                    className="butt_out"
                    type="button"
                    value="LEARN MORE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
