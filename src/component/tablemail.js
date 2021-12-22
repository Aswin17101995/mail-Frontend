import React, { useEffect, useState } from "react";
import { Getmails } from "./api";
import UserContext  from "./context";
import { useContext } from "react";
import Row from "./row";
function Table() {

  let [came,setcame] = useState([])
  const sto = useContext(UserContext)
  let loggedin = {person:sto.su}
  useEffect(async()=>{

    var d = await Getmails(loggedin)
    let all = d.data
    setcame([...all])
    
  },[])

  
  return (
    <>
      <div class="table">
        <table>      
            {
              came.map((item)=>{
                return <Row full={item}></Row>
              })
            }
        </table>
      </div>
    </>
  );
}
export default Table;
