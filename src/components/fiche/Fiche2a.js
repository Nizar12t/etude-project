import "./Fiche2a.css";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Checkbox,
  CheckboxGroup,
  Stack,
} from "@chakra-ui/react";
export default function Fiche2a() {
  // return(
  /* <div className="fiche2aa"> */
  return (
    <div className="fiche2aa">
      <div className="box">
      
      
      {/* <Stack spacing={[30, 3]} direction={['column', 'row']}> */}
         
       
     <div  className="anne"  >
        {/* <MenuGroup> */}
    
      <Menu >
        <MenuButton as={Button}>اختر السنة</MenuButton>
        <MenuList>
      <Checkbox size='md' colorScheme='red'>
    1999
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
    2000
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
    2001
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
    2002
  </Checkbox>
  <br/>
  <Checkbox size='md' colorScheme='red'>
    2003
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
    2004
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
    2005
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
    2006
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
    2007
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
    2008
  </Checkbox><br/>
  </MenuList>
      </Menu>
     </div> 

<div className="type"> 
      <Menu>
        <MenuButton as={Button}>اختر الانواع</MenuButton>
        <MenuList>
      <Checkbox size='md' colorScheme='red'>
      خيالي
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
  اكشن
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
  كوميدي
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
  درامي
  </Checkbox>
  <br/>
  <Checkbox size='md' colorScheme='red'>
  وتائقي
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
  رعب
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
  مغامرات
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
  خيالي علمي
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
  درامي
  </Checkbox>
  <Checkbox size='md' colorScheme='red'>
  جريمة
  </Checkbox>
  </MenuList>
      </Menu><br/>
    </div> 

<div className="langue"> 
      <Menu  >
        <MenuButton as={Button}>اختر اللغة </MenuButton>
        <MenuList>
      <Checkbox size='md' colorScheme='red'>
      العربية
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
  الفرنسية
  </Checkbox><br/>
  <Checkbox size='md' colorScheme='red'>
  الانقليزية
  </Checkbox>
  
  
  </MenuList>
      </Menu>
  
      
      </div>






      
{/* </Stack> */}
</div>
   </div>



  );
}
