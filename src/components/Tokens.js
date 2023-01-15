import React, {useState} from 'react';
import Button from '@mui/material/Button';
import './tokens.css';

const Tokens = () => {

const [blueTokens, setBlueTokens] = useState(0);
const [bluePrefix, setBluePrefix] = useState('');
const [bluePerRow, setBluePerRow] = useState(0);
const [redTokens, setRedTokens] = useState(0);
const [redPrefix, setRedPrefix] = useState('');
const [redPerRow, setRedPerRow] = useState(0);


// Creating function to capture/console values of the input field
  function generateTokens(e) {
    console.log(blueTokens);
    console.log(bluePrefix);
    console.log(bluePerRow);
    console.log(redTokens);
    console.log(redPrefix);
    console.log(redPerRow);   
  }

// Creating function to reset the value of input field to initial state once clear button is clicked
  function resetInputFields(){
    setBlueTokens(0);
    setBluePrefix('');
    setBluePerRow(0);
    setRedTokens(0);
    setRedPrefix('');
    setRedPerRow(0);
  }

  return (
    <div className="token-design">
        <h1> Token Generator Applicaion </h1>
        
        <form>

        <label className='label-marg'>Number of Blue Tokens:</label> 
        <input type="number" value={blueTokens} onChange={e => setBlueTokens(e.target.value)} /> 
        <br/><br/>

        <label className='label-marg'>Prefix for Blue Tokens:</label>           
        <input type="text" value={bluePrefix} onChange={e => setBluePrefix(e.target.value)} /> 
        <br/><br/>

        <label className='label-marg'>Blue Tokens per Row:</label>
        <input type="number" value={bluePerRow} onChange={e => setBluePerRow(e.target.value)} />
        <br/><br/>

        <label className='label-marg'>Number of Red Tokens:</label>
        <input type="number" value={redTokens} onChange={e => setRedTokens(e.target.value)} />
        <br/><br/>

        <label className='label-marg'>Prefix for Red Tokens:</label>
        <input type="text" value={redPrefix} onChange={e => setRedPrefix(e.target.value)} />
        <br/><br/>

        <label className='label-marg'>Red Tokens per Row:</label>
        <input type="number" value={redPerRow} onChange={e => setRedPerRow(e.target.value)} />
        <br/><br/>

        </form>

        <div className='tokenform-btns'>
            <Button className='btn-sp' variant="contained" type='submit' 
             onClick={generateTokens}>Generate</Button>
            <Button variant="contained" type='reset' onClick={resetInputFields}>Clear</Button>
        </div>
     
    </div>
  )
}

export default Tokens