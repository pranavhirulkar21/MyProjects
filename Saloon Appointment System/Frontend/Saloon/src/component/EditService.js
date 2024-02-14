import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";



const EditService = () => {
    const [product, setProduct] = useState({
        product_Id: "",
        product_Name: "",
        price: "",
        gender: "",
      });
    const [message, setMessage] = useState("");    
  const [shouldCleanTextBoxes, setShouldCleanTextBoxes] = useState(false);

  console.log(product);

  useEffect(()=>{
    if(message!=""){
        setTimeout(() => {
            setMessage("");
        }, 4000);
    }
}, [message]);

useEffect(()=>{
    if(shouldCleanTextBoxes == true){
     setProduct({product_Id: "",
        product_Name: "",
        price: "",
        gender:""});
        
    }
}, [shouldCleanTextBoxes])


    const handleAddClick = () => {
        const customerData = {
            
            // product_Id,
            // product_Name,
            // price,
            // gender,
        };

      


    // ... (previous code)
  
    // Function to update the customer details in the database
    const updateService = async (product_Id, updatedProduct) => {
      try {
        const response = await fetch(`http://localhost:4000/editProduct/${product_Id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedProduct),
          
        });
  
        if (response.ok) {
          // Customer details updated successfully in the database
          EditService(); // Refresh the customer list after successful update
        } else {
          console.error('Failed to update customer:', response.statusText);
        }
      } catch (error) {
        console.error('Error updating customer:', error);
      }
    };
  
    // Function to handle the click event when the "Edit" button is clicked
    const handleEditClick = (product) => {
      
    };
  
//     return (
//       <div>
        // {product.map((product) => (
        //   <div key={product.product_Id}>
        //     <span>{product.product_Id}</span>
//             <span>{product.product_Name}</span>
//             <span>{product.price}</span>
//             <span>{product.gender}</span>
//             <button onClick={() => handleEditClick(product)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default CustomerList;
  
    };

    return (

        <div>
            {product.map(({product}) => {
                return(
          <div key={product.product_Id}>
        {/* <span>{product.product_Id}</span> */}
            
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
                                        value={product.product_Id}
                                        onChange={(e) => setProduct(...product,e.target.value)}
                                        placeholder="product_Id"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>product_Name</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={product.product_Name}
                                        onChange={(e) => setProduct(...product,e.target.value)}
                                        placeholder="product_Name"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td className='td'>price</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={product.price}
                                        onChange={(e) => setProduct(...product,e.target.value)}
                                        placeholder="Price"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td className='td'>gender</td>
                                <td className='td'>
                                    <input
                                        type="text"
                                        value={product.gender}
                                        onChange={(e) => setProduct(...product,e.target.value)}
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
                                     onClick={setShouldCleanTextBoxes(true)}
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
    )})}
        </div>
    );
};



export default EditService;