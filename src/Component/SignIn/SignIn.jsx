import "./SignIn.css";
import { Outlet } from "react-router-dom";
import { signInWithGooglePopup } from "../../Utils/Firebase/firebase.js";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
  };
  return (
    <>
      <Outlet />
      <div className="container mt-5 form-containear">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <h3 className="mb-3">Sign In</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </form>
            <button onClick={logGoogleUser} className="btn btn-primary">
              Google Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
