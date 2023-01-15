import React from 'react';
import Button from '@mui/material/Button';
import './webform.css';


const Webform = () => {

  return (
    <div className='webform-container'>
      
    <div className='webform-inputs'>
    <form className='form-input'>
        Number of Blue Tokens 
        <input type="number" /> <br/><br/>
        Blue Tokens per row 
        <input type="number" /> <br/><br/>
        Prefix with Blue Token 
        <input type="text"  /> <br/><br/>
        Number of Red Tokens
        <input type="number"  /> <br/><br/>
        Red Tokens per Row
        <input type="number"  /> <br/><br/>
        Prefix with Red Token
        <input type="text"  /> <br/><br/>
        
    </form>
    </div>

    <div className='webform-btns'>
       <Button className='btn-sp' variant="contained">Generate</Button>
       <Button variant="contained">Clear</Button>
    </div>
    </div>
  )
}

export default Webform