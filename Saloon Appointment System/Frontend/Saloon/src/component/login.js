import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Login() {
 // const [manager, setManager] = useState({});
  const [message, setmessage] = useState("");
  const [credential, setCredential] = useState({credentialEmail: "", credentialPassword: ""});

   const history = useHistory();

  // function signIn() {
  //   history.push('/Navbar');
  // }


  const handleChange = (args) => {
    var copyOfCurrentManagerInState = { ...credential };
    copyOfCurrentManagerInState[args.target.name] = args.target.value;
    setCredential(copyOfCurrentManagerInState);
  };

  useEffect(() => {
    if (message != "") {
      setTimeout(() => {
        setmessage("");
      }, 2000);
    }
  }, [message]);

  const signIn = () => {
    if (
      credential.credentialEmail == "admin" &&
      credential.credentialPassword == "admin"
    ) {
      //setmessage("Please Enter Email & Password");
      history.push("/Service");
    } 
    else {
      // var helper = new XMLHttpRequest();
      // helper.onreadystatechange = () => {
      //   if (helper.readyState === 4 && helper.status === 200) {
      //     var result = JSON.parse(helper.responseText).data;
      //     setManager(result);
      //     checksignIn();
          // console.log(result);
          setmessage("Please Enter Valid Email & Password");
        }
      };

      // helper.open(
      //   "GET",
      //   "http://localhost:4000/manager/" +
      //     credential.credentialEmail +
      //     "/" +
      //     credential.credentialPassword
      // );
  //     helper.send();
  //   }
  // };

  // const checksignIn = () => {
  //   console.log(manager.manager_Email);
  //   if (Object.keys(manager).length === 0) {
  //     // clearBoxes();
  //     setmessage("Email / password is wrong!");
  //   }
  //   if (Object.keys(manager).length > 0) {
  //     console.log("Not Empty");
  //     sessionStorage.setItem("isloggedin", "true");
  //     sessionStorage.setItem("managerId", manager.manager_Id);

  //     history.push("/Branch");
  //     const sessionid = sessionStorage.getItem("managerId");
  //     console.log("session" + sessionid);
  //   }
  // };

  // const clearBoxes = () => {
  //   setCredential({ credentialEmail: "", credentialPassword: ""});
  // };

  return (
    <div>
      <center>
        <br></br>
        <br></br>
        <h1>Please Login Here</h1>
        <br></br>
        <br></br>
        <table>
          <tbody>
            <tr>
              <td className="td">User Name</td>
              <td className="td">
                <input
                  type="text"
                  name="credentialEmail"
                  value={credential.credentialEmail}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <tr>
              <td className="td">Password</td>
              <td className="td">
                <input
                  type="password"
                  name="credentialPassword"
                  value={credential.credentialPassword}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td className="td">
                <button className="btn btn-primary" onClick={signIn}>
                  Log in
                </button>
              </td>
              {/* <td className="td">
                <button className="btn btn-danger" onClick={clearBoxes}>
                  Reset
                </button>
              </td> */}
            </tr>
          </tbody>
        </table>
        <h6 style={{ color: "orangered" }}>{message}</h6>
      </center>
    </div>
  );
}

export default Login;
