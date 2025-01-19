import React,{useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';





const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
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
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '50ch',
      
      },
    },
  }));
  
  export default function SearchAppBar(props) {

    const [city,setCity]=useState("")



    function handleChange(event){
      setCity(event.target.value)
    }
    
    function handleClick(){
      try {
        props.onFind(city) 
      } catch (error) {
        console.log(error);  
      }
      
    }

    return (
      <div>
           <div className="find-city">
            <h1>Find Out What’s Coming Next in Your City</h1>
            <p>Get accurate, real-time weather updates for any city around the world. Whether you're planning your day or just curious about the forecast, our easy-to-use platform provides up-to-date information to help you stay prepared and make informed decisions.</p>
            </div>

        <AppBar style={{borderRadius:"10px",backgroundColor:"#0d0c1d"}} position="static">
          <Toolbar>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                onChange={handleChange}
              />
            </Search>
            <Button variant="contained"  onClick={handleClick}  style={{backgroundColor:"#1f1e48",margin:"auto"}}>Get Weather</Button>

          </Toolbar>
        </AppBar>

        </div>
    );
  }