import './App.css';
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
//import { BrowserRouter as Switch } from "react-router-dom";
import Navbar from './component/Navbar';
import Appointment from './component/Appointment';
import Branch from './component/Branch';
import Service from './component/Service';
import Manager from './component/Manager';
import Customer from './component/Customer';
import Login from './component/login';
import AServices from './component/AServices';
import AddService from './component/AddService';
//import AddManager from './component/AddManager';
import EditService from './component/EditService';
import Protected from './component/Protected';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          {/* <Route path="/" element={<Protected Component={Login} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Service" element={<Protected Component={Service} />}/>
          <Route path="/Branch" element={<Protected Component={Branch} />}/>
          <Route path="/Manager" element={<Protected Component={Manager} />}/>
          <Route path="/Customer" element={<Protected Component={Customer} />}/>
          <Route path="/AServices" element={<Protected Component={AServices} />}/> */}

<Route path="appointment" component={Appointment} exact/>
<Route path="/" component={Login} exact/>
          <Route path="/Appointment" component={Appointment} exact/>
          <Route path="/Service" component={Service} exact/>
          <Route path="/Branch" component={Branch} exact/>
          <Route path="/Manager" component={Manager} exact/>
          <Route path="/Customer" component={Customer} exact/>
          <Route path="/AServices" component={AServices} exact/>
          <Route path="/AddService" component={AddService} exact/>
          <Route path="/EditService" component={EditService} exact/>

          
                    
                        
                    
                <hr></hr>




          {/* <Route exact path="/"><Appointment /></Route>
          <Route exact path="/appointment"><Appointment /></Route>
          <Route exact path="/service"><Service /></Route>
          <Route exact path="/branch"><Branch /></Route>
          <Route exact path="/customer"><Customer /></Route> */}

        </Switch>
      </Router>

    </>
  );
}

export default App;
