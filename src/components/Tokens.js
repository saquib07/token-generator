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

  function generateTokens(e) {
    console.log(e.target.values);
  }

  return (
    <div className="token-design">
        <h1> Token Generator Applicaion </h1>

        <form>
        Number of Blue Tokens: 
        <input type="number" value={blueTokens} onChange={e => setBlueTokens(e.target.value)} /> 
        <br/><br/>

        Prefix for Blue Tokens:           
        <input type="text" value={bluePrefix} onChange={e => setBluePrefix(e.target.value)} /> 
        <br/><br/>

        Blue Tokens per Row:
        <input type="number" value={bluePerRow} onChange={e => setBluePerRow(e.target.value)} />
        <br/><br/>

        Number of Red Tokens:
        <input type="number" value={redTokens} onChange={e => setRedTokens(e.target.value)} />
        <br/><br/>

        Prefix for Red Tokens:
        <input type="text" value={redPrefix} onChange={e => setRedPrefix(e.target.value)} />
        <br/><br/>

        Red Tokens per Row:
        <input type="number" value={redPerRow} onChange={e => setRedPerRow(e.target.value)} />
        <br/><br/>

        </form>

        <div className='tokenform-btns'>
            <Button className='btn-sp' variant="contained" type='submit' onClick={generateTokens}>Generate</Button>
            <Button variant="contained">Clear</Button>
        </div>
     
    </div>
  )
}

export default Tokens