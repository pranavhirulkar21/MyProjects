import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";



const AddBranch = () => {

    const [branch, setBranch] = useState({ branch_Id: 0, branch_Contact_No: "", shop_Address: "", area_Name: "" , branch_PinCode: "" , landmark: "" });
    const [message, setmessage] = useState("");
    const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

    const handleChange = (args) => {
        var copyOfCurrentBranchInState = { ...branch };
        copyOfCurrentBranchInState[args.target.branch] = args.target.value;
        setBranch(copyOfCurrentBranchInState);
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
            setBranch({ branch_Id: 0, branch_Contact_No: "", shop_Address: "", area_Name: "" , branch_PinCode: "" , landmark: "" });
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
        helper.open("POST", "http:localhost:4000/addBranch");
        helper.setRequestHeader("Content-Type", "application/json")
        //debugger;
        helper.send(JSON.stringify(branch));
    }

    const clearRecord = () => {
        setBranch({ branch_Id: 0, branch_Contact_No: "", shop_Address: "", area_Name: "" , branch_PinCode: "" , landmark: "" });
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
                                <td className='td'>branch_Id</td>
                                <td className='td'>
                                    <input type="text" name="branch_Id"
                                        value={branch.branch_Id}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>branch_Contact_No</td>
                                <td className='td'>
                                    <input type="text" name="branch_Contact_No"
                                        value={branch.branch_Contact_No}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>shop_Address</td>
                                <td className='td'>
                                    <input type="text" name="shop_Address"
                                        value={branch.shop_Address}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>area_Name</td>
                                <td className='td'>
                                    <input type="text" name="area_Name"
                                        value={branch.area_Name}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>branch_PinCode</td>
                                <td className='td'>
                                    <input type="text" name="branch_PinCode"
                                        value={branch.branch_PinCode}
                                        onChange={handleChange} />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>landmark</td>
                                <td className='td'>
                                    <input type="text" name="landmark"
                                        value={branch.landmark}
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
                                    <Link to={"/Branch"}> Go Back </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );

}

export default AddBranch;