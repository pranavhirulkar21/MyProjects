import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";



// const AddService =()=>  {
//     debugger;

//  const [product, setProduct] = useState({product_Id: 0, product_Name: "", price: "", gender: ""});
//  const [message, setmessage] = useState("");
//  const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

//  const handleChange = (args)=>{
//      var copyOfCurrentProductInState = {...product};
//      copyOfCurrentProductInState[args.target.product_Name] = args.target.value;
//      setProduct(copyOfCurrentProductInState);
//  }

//  useEffect(()=>{
//      if(message!=""){
//          setTimeout(() => {
//              setmessage("");
//          }, 4000);
//      }
//  }, [message]);

//  useEffect(()=>{
//      if(shouldCleanTextBoxes == true){
//          setProduct({product_Id: 0, product_Name: "", price: "", gender: ""});
//      }
//  }, [shouldCleanTextBoxes])

//  const addRecord =()=>{
//      var helper = new XMLHttpRequest();
//      helper.onreadystatechange = ()=>{
//          if(helper.readyState == 4 && helper.status == 200){
//              //debugger;
//              var result = JSON.parse(helper.responseText);
//              if(result.affectedRows!=undefined){
//                  if(result.affectedRows > 0){
//                     setmessage("Record Added Successfully!");
//                     setShouldCleanTextBoxes(true);
//                  }
//                  else{
//                     setmessage("We could not add the record.!")
//                     setShouldCleanTextBoxes(false);
//                  }
//              } else {
//                  setmessage("Something went wrong! Try Again!"); 
//                  setShouldCleanTextBoxes(false);  
//              }
//          }
//      };
//      helper.open("POST","http://localhost:4000/addProduct");
//      helper.setRequestHeader("Content-Type", "application/json")
//      //debugger;
//      helper.send(JSON.stringify(product));
//  }

//  const clearRecord =()=>{
//      setProduct({product_Id: 0, product_Name: "", price: "", gender: ""});
//  }

//  return (

//  <div>
//             <center>
//                 <div>
//                  <br></br>
//                  <br></br>
//                  <br></br>
//                  <table>
//                      <tbody>
//                          <tr>
//                              <td className='td'>product_Id</td>    
//                              <td className='td'>
//                                  <input type="text" name="product_Id"
//                                         onChange={handleChange}/>
//                              </td>
//                          </tr>

//                          <tr>
//                              <td className='td'>product_Name</td>    
//                              <td className='td'>
//                                  <input type="text" name="product_Name"
//                                         onChange={handleChange}/>
//                              </td>
//                          </tr>

//                          <tr>
//                              <td className='td'>price</td>    
//                              <td className='td'>
//                                  <input type="text" name="price"
//                                         onChange={handleChange}/>
//                              </td>
//                          </tr>
//                          <tr>      
//                              <td className='td'>gender</td>    
//                              <td className='td'>
//                                  <input type="text" name="gender"
//                                         onChange={handleChange}/>
//                              </td>
//                          </tr>
//                          <tr>
//                              <td className='td'>
//                                  <button className='btn btn-primary'
//                                          onClick={addRecord}>
//                                      Submit
//                                  </button>
//                              </td>
//                              <td className='td'>
//                                  <button className='btn btn-danger'
//                                          onClick={clearRecord}>
//                                      Reset
//                                  </button>
//                              </td>
//                          </tr>
//                          <tr>
//                              <td colSpan={"2"}  className='td'>
//                                  <h6 style={{color: "orange"}}>
//                                      {message}
//                                  </h6>
//                                  <br></br><br></br>
//                                  <Link to={"/Service"}> Go Back </Link> 
//                              </td>
//                          </tr>
//                      </tbody>
//                  </table>
//                  </div>
//             </center>
//         </div>
//  );

// }


const AddService = () => {
    const [product_Id, setProduct_Id] = useState("");
    const [product_Name, setProduct_Name] = useState("");
    const [price, setPrice] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");    
  const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

  useEffect(()=>{
    if(message!=""){
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }
}, [message]);

useEffect(()=>{
    if(shouldCleanTextBoxes == true){
        // setCustomerData({product_Id: 0, product_Name: "", price: "", gender: ""});
        setProduct_Id(0);
        setProduct_Name("");
        setPrice("");
        setGender("");
    }
}, [shouldCleanTextBoxes])


    const handleAddClick = () => {
        const customerData = {
            product_Id,
            product_Name,
            price,
            gender,
        };

        fetch("http://localhost:4000/addProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(customerData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Response from server:", data);
                alert("Product Added Successfully");
               // toast.success("Product Added Successfully");
            })
            .catch((error) => {
                console.error("Error:", error);
                setMessage("Something Went Wrong !!!");
                setShouldCleanTextBoxes(true);
            });
    };

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
                                <td className='td'>product_Id</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={product_Id}
                                        onChange={(e) => setProduct_Id(e.target.value)}
                                        placeholder="product_Id"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>product_Name</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={product_Name}
                                        onChange={(e) => setProduct_Name(e.target.value)}
                                        placeholder="product_Name"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>price</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        placeholder="Price"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>gender</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                        placeholder="Gender"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>
                                    <button className='btn btn-primary'
                                        onClick={handleAddClick}>
                                        Submit
                                    </button>
                                </td>
                                <td className='td'>
                                    <button className='btn btn-danger'
                                    // onClick={clearRecord}
                                    >
                                        Reset
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={"2"} className='td'>
                                    <h6 style={{ color: "orange" }}>
                                        { }
                                    </h6>
                                    <br></br><br></br>
                                    <Link to={"/Service"}> Go Back </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </center>
        </div>
    );
};



export default AddService;