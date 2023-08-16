import Link from 'next/link';
import  {  useState } from "react";
import { NavLink } from '../src/NavLink';
import {
  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu, 
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import { makeStyles,ServerStyleSheets } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import CancelIcon from "@mui/icons-material/Cancel";
import Divider from "@mui/material/Divider";
import PersonIcon from '@mui/icons-material/Person';
import ExtensionIcon from '@mui/icons-material/Extension';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import HomeIcon from '@mui/icons-material/Home';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ListItemIcon from "@mui/material/ListItemIcon";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import navStyles from '../styles/Navbar.module.css';
import { useRouter } from "next/router";
  

  const Navbar = (props) => {
    const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMenuAnchor);
    if (typeof window !== 'undefined') {
      // Perform localStorage action
      var usersData =localStorage.getItem('user');
    }
    
    const openMobileMenu = (e) => {
      setMobileMenuAnchor(e.currentTarget);
    };
  
    const closeMobileMenu = () => {
      setMobileMenuAnchor(null);
    };
  
    const [open, setOpen] = useState(false);
    const mobileMenu = (
      <Menu
        // className='mobileNavbar'
  
        anchorEl={mobileMenuAnchor}
        id="mobile-menu"
        keepMounted
        open={isMobileMenuOpen}
      >
        <MenuItem onClick={closeMobileMenu} component={NavLink} exact href="/">
          Home
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/profile">
          MyProfile
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/blogs">
          Blogs
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/code">
          Code
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/interviewquestions">
          QnA
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/login">
          Login
        </MenuItem>
        <MenuItem onClick={closeMobileMenu} component={NavLink} href="/register">
          Register
        </MenuItem>
        <MenuItem onClick={closeMobileMenu}>
          <CancelIcon />
        </MenuItem>
      </Menu>
    );
  
    const RenderMenu = () => {
  
      if (usersData) {
        return (
          <>
            <li className={navStyles.nav_item}>
              <NavLink className={navStyles.nav_link}
               exact href="/" >
                Home{" "}
              </NavLink> 
            </li>
            <li className={navStyles.nav_item}>
              <NavLink className={navStyles.nav_link} href="/profile">
                MyProfile{" "}
              </NavLink>
            </li>
            <li className={navStyles.nav_item}>
                      <NavLink className={navStyles.nav_link} href="/blogs">
                        Blogs{" "}
                      </NavLink>
                    </li>
            <li className={navStyles.nav_item}>
              <NavLink className={navStyles.nav_link} href="/code">
                Codes{" "}
              </NavLink>
            </li>
            <li className={navStyles.nav_item}>
              <NavLink className={navStyles.nav_link} href="/interviewquestions">
                Interview QnA{" "}
              </NavLink>
            </li>
            <li className={navStyles.nav_item}>
              <NavLink className={navStyles.nav_link} href="/logout">
                Logout{" "}
              </NavLink>
            </li>
          </>
        );
      } else {
        return (
          <>
            <li className={navStyles.nav_item}>
                      <NavLink  href="/" exact className={navStyles.nav_link}>
                         Home 
                      </NavLink>
                    </li>  
                    {/* <li className={navStyles.nav_item}>
                      <NavLink  href="/profile" className={navStyles.nav_link}>
                       Dashboard 
                      </NavLink>
                    </li> */}
                    <li className={navStyles.nav_item}>
                      <NavLink className={navStyles.nav_link} href="/blogs">
                        Blogs{" "}
                      </NavLink>
                    </li>
                    <li className={navStyles.nav_item}>
                      <NavLink  href="/code" className={navStyles.nav_link}> 
                        Code 
                      </NavLink>
                    </li>
                    <li className={navStyles.nav_item}>
                      <NavLink className={navStyles.nav_link} href="/interviewquestions">
                        Interview QnA{" "}
                      </NavLink>
                    </li>
                   
                            
                    <li className={navStyles.nav_item}>
                      <NavLink  href="/login" className={navStyles.nav_link}>    
                        Login
                      </NavLink>
                    </li> 
                    <li className={navStyles.nav_item}>
                      <NavLink  href="/register" className={navStyles.nav_link}>
                        Register
                      </NavLink>
              </li>
            </>
        );
      }
    };
  
    // drawer ConvolverNode
    const  history = useRouter();
    const itemList = [
      { text: "Home", icon: <HomeIcon />, onClick: () => history.push("/") },
      {
        text: "MyProfile",
        icon: <PersonIcon />,
        onClick: () => history.push("/profile"),
      },
      {
        text: "Codes",
        icon: <ExtensionIcon />,
        onClick: () => history.push("/code"),
      },
      
      {
        text: "Interview QnA",
        icon: <ShopTwoIcon />,
        onClick: () => history.push("/interviewquestions"),
      },
      
    ];
  
    const itemLists=[
      {
        text: "Login",
        icon: <LockOpenIcon />,
        onClick: () => history.push("/login"),
      },
      {
        text: "Register",
        icon: <VpnKeyIcon />,
        onClick: () => history.push("/register"),
      },
      {
        text: "Source Code ",
        icon: <ExtensionIcon />,
        onClick: () => history.push("/code"),
      },
      { 
        text: "Logout ",
        icon: <LockOpenIcon />,
        onClick: () => history.push("/logout"),
      },
  
    ];
    const drawer = (
      <div>
        <div className={navStyles.drawerHeader}></div>
        <Divider />
        <List>
          {itemList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon} </ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {itemLists.map((item, index) => {
            const { text, icon, onClick } = item;
            return(
            <ListItem button key={text} onClick={onClick}>
            {icon && <ListItemIcon>{icon} </ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          )})}
        </List>
      </div>
    );
  
    return (
      <>
        <div className={navStyles.root}>
          <CssBaseline />
          <Drawer open={open} onClose={() => setOpen(false)}>
            {drawer}
          </Drawer>
          {/* appbar starts here */}
          <AppBar
            style={{ background: "#16325c" }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                className={navStyles.menuButton}
                color="inherit"
                onClick={() => setOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h5" className={navStyles.title}>
                Salesforce NOOB
              </Typography>
              <div className={navStyles.renderMenu}>
                <RenderMenu />
              </div>
              <div className={navStyles.mobileMenus}>
              <IconButton color="secondary" onClick={openMobileMenu}>
                <MoreIcon />
              </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <div className={navStyles.mobileNavbar}>{mobileMenu}</div>
          <main className={navStyles.content}></main>
        </div>

        {/* Style section starts here */}

        <style jsx>
            {`
            a{
                color: aliceblue;
                text-decoration: none;
                font-size: 20px !important; 
            } 

            .nav-item{
                text-decoration: none;
                list-style: none;
            }
        
            .nav-item a:hover{
                border-color:  #FF5823;
                color: #FF5823;
                text-decoration: none;
                font-weight: 700;
            }
        
            .menu_actives{
                font-weight: bold;
                border-bottom: 2px solid #ff5823;
            }
           
                
            `}
        </style>

        {/* Style section ends here */}
        
      </>
    );
  };
  
  export default Navbar;
  