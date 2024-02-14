import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useHistory } from "react-router-dom";

const Branch = () => {
  const [branchs, setcusts] = useState([]);
  const [managers] = useState([]);
  const [setBranchs] = useState([]);  //..........
  const [selectedUserId, setSelectedUserId] = useState(null);  //......
  const [selectedUserDetails, setSelectedUserDetails] = useState(null);    //...........

  const history = useHistory();

    // const addRecord =()=> {
    //     var helper = new XMLHttpRequest();
    //     helper.onreadystatechange = ()=>{
    //         if(helper.readyState == 4 && helper.status == 200){
    //             debugger;
    //             var result = JSON.parse(helper.responseText);
    //             if(result.affectedRows!=undefined){
    //                 if(result.affectedRows > 0){
    //                    setmessage("Record Added Successfully!");
    //                    setShouldCleanTextBoxes(true);
    //                 }else{
    //                    setmessage("We could not add the record.!")     (( New BRANCH ))
    //                    setShouldCleanTextBoxes(false);
    //                 }
    //             } else{
    //                 setmessage("Something went wrong! Try Again!"); 
    //                 setShouldCleanTextBoxes(false);  
    //             }
    //         }
    //     };
    //     helper.open("POST","http://localhost:4000/branch");
    //     helper.setRequestHeader("Content-Type", "application/json")
    //     debugger;
    //     helper.send(JSON.stringify(branch));
    // }



    // useEffect(()=>{
    //     if(message!=""){
    //         if(message == "Record Removed Successfully!"){
    //             //Refresh the set of employees
    //             var helper = new XMLHttpRequest();
    //             helper.onreadystatechange = ()=>{
    //                 if(helper.readyState == 4 && helper.status == 200){
    //                     var result = JSON.parse(helper.responseText);
    //                     setbranchs(result);
    //                 }
    //             };
    //             helper.open("GET","http://localhost:4000/branch");
    //             helper.send();
    //         } 
    //         setTimeout(() => {
    //             setmessage("");
    //         }, 2000);
    //     }
    // },[message])


    // const removeRecord = (No) => {
    //     var helper = new XMLHttpRequest();
    //     helper.onreadystatechange = () => {
    //         if (helper.readyState == 4 && helper.status == 200) {
    //             var result = JSON.parse(helper.responseText);
    //             if (result.affectedRows != undefined) {
    //                 if (result.affectedRows > 0) {
    //                     // debugger;
    //                     setmessage("Record Removed Successfully!");
    //                 } else {
    //                     setmessage("We could not remove the record.!")    (( DELETE ))
    //                 }
    //             } else {
    //                 setmessage("Something went wrong! Try Again!");
    //             }
    //         }
    //     };
    //     helper.open("DELETE", "http://localhost:4000/branch/" + No);
    //     helper.send();
    // }

    // const navigateToAdd =()=>{
    //     history.push('/create');   (( EDIT ))
    // }


  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState === 4 && helper.status === 200) {
        var result = JSON.parse(helper.responseText).data;
        setcusts(result);
        console.log(result)
      }
    };
    helper.open("GET", "http://localhost:4000/branch");
    helper.send();
  }, []);


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Branches Info</h1>

      <div className="table-responsive marginset">
        <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#a8a7a7" }}>
            <Tr>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Branch Id</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Contact No</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Shop Address</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Area Name</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Landmark</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h5 fw-bold">Pincode</h1>
                </div>
              </Th>

            </Tr>
          </Thead>
          <tbody>
            {branchs.map((branch, index) => {
              return (
                <tr key={index + 1}>
                  <td>{branch.branch_Id}</td>
                  <td>{branch.branch_Contact_No}</td>
                  <td>{branch.shop_Address}</td>
                  <td>{branch.area_Name}</td>
                  <td>{branch.landmark}</td>
                  <td>{branch.branch_PinCode}</td>
                  {/* <td>{branch.landmark}</td> */}

                  <td style={{textAlign: 'center'}}>
                    {/* <button style={{marginRight: 25}} className="btn btn-outline-primary" onClick={() => {}}>Edit </button> */}
                
                    <button
                      className="btn btn-outline-danger" onClick={() => {}}>Delete
                    </button>
                  </td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <button 
      className="btn btn-outline-dark" 
       onClick={() => {}}>Add New Branch </button>
                 
    </div>

  );
}

export default Branch;