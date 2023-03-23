import styled from "styled-components";
import React,{useEffect} from "react";
import {createUserWithEmailAndPassword,signInWithPopup,signOut} from "firebase/auth";
import {useDispatch,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import {auth,provider} from "./firebase.config.js";
import {selectUserName,selectUserEmail,selectUserPhoto,setUserLoginDetails,setSignOutState} from "./users/userslice.js"
function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
      if(user){
        setUser(user);
        navigate("/home");
      }
    });
  },[userName]);
 function  handleAuth(){
  if(!userName){
        signInWithPopup(auth,provider)
        .then((res)=>{
          setUser(res.user);     
 }).catch((err)=>{
            alert(err.message);
        });

    }else if(userName){
        signOut(auth)
        .then(()=>{
          dispatch(setSignOutState())
          navigate('/')
        }).catch((err)=>{
          alert(err.message)
        })
    }
  }
    const setUser=(user)=>{
      dispatch(setUserLoginDetails({
        name:user.displayName,
        email:user.email,
        photo:user.photoURL,

      }))
    }

  return (
      <Nav>
        <Logo>
          <img src="/images/logo.svg" alt="" />
        </Logo>
        {
          !userName ? <Login onClick={handleAuth}>Login</Login>:
          <>
          {/* <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="Home"/>
            </a>
          </NavMenu>
          </> */}
        
        <NavMenu>
          <a href="/home">
            <img src="/images/home-icon.svg" alt="HOME" />
            <span>HOME</span>
          </a>
          <a href="/home">
            <img src="/images/search-icon.svg" alt="SEARCH" />
            <span>SEARCH</span>
          </a>
          <a href="/home">
            <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
            <span>WATCHLIST</span>
          </a>
          <a href="/home">
            <img src="/images/original-icon.svg" alt="ORIGINAL" />
            <span>ORIGINAL</span>
          </a>
          <a href="/home">
            <img src="/images/movie-icon.svg" alt="MOVIE" />
            <span>MOVIE</span>
          </a>
          <a href="/home">
            <img src="/images/series-icon.svg" alt="SERIES" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <SignOut>
        <UserImg src={userPhoto} alt={userName} />
        <DropDown>
          <span onClick={handleAuth}>Sign Out</span>
        </DropDown>
        </SignOut>
        </>
  }
        {/* // <Login onClick={handleAuth}>Login</Login> */}
 
</Nav>
);
}

const Nav = styled.nav`
  position: fixed;
  top:0px;
  height: 70px;
  left: 0;
  right: 0;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  padding: 0px 36px;
  align-items: center;
  letter-spacing: 16px;
  z-index: 3;
`;
const Logo = styled.a`
  width: 80px;
  padding: 0;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin:0px;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-left: 25px;
  margin-right: auto;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        content: "";
        bottom: -6px;
        opacity: 0;
        height: 2px;
        left: 0px;
        position: absolute;
        right: 0px;
        transform-orgin: left center;
        transform: scaleX(0);
        transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;
const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color:#000;
    border-color:red;
  }
`;
const UserImg = styled.img`
height:100%;
`
const DropDown = styled.div`
position:absolute;
top:48px;
right:0px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
padding: 10px;
font-size:14px;
letter-spacing:1px;
width:100px;
opacity:0;
text-align:center;


`
const SignOut = styled.div`
position:relative;
height:48px;
width:48px;
display:flex;
cursor:pointer;
align-items:center;
justify-content:center;

${UserImg}{
  border-radius:50%;
  width:100%;
  height:100%;
}
&:hover{
  ${DropDown}{
    opacity:1;
    transition-duration:0.35s;
    background-color:#0063e5;
  }
}
`

export default Header;
