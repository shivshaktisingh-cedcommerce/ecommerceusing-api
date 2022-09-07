import React, {useContext}from 'react'
import "./Navbar.css"
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import {dummy} from "./Datacontext"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
  
    width: '60%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));


  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '30ch',
        },
      },
    },
  }));

export default function Navbar() {
  const user = useContext(dummy)

  const search_fun=(event)=>{
    user.setSearchinput(event.target.value)
  }



 
  

  const shopnow_fun=()=>{
    document.body.scrollTop=400;
    document.documentElement.scrollTop=400;
  }
  return (
    <Box sx={{ flexGrow: 1 }} >
    <AppBar  id="navbar_box_id">
      <Toolbar>
        
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'show', sm: 'block' } , cursor:"pointer" }}
          onClick={shopnow_fun}
        >
          ShopNow
        </Typography>
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange={search_fun}
            value={user.searchinput}
          />
        </Search>
        <div style={{marginLeft: "4vw" , cursor:"pointer"}}>{user.loginflag===false?<span title="Login"><AccountCircleIcon onClick={()=>user.setFlagmodal1(true)}/></span>:<span title="Logout"><LogoutIcon onClick={()=>user.setLoginFlag(false)}/></span>}</div>
        <div style={{marginLeft: "4vw"}}>
        <Badge badgeContent={user.cart.length} color="primary" style={{cursor:"pointer"}}>
          <ShoppingCartOutlinedIcon onClick={()=>user.setFlagdrawer(true)}/>
         </Badge> 
          </div>
      </Toolbar>
    </AppBar>
  </Box>
  )
}



