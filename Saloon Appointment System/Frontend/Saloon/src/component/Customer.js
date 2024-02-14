import React from 'react';
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import axios from "axios";


const Customer = () => {
  const [custs, setCusts] = useState([]);

  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState === 4 && helper.status === 200) {
        var result = JSON.parse(helper.responseText).data;
        setCusts(result);
        console.log(result)
      }
    };
    //helper.open("GET", "http://localhost:7080/emps");
    helper.open("GET", "http://localhost:4000/customer");
    helper.send();
  }, []);


  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:4000/customer`)
  //     .then(response => setcusts(response.data))
  //     .catch((error) => console.log(error));
  // }, []);

  // const removeuser = (customer_Id) => {
  //   // debugger;
  //   var helper = new XMLHttpRequest();
  //   helper.onreadystatechange = () => {
  //     if (helper.readyState == 4 && helper.status == 200) {
  //       var result = JSON.parse(helper.responseText);
  //     }
  //   };
  //   helper.open("DELETE", "http://localhost:4000/customer/" + customer_Id);
  //   helper.send();
  // };


  const handleDelete = (customerId) => {
    fetch(`http://localhost:4000/customer/${customerId}`, {
      method: 'DELETE',
    })
    .then((response) => {
      if (response.ok) {
        setCusts((prevCustomers) => prevCustomers.filter((customer) => customer.id !== customerId));
      } else {
        console.error('Failed to delete customer.');
      }
    })
    .catch((error) => {
      console.error('Error occurred while deleting customer:', error);
    });
  };



  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Customer's Info</h1>
      <div className="table-responsive marginset">
        <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#a8a7a7" }}>
            <Tr>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Customer Id</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Full Name</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Email Id</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Mobile No</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Gender</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">building Name</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Area Name</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Pincode</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Password</h1>
                </div>
              </Th>
              <Th>
                <div>
                  <h1 className="h6 fw-bold">Role</h1>
                </div>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {custs.map((cust, index) => {
              return (
                <Tr key={index + 1}>
                  <td>{cust.customer_Id}</td>
                  <td>{cust.fullName}</td>
                  <td>{cust.email}</td>
                  <td>{cust.mobileNo}</td>
                  <td>{cust.gender}</td>
                  <td>{cust.building_No}</td>
                  <td>{cust.area_Name}</td>
                  <td>{cust.pincode}</td>
                  <td>{cust.password}</td>
                  <td>{cust.role}</td>

                  <td>
                    
                      {custs.map((customer) => (
                        <p key={customer.customer_Id}>
                        </p>
                      ))}
                    <button onClick={() => handleDelete(cust.customer_Id)}>Delete</button>
                    {/* <p key={Customer.customer_Id}></p>
                      <button
                         className="btn btn-danger"
                         onClick={()=>removeuser(customer_Id)}>
                        Delete
                      </button> */}
                  </td>
                </Tr>
              );
            })}
          </Tbody>
        </table>
      </div>


    </div>

  )
}

export default Customer;