import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"; 

const Appointment = () => {
  const [orders, setOrders] = useState([]);
  const [managers] = useState([]);
  const [setorders] = useState([]);  //..........
  const [selectedUserId, setSelectedUserId] = useState(null);  //......
  const [selectedUserDetails, setSelectedUserDetails] = useState(null); 



  useEffect(() => {
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = () => {
      if (helper.readyState === 4 && helper.status === 200) {
        var result = JSON.parse(helper.responseText).data;
        setOrders(result);
        console.log(result)
      }
    };
    helper.open("GET", "http://localhost:4000/order");
    helper.send();
  }, []);


  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>orderes Info</h1>

      <div className="table-responsive marginset">
        <table className="table table-bordered marginset">
          <Thead style={{ backgroundColor: "#a8a7a7" }}>
          <Tr>
             
             <Th>
               <div>
                 <h1 className="h6 fw-bold">Order Id</h1>
               </div>
             </Th>
             <Th>
               <div>
                 <h1 className="h6 fw-bold">Product Id</h1>
               </div>
             </Th>
             <Th>
               <div>
                 <h1 className="h6 fw-bold">Customer Name</h1>
               </div>
             </Th>
             <Th>
               <div>
                 <h1 className="h6 fw-bold">Date</h1>
               </div>
             </Th>
             <Th>
               <div>
                 <h1 className="h6 fw-bold">time</h1>
               </div>
             </Th>
             <Th>
               <div>
                 <h1 className="h6 fw-bold">Amount</h1>
               </div>
             </Th>
            
           </Tr>
          </Thead>
          <tbody>
            {orders.map((order, index) => {
              return (
                <tr key={index + 1}>
                  <td>{order.order_Id}</td>
                  <td>{order.order_PinCode}</td>
                  <td>{order.orders.area_Name}</td>
                  <td>{order.landmark}</td>
                  <td>{order.order_PinCode}</td>
                  {/* <td>{order.landmark}</td> */}

                  {/* <td style={{textAlign: 'center'}}>
                    <button style={{marginRight: 25}} className="btn btn-outline-primary" onClick={() => {}}>Edit </button>
                
                    <button
                      className="btn btn-outline-danger" onClick={() => {}}>Delete
                    </button>
                  </td> */}
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <button style={{backgroundColor: 'black' , color: 'white'}} onClick={() => {}}>Add New order </button>
                 
    </div>

  );
}








//   return (
//     <div>

// <h5>Please Select Date \/ </h5>
//       <div className="table-responsive marginset">
//         <table className="table table-bordered marginset">
//           <Thead style={{ backgroundColor: "#a8a7a7" }}>
            // <Tr>
             
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">Order Id</h1>
            //     </div>
            //   </Th>
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">Product Id</h1>
            //     </div>
            //   </Th>
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">order Id</h1>
            //     </div>
            //   </Th>
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">Date</h1>
            //     </div>
            //   </Th>
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">time</h1>
            //     </div>
            //   </Th>
            //   <Th>
            //     <div>
            //       <h1 className="h6 fw-bold">Amount</h1>
            //     </div>
            //   </Th>
             
            // </Tr>
//           </Thead>

//           {/* <tbody>
//             {orders.map((order, index) => {
//               return (
//                 <tr key={index + 1}>
//                   <td>{order.order_Id}</td>
//                   <td>{order.order_Contact_No}</td>
//                   <td>{order.shop_Address}</td>
//                   <td>{order.area_Name}</td>
//                   <td>{order.landmark}</td>
//                   <td>{order.order_PinCode}</td>
                 
//                 </tr>
//               );
//             })}
//           </tbody> */}

//         </table>
//       </div>
//     </div>

//   )
//}

export default Appointment;


// import { useEffect, useState } from "react";
// //import "./asset/common.css";
// import { Link, Route, Switch } from "react-router-dom";
// //import "../node_modules/bootstrap/dist/css/bootstrap.css";
// //import { useHistory } from "react-router-dom";
// import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
// import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
// import OrdDetails from "./OrdDetails";
// import "./show.css";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import { ReactSession } from "react-client-session";

// function Appointmentow() {
//   const [order, setorder] = useState([]);
//   //const [customer, setcustomer] = useEffect({});
//   const [order, setorder] = useState([]);
//   const [Status, setstatus] = useState({ paid: 0, approve: 0 });
//   const history = useHistory();
//   useEffect(() => {
//     var helper = new XMLHttpRequest();
//     helper.onreadystatechange = () => {
//       if (helper.readyState === 4 && helper.status === 200) {
//         var result = JSON.parse(helper.responseText).data;
//         setorder(result);
//         console.log(result);
//       }
//     };

//     helper.open("GET", "http://localhost:4000/order");
//     helper.send();
//   }, []);

//   const selectorder = (orderId) => {
//     console.log(orderId);

//     sessionStorage.setItem("orderId", orderId);
//     const id = sessionStorage.getItem("orderId");
//     console.log("from Session" + id);
//   };
//   useEffect(() => {
//     const id = sessionStorage.getItem("orderId");
//     console.log("inside" + id);
//     var helper = new XMLHttpRequest();
//     helper.onreadystatechange = () => {
//       if (helper.readyState === 4 && helper.status === 200) {
//         var result = JSON.parse(helper.responseText).data;
//         //setcustomer(result.customers);
//         setorder(result);
//         console.log(result);
//       }
//     };

//     helper.open("GET", "http://localhost:4000/getorderbyorder/" + id);
//     helper.send();
//   }, []);
//   const gotoDetails = (ID) => {
//     //const { data } = await axios.get(`http://localhost:4000/order/${ID}`);
//     history.push("showDetails", { params: ID });
//     console.log(ID);
//   };
//   // debugger;

//   const Register = (No) => {
//     console.log("IDHAR AYA" + No);
//     setstatus({ approve: 1, paid: 0 });
//     var helper = new XMLHttpRequest();
//     helper.onreadystatechange = () => {
//       if (helper.readyState == 4 && helper.status == 200) {
//         var result = JSON.parse(helper.responseText).data;
//         console.log("IDHAR AYA" + No);
//       }
//     };
//     helper.open("PUT", "http://localhost:4000/approved/" + No);
//     helper.setRequestHeader("Content-Type", "application/json");
//     helper.send(JSON.stringify(Status));
//   };
//   const MarkPaid = (No) => {
//     console.log("MarkPaid" + No);
//     setstatus({ approve: 1, paid: 1 });
//     var helper = new XMLHttpRequest();
//     helper.onreadystatechange = () => {
//       if (helper.readyState == 4 && helper.status == 200) {
//         var result = JSON.parse(helper.responseText).data;
//       }
//     };
//     helper.open("PUT", "http://localhost:4000/approved/" + No);
//     helper.setRequestHeader("Content-Type", "application/json");
//     helper.send(JSON.stringify(Status));
//   };

//   return (
//     <div>
//       <div>
//         Select Your order
//         <select>
//           <option>Choose order</option>
//           {order.map((br) => (
//             <option
//               key={br.order_Id}
//               value={br.order_Id}
//               onClick={() => {
//                 selectorder(br.order_Id);
//               }}
//             >
//               {br.area_Name}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="container my-5">
//         <div>
//           <div>
//             <Table className="table table-bordered marginset">
//               <Thead style={{ backgroundColor: "#539196" }}>
//                 <Tr>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Serial No</h1>
//                     </div>
//                   </Th>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Order ID</h1>
//                     </div>
//                   </Th>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Customer Name</h1>
//                     </div>
//                   </Th>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Order Date</h1>
//                     </div>
//                   </Th>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Show Details</h1>
//                     </div>
//                   </Th>
//                   <Th>
//                     <div>
//                       <h1 className="h5 fw-bold">Status</h1>
//                     </div>
//                   </Th>
//                 </Tr>
//               </Thead>
//               <Tbody>
//                 {order.map((emp, index) => {
//                   return (
//                     <Tr key={index}>
//                       <th scope="row">{index + 1}</th>

//                       <td>
//                         <div>
//                           <h1 className="h6">{emp.order_Id}</h1>
//                         </div>
//                       </td>
//                       <td>
//                         <div>
//                           <h1 className="h6">{emp.customers.fullName}</h1>
//                         </div>
//                       </td>
//                       <td>
//                         <div>
//                           <h1 className="h6">{emp.date.date}</h1>
//                         </div>
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-danger"
//                           onClick={() => {
//                             gotoDetails(emp.order_Id);
//                           }}
//                         >
//                           Details
//                         </button>
//                       </td>
//                       <td>
//                         <div>
//                           <form
//                             method="get"
//                             action="controller"
//                             className="d-flex btn-group"
//                           >
//                             <input
//                               type="hidden"
//                               name="command"
//                               value="refresh-order-status"
//                             />
//                             <select
//                               name="status"
//                               className="btn btn-outline-dark"
//                             >
//                               <option
//                                 value="REGISTERED"
//                                 className="form-select-button"
//                                 onClick={() => {
//                                   Register(emp.order_Id);
//                                 }}
//                               >
//                                 REGISTERED
//                               </option>
//                               <option
//                                 value="PAID"
//                                 className="form-select-button"
//                                 onClick={() => {
//                                   MarkPaid(emp.order_Id);
//                                 }}
//                               >
//                                 PAID
//                               </option>
//                               <option
//                                 value="CANCELED"
//                                 className="form-select-button"
//                               >
//                                 CANCELED
//                               </option>
//                             </select>
//                             <input
//                               type="submit"
//                               className="btn btn-outline-dark"
//                               value="OK"
//                             />
//                           </form>
//                         </div>
//                       </td>
//                     </Tr>
//                   );
//                 })}
//               </Tbody>
//             </Table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Appointmentow;
