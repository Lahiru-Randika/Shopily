
import Button  from "@mui/material/Button";
import { IoSearch } from "react-icons/io5"

const Searchbox =()=>{
    return(
        <>
            <div className="headersearch searchbox ml-3 mr-3">
                <input type="text" placeholder="Search"></input>
                <Button><IoSearch/></Button>
            </div>
        </>
    )
} 
export default Searchbox;
