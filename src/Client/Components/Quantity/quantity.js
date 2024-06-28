import { FaMinus } from 'react-icons/fa6'
import { FaPlus } from 'react-icons/fa6'
import Button from "@mui/material/Button";
import { useState } from 'react';

const Quantity = ()=>{

    const [inputVal, setinputVal] = useState(1);

    const dominus = ()=>{
        if (inputVal>1){
            setinputVal(inputVal-1)
        }
    }
    const doplus = ()=>{
        setinputVal(inputVal+1)
    }

    return(
        <div className="quantity">  
            <Button onClick={dominus}><FaMinus/></Button> 
            <input type='text' value={inputVal}/> 
            <Button onClick={doplus}><FaPlus/></Button>    
        </div>
    )
}

export default Quantity;