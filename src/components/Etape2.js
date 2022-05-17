import React from 'react';
import "./Etape2.css";
import { NavLink } from 'react-router-dom';

import { useState } from "react";
import { Input } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Logo from "../image/Grr.png";
import Po from "../image/po.png";





export default function Etape2() {
          
  return (
    <div className='etape21'>

        <div className='etape22'>
        <div className='etape211'>
             <div className='col111' >
                <Input placeholder='اللقب' className='inputt' />
                <Input placeholder='الهاتف' className='inputt1' />
                <Input placeholder='الجنس' className='inputt2'/>
            </div>
            <div className='col222' >
                <Input placeholder='الاسم' className='inputt'/>
                <Input placeholder='البلد' className='inputt1' />
                <Input placeholder='تاريخ الولادة' className='inputt2'/>
            </div>
            </div>
            <NavLink to="/inscrit1"
            style={{bottom:'196px'}}
            className={"button44"}
             >   
       <button 
       >تسجيل </button>
       </NavLink>
       <NavLink to="/inscrit1"
       style={{top:'273px'}} 
            className={"button44"} 
            >   
       <button  >اضف صورة
       </button>
       </NavLink>
       <div className='im11'>
        <Image
          borderRadius='full'
          boxSize='100px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
        </div>
            
        </div>
        <div className='etape23'>
          {/* <div className="cm">
            </div> */}
          <img src={Logo} className="colorcm"  alt="logo" />
          <div className='etape27'>
          <img src={Po} className="po1"   alt="po" /> 
          <img src={Po} className="po1" style={{bottom:'82px'}}  alt="po" /> 
          <img src={Po} className="po1" style={{bottom:'0px'}}  alt="po" /> 
             <p className='p7' style={{top:' 10px'}}>انشاء حساب جديد</p>
             <p className='p7' style={{bottom:' 100px' , left:'100px'}}>التصنيف</p>
             <p className='p7' style={{bottom:' 10px' , left:'100px'}}>التسجيل</p>


          </div>
           
        </div>
        

        
    </div>
  )
  
}
