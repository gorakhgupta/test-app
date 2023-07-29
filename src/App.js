import { useState, Suspense,lazy,useReducer } from 'react';
import './App.css';
const App = ()=>{


  const [currLength, setcurrLength] = useState(10);
  const [passwordQuality, setpasswordQuality] = useState("Medium");
  const [password, setpassword] = useState("%#4567GUV");
  const [selection, setselection] = useState({ isUpercase: false, isLowerCase: false, isNumber: false, isSymbol: false });

  const handleLength = (e) => {
    setcurrLength(e.target.value)
  }
  const copyPassword = ()=>{
    navigator.clipboard.writeText(password);
    alert('Password copied successfully');
  }
  const generatePassword = ()=>{
    const allSymbols = ['!','@','#','$','%','^','&','*','(',')','~'];
    const allNumbers = [0,1,2,3,4,5,6,7,8,9];
    let filteredCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let password_generated = "";
    let size = currLength;
    if(selection.isUpercase) {
      let upercaseIndex = Math.floor(Math.random()*filteredCharacters.length);
      password_generated  += filteredCharacters[upercaseIndex].toUpperCase();
      size--;
    } 
    if(selection.isNumber) {
      filteredCharacters = [...filteredCharacters, ...allNumbers];
      let numberIndex = Math.floor(Math.random()*allNumbers.length);
      password_generated  += allNumbers[numberIndex];
      size--;
    } 
    if(selection.isSymbol) {
      filteredCharacters = [...filteredCharacters, ...allSymbols];
      let symbolIndex = Math.floor(Math.random()*allSymbols.length);
      password_generated  += allSymbols[symbolIndex];
      size--;
    }
    for(let i=0; i < size; i++) {
      const currIndex = Math.floor(Math.random()*filteredCharacters.length);
      password_generated += filteredCharacters[currIndex];
    }
    if(password_generated.length > 15) {
      setpasswordQuality("Stronest");
    } else if(password_generated.length > 12) {
      setpasswordQuality("Very good");
    }
    else if(password_generated.length >= 8 && (selection.isSymbol || selection.isNumber)) {
      setpasswordQuality("Good");
    }
    else if(password_generated.length) {
      setpasswordQuality("Poor");
    }
    setpassword(password_generated);
  
  }
  return (
    <div className="App">
      <div className='copy-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="password_generated">{password}</div>
        <div  onClick={copyPassword} style={{width:'20px',height:'20px',cursor:'pointer'}} >
           <img style={{width:'100%',height:'100%'}} src='https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-copy-icon-png-image_695355.jpg' />
        </div>
      </div>
      <div className='spiner-container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="pass_length color-gray ">Character Length</div>
        <div className="pass_count">{currLength}</div>
      </div>
      <div className='container' style={{ display: 'flex', justifyContent: 'center' }}>
        <input
          style={{ width: '100%', }}
          type="range"
          min="8"
          max="20"
          onChange={handleLength}
          value={currLength}
        />
      </div>
      <div  className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span className='color-gray checkbox-div'  ><input className='custom-checkbox' style={{cursor:'pointer'}} checked={selection.isUpercase} onChange={(e)=>setselection({...selection,isUpercase:e.target.checked})} type="checkbox" /> Include UpperCase Letters </span>
        <span className='color-gray checkbox-div'  ><input  className='custom-checkbox'  style={{cursor:'pointer'}} checked={selection.isLowerCase} onChange={(e)=>setselection({...selection,isLowerCase:e.target.checked})} type="checkbox" /> Include LowerCase Letters </span>
        <span className='color-gray checkbox-div'  ><input  className='custom-checkbox'  style={{cursor:'pointer'}} checked={selection.isNumber} onChange={(e)=>setselection({...selection,isNumber:e.target.checked})} type="checkbox" /> Include Numbers Letters </span>
        <span className='color-gray checkbox-div'  ><input  className='custom-checkbox'  style={{cursor:'pointer'}} checked={selection.isSymbol} onChange={(e)=>setselection({...selection,isSymbol:e.target.checked})}  type="checkbox" /> Include Symbols  </span>
      </div>
      <div className='strength-container color-gray' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>STRENGTH</div>
        <div style={{display:'flex',flexDirection:'column'}}>
        <div>{passwordQuality}</div>
        <div className='bar-item'>
        <div style={{backgroundColor:'red',}} className='bar'></div>
        <div style={{backgroundColor:'red',}} className='bar'></div>
        <div className='bggray'></div>
        <div className='bggray'></div>
        <div className='bggray'></div>
        </div>
        </div>
      
      </div>
      <div style={{cursor:'pointer'}} className="generator_password_button">
        <button className='generate'  onClick={generatePassword}>GENERATE</button>
      </div>
    </div>
  );
  }
  export default App;