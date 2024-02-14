import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { useHistory } from "react-router-dom";

const Manager = () => {
    const [managers, setcusts] = useState([]);
    //const [setBranchs] = useState([]);  //..........
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
    //                    setmessage("We could not add the record.!")     (( New MANAGER ))
    //                    setShouldCleanTextBoxes(false);
    //                 }
    //             } else{
    //                 setmessage("Something went wrong! Try Again!"); 
    //                 setShouldCleanTextBoxes(false);  
    //             }
    //         }
    //     };
    //     helper.open("POST","http://localhost:4000/manager");
    //     helper.setRequestHeader("Content-Type", "application/json")
    //     debugger;
    //     helper.send(JSON.stringify(emp));
    // }



    // useEffect(()=>{
    //     if(message!=""){
    //         if(message == "Record Removed Successfully!"){
    //             //Refresh the set of employees
    //             var helper = new XMLHttpRequest();
    //             helper.onreadystatechange = ()=>{
    //                 if(helper.readyState == 4 && helper.status == 200){
    //                     var result = JSON.parse(helper.responseText);
    //                     setemps(result);
    //                 }
    //             };
    //             helper.open("GET","http://localhost:9999/manager");
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
    //     helper.open("DELETE", "http://localhost:4000/manager/" + No);
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
        helper.open("GET", "http://localhost:4000/manager");
        helper.send();
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Manager Info</h1>

            <div className="table-responsive marginset">
                <table className="table table-bordered marginset">
                    <Thead style={{ backgroundColor: "#a8a7a7" }}>
                        <Tr>
                            {/* <Th>
                                <div>
                                    <h1 className="h5 fw-bold">Branch Id</h1>
                                </div>
                            </Th> */}
                            <Th>
                                <div>
                                    <h1 className="h5 fw-bold">Manager Id</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h5 fw-bold">Manager Name</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h5 fw-bold">Email Id</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h5 fw-bold">Password</h1>
                                </div>
                            </Th>

                        </Tr>
                    </Thead>
                    <tbody>
                        {managers.map((manager, index) => {
                            return (
                                <tr key={index + 1}>
                                    {/* <td>{manager.branch_Id}</td> */}
                                    <td>{manager.manager_Id}</td>
                                    <td>{manager.manager_name}</td>
                                    <td>{manager.manager_Email}</td>
                                    <td>{manager.manager_Password}</td>


                                    <td>
                                        {/* <button className="btn btn-primary" onClick={() => { }}>Edit</button> */}
                                    
                                        <button
                                            className="btn btn-outline-danger" onClick={() => { }}>Delete
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
             onClick={() => { }}>Add New Manager </button>
        </div>

    );
}

export default Manager;