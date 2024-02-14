import React from "react";
import { Button } from "reactstrap";
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, td, Th } from "react-super-responsive-table";
import AServices from "./AServices";


const Service = () => {
  const history = useHistory();

  function handleClickA(temp) {
    console.log(temp)
    history.push('/AServices',{params:temp});
  }

  return (

    <div style={{ display: "flex", textAlign: 'center' }}>


      <div style={{ flex: 1 }}>
        <div>
          <Button color="dark" size="lg"> Male</Button>
        </div>
        <hr></hr>
        <div style={{ textAlign: 'center' }}>
          <div >
            <table className="table table-bordered marginset">
              <Thead style={{ backgroundColor: "#a8a7a7" }}>
                <Tr>
                  <Th><div><h1 className="h6 fw-bold">#</h1></div></Th>
                  <Th><div><h1 className="h6 fw-bold">Service Name</h1></div></Th>
                  <Th><div><h1 className="h6 fw-bold"> </h1></div> </Th>
                </Tr>
              </Thead>
              <tbody>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">A</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Hair and Styles</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("A")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">B</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Hair Spa</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("B")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">C</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Hair Treatment</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("C")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">D</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Facials</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("D")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">E</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Body Rituals</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("E")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">F</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Make Up</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("F")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">G</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Detan Bleach</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("G")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">H</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Beauty Treatment</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("H")}}> View </Button></Th>
                </Tr>
                <Tr>
                  <Th><div> <h1 className="h6 fw-normal">I</h1></div></Th>
                  <Th><div><h1 className="h6 fw-normal">Color Hair</h1></div></Th>
                  <Th><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("I")}}> View </Button></Th>
                </Tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>






      <div style={{ flex: 1 }}>
        <div>
          <Button color="dark" size="lg" >Female</Button>
        </div>
        <hr></hr>
        <div style={{ textAlign: 'center' }}>

          <div >
            <table className="table table-bordered marginset">
              <thead style={{ backgroundColor: "#a8a7a7" }}>
                <Tr>
                  <td><div> <h1 className="h6 fw-bold">#</h1></div> </td>
                  <td><div><h1 className="h6 fw-bold">Service Name</h1> </div></td>
                  <td><div><h1 className="h6 fw-bold"> </h1></div></td>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">L</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Hair and Styles</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("L")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">M</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Hair Spa</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("M")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">N</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Hair Straightning </h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("N")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">O</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Facial</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("O")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">P</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Bleach</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("P")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">Q</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Waxing</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("Q")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">R</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Threading </h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("R")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">S</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Manicure And Pedicure</h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("S")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">T</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">MakeUp </h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("T")}}> View </Button></td>
                </Tr>
                <Tr>
                  <td><div> <h1 className="h6 fw-normal">U</h1></div></td>
                  <td><div><h1 className="h6 fw-normal">Mehandi </h1></div></td>
                  <td><Button block color="outline-success" size="sm" onClick={() =>{handleClickA("U")}}> View </Button></td>
                </Tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service;