import React from "react";
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"; 
import AddService from "./AddService";


const AServices = () => {
    const [products, setproducts] = useState([]);
    const [product, setproduct] = useState([]);
    const [product_Id, setproduct_Id] = useState(0);
    const history = useHistory();
    const location = useLocation();
    const category = location.state.params;




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
    //                 } else{
    //                    setmessage("We could not add the record.!")     (( New PRODUCT ))
    //                    setShouldCleanTextBoxes(false);
    //                 }
    //             } else{
    //                 setmessage("Something went wrong! Try Again!"); 
    //                 setShouldCleanTextBoxes(false);  
    //             }
    //         }
    //     };
    //     helper.open("POST","http://localhost:4000/product");
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
    //                     setproducts(result);
    //                 }
    //             };
    //             helper.open("GET","http://localhost:4000/product");
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
    //     helper.open("DELETE", "http://localhost:4000/product/" + No);
    //     helper.send();
    // }

    // const navigateToAdd =()=>{
    //     history.push('/create');   (( EDIT ))
    // }



    function AddService() {
       // debugger;
      history.push("/AddService");
    }

    // function EditService() {
    //     // debugger;
    //    history.push("/EditService");
    //  }

    useEffect(() => {
        var helper = new XMLHttpRequest(); 
        helper.onreadystatechange = () => {
          if (helper.readyState === 4 && helper.status === 200) {
            var result = JSON.parse(helper.responseText).data;
            setproducts(result)
            console.log(result)
          }
        };
        helper.open("GET", "http://localhost:4000/Products_Category/" + category);
        helper.send();
      }, []);


    //   const handleDelete = (product_Id) => {
    //     fetch(`http://localhost:4000/products/${product_Id}`, {
    //       method: 'DELETE',
    //     })
    //     .then((response) => {
    //       if (response.ok) {
    //         setproduct_Id(() => products.filter((product) => products.product_Id!==product_Id));
    //       } else {
    //         console.error('Failed to delete product.');

    //       }
    //     })
    //     .catch((error) => {
    //       console.error('Error occurred while deleting product:', error);
    //     });
    //   };


    return (

        <div>
            <h1 style={{ textAlign: 'center' }}>Services Info</h1>
            <div className="table-responsive marginset">
                <table className="table table-bordered marginset">
                    <Thead style={{ backgroundColor: "#a8a7a7" }}>
                        <Tr>
                            <Th>
                                <div>
                                    <h1 className="h6 fw-bold">Service Id</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h6 fw-bold">Service Name</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h6 fw-bold">Price</h1>
                                </div>
                            </Th>
                            <Th>
                                <div>
                                    <h1 className="h6 fw-bold"> </h1>
                                </div>

                            </Th>
                        </Tr>
                    </Thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.product_Id}>
                                    <td>{product.product_Id}</td>
                                    <td>{product.product_Name}</td>
                                    <td>{product.price}</td>

                                    <td>
                    {/* <button className="btn btn-primary" onClick={EditService}>Edit</button> */}
                  
                    <button
                      className="btn btn-outline-danger" >Delete
                    </button>
                  </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* <h1 style={{ textAlign: 'center' }}>Services Info</h1> */}

<div>
    <button 
    className="btn btn-outline-dark" 
    style={{justifyContent: "center",alignItems: "center"}} onClick={AddService}> Add Service </button>
</div>

        </div>


    );
}

export default AServices;
