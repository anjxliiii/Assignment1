import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


const Viewproducts = () => {
  
  const [rows,setrows]=useState([]);
  useEffect(()=>{
  axios.get('https://fakestoreapi.com/products').then((res)=>{
  
  setrows(res.data)
  }).catch((error)=>{
    console.log(error)
  })
  },[])     
  return (
    <TableContainer style={{marginTop:'5%'}} component={Paper}>

    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
      <TableHead>
        <TableRow>
          <TableCell>TITLE</TableCell>
          <TableCell align="right"> PRICE </TableCell>
          <TableCell align="right">CATOGORY</TableCell> 
          <TableCell align="right">IMAGE</TableCell>

          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (             
          <TableRow
            key={row.title}                 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.image}</TableCell>
             
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Viewproducts