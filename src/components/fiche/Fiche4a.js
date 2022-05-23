import "./Fiche4a.css";
import React from "react";
import { Select } from '@chakra-ui/react'

export default function Fiche2a() {
  // return(
  /* <div className="fiche2aa"> */
  return (
    <div className="fiche2aa">
      <div className="box">
      
      
      {/* <Stack spacing={[30, 3]} direction={['column', 'row']}> */}
         
       
      <Select  className="" placeholder=' المستويات الدراسية'>
  <option  value='option1'> جامعي</option>
  <option value='option2'>اساسي</option>
  <option value='option3'>ابتدائي</option>
</Select>
</div>
   </div>



  );
}
