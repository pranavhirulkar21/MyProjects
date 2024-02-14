import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";



const AddManager = () => {

    //   const [manager, setManager] = useState({ manager_Id: 0, manager_name: "", manager_Email: "", manager_Password: ""});
    // const [manager_Id, setManager_Id] = useState("");
    // const [manager_name, setManager_name] = useState("");
    // const [manager_Email, setManager_Email] = useState("");
    // const [manager_Password, setManager_Password] = useState("");
    // const [message, setmessage] = useState("");
    // const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

    const handleChange = (args) => {
        var copyOfCurrentManagerInState = { ...manager };
        copyOfCurrentManagerInState[args.target.manager] = args.target.value;
        setManager(copyOfCurrentManagerInState);
    }

    useEffect(() => {
        if (message != "") {
            setTimeout(() => {
                setmessage("");
            }, 2000);
        }
    }, [message]);

    useEffect(() => {
        if (shouldCleanTextBoxes == true) {
            setManager({ manager_Id: 0, manager_name: "", manager_Email: "", manager_Password: "" });
        }
    }, [shouldCleanTextBoxes])

    const addRecord = () => {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = () => {
            if (helper.readyState == 4 && helper.status == 200) {
                //debugger;
                var result = JSON.parse(helper.responseText);
                if (result.affectedRows != undefined) {
                    if (result.affectedRows > 0) {
                        setmessage("Record Added Successfully!");
                        setShouldCleanTextBoxes(true);
                    }
                    else {
                        setmessage("We could not add the record.!")
                        setShouldCleanTextBoxes(false);
                    }
                } else {
                    setmessage("Something went wrong! Try Again!");
                    setShouldCleanTextBoxes(false);
                }
            }
        };
        helper.open("POST", "http:localhost:4000/addManager");
        helper.setRequestHeader("Content-Type", "application/json")
        //debugger;
        helper.send(JSON.stringify(manager));
    }

    const clearRecord = () => {
        setManager({ manager_Id: 0, manager_name: "", manager_Email: "", manager_Password: "" });
    }

    return (

        <div>
            <center>
                <div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <table>
                        <tbody>


                            <tr>
                                <td className='td'>manager_Id</td>
                                <td className='td'>
                                    <input type="text" name="manager_Id"
                                        value={manager.manager_Id}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>manager_name</td>
                                <td className='td'>
                                    <input type="text" name="manager_name"
                                        value={manager.manager_name}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>manager_Email</td>
                                <td className='td'>
                                    <input type="text" name="manager_Email"
                                        value={manager.email}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>manager_Password</td>
                                <td className='td'>
                                    <input type="text" name="manager_Password"
                                        value={manager.manager_Password}
                                        onChange={handleChange} />
                                </td>
                            </tr>


                            <tr>
                                <td className='td'>
                                    <button className='btn btn-primary'
                                        onClick={addRecord}>
                                        Submit
                                    </button>
                                </td>
                                <td className='td'>
                                    <button className='btn btn-danger'
                                        onClick={clearRecord}>
                                        Reset
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"} className='td'>
                                    <h6 style={{ color: "orange" }}>
                                        {message}
                                    </h6>
                                    <br></br><br></br>
                                    <Link to={"/Manager"}> Go Back </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );

}

export default AddManager;