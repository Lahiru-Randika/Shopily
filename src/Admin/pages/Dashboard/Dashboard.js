import { useContext, useEffect } from "react";
import  { MyContext } from '../../../App.js';

const Dashboard = ()=> {

  const context = useContext(MyContext)

  useEffect(()=>{
      context.setisHeadFootShow(false);
      context.setisHeaderFooterAdmin(true);
  },[])

  return (
    <div>
        home
    </div>
  );
}

export default Dashboard;