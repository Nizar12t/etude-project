import { color } from '@chakra-ui/react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
// import { Button } from '@mui/material';
import  React from 'react';
import { NavLink } from 'react-router-dom';
import "./ResponsiveDialog.css";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
 
  

  return (
    <div className='pipn'>
      <Button  style={{color:"#173D7A" , fontSize: "18px"}} variant="outlined" onClick={handleClickOpen}>
      إستكشف
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <p style={{position:"relative" , textAlign:"center" ,color:"blue"}}>
          هل تريد التمتع بخدمات دراسة ؟
        </p>
        <DialogContent>
          <p style={{position:"relative" , right:"0px" ,top :"0px" }}>
          للتمتع بخدمات دراسة يرجي إنشاء حساب جديد أو تسجيل الدخول
          </p>
          <p style={{position:"relative" , right:"-167px" ,top :"3px" }}>
          موقع دراسة يوفر لكم أفضل خدمات
          </p>
        </DialogContent>
        <DialogActions>
        <NavLink to ="/inscrit">

          <Button autoFocus onClick={handleClose}>
          حساب جديد
          </Button>
          </NavLink>
          <NavLink to ="/inscrit1">
          <Button onClick={handleClose} autoFocus>
          تسجيل الدخول
          </Button>
          </NavLink>
        </DialogActions>
      </Dialog>
    </div>
  );
}
