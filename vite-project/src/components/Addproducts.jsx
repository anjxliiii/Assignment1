import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';

const Addproducts = () =>{
  const[from,setForm]=useState({
    title:'',
    price:'',
    category:'',
    image:''
  })
  function fieldValue(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function valueAdd() {
    console.log(form);
  }
  return(


<Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },flexDirection: 'column',alignItems:'center'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="outlined-basic" label="TITLE" onChange={fieldValue} variant="outlined" sx={{mb:2}}/>
      </div>
      <div>
      <TextField id="filled-basic" label="PRICE" onChange={fieldValue} variant="outlined" sx={{mb:2}}/>
      </div>
      <div>
      <TextField id="standard-basic" label="CATEGORY" onChange={fieldValue} variant="outlined" sx={{mb:2}} />
      </div>
      <div>
      <TextField id="standard-basic" label="IMAGE" onChange={fieldValue} variant="outlined" sx={{mb:2}} /> 
      </div>
      <div>
        <Button variant='contained' onClick={valueAdd} > ADD NEW PRODUCT</Button>  
           </div>
    </Box>
  );
}
export default Addproducts