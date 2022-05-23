import "./Page3.css";
import { Button, ButtonGroup ,Stack} from '@chakra-ui/react'
import { React, Component } from "react";
import { NavLink } from "react-router-dom";
import Articles from "./article/Articles";


function Page3(){

    
        return(
        <div className="page31">
          <div className="page32"></div>
          <div className="page33">
          <h1 className="h1" >جميع المقالات هنا</h1>
          <div className="page34">
            <div className=" page35">
  
<Stack direction='row' spacing={7} align='center' >

  <Button  className="activ" >
  تاريخ
  </Button>
  <Button  className="activ" >
  علوم
  </Button>
  <Button   className="activ">
  رياضيات
  </Button>
  <Button  className="activ">
  فيزياء
  </Button>
  <Button  className="activ" >
  تصميم
  </Button>
  <NavLink to="/Addarticle">
  <Button  className="activ">
  اداب
  </Button>
  </NavLink>
  <p colorScheme='teal' >
   جميع المسالك
  </p>
</Stack>


            </div>

          </div>
          </div>
          <div>
            <Articles/>
          </div>
 

        </div>
        )
    }

export default Page3;