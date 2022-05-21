import React from "react";
// import home from "../components/auth/img/Asset 1.png";
import nav from "../components/auth/img/Asset 2.png";
import twitter from "../components/auth/img/Asset 3.png";
import twitter2 from "../components/auth/img/Asset 4.png";
// import map from "../components/auth/img/Asset 7.png";
import button from "../components/auth/img/Asset 8.png";
import card from "../components/auth/img/Josh.gif";
import card1 from "../components/auth/img/Bread.gif";
import card2 from "../components/auth/img/Brommy.gif";
import card3 from "../components/auth/img/Eduardo.gif";
import card4 from "../components/auth/img/Illuminate_2.gif";
import card5 from "../components/auth/img/Jinx.gif";
import card6 from "../components/auth/img/Selly_1.gif";
// import base64 from 'base-64'
import video from "../components/auth/img/Asset 9.mp4";
import video2 from "../components/auth/img/Asset 15.mp4";
import video3 from "../components/auth/img/Asset 17.mp4";
// import video4 from "../components/auth/img/Asset 18.mp4";
import video5 from "../components/auth/img/Asset 19.mp4";
// import video6 from "../components/auth/img/Asset 20.mp4";
import video6 from "../components/auth/img/Asset 21.mp4";

import Marquee from "react-fast-marquee";

// import shutitdown from "../components/auth/img/Asset 16.png";
import "../components/auth/css/Home.css";
import { Accordion, Navbar, Nav, Container } from "react-bootstrap";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { borderLeft } from "@mui/system";
function Home() {
  const [disableBtn,setDisableBtn] = useState(false);
  const inputEl = useRef();

  const inputEl2 = useRef();
  const titleColor = useRef();

  const titleMenu = useRef();
  const canvasMenu = useRef();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const componentToHex=(c)=> {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  const grabScreen=()=>{
    let player = titleMenu.current;
    let canvas = canvasMenu.current;
    console.log(canvas);
    canvas.width = 220;
    canvas.height = 220;
    let ctx = canvas.getContext('2d');
    ctx.drawImage(player,0,0);
    let p = ctx.getImageData(0,0,1,1).data;
    console.log(player);
    console.log("rgb(" + p[0] + "," + p[1] + "," + p[2] + ")");
    console.log("#" + componentToHex(p[0]) + componentToHex(p[1]) + componentToHex(p[2]));
    var tab = titleColor.current;
    // console.log(tab.style)
    // tab.style.backgroundColor = "#" + componentToHex(p[0]) + componentToHex(p[1]) + componentToHex(p[2]);
    tab.style.backgroundColor = "#" + componentToHex(p[0]) + componentToHex(p[1]) + componentToHex(p[2]);
    // tab.style.setProperty("background", "#" + componentToHex(p[0]) + componentToHex(p[1]) + componentToHex(p[2]));
    
  }

  const playVideo = async (event) => {
      
      if (inputEl.current===null || disableBtn ){
          return;
      }
      setDisableBtn(true);
      inputEl.current.play();
      await sleep(4166.66666667); // 2 sec
      inputEl.current.pause();
      setDisableBtn(false);
  }


  useEffect(()=>{
    titleMenu.current.play();
    // grabScreen();
    },[])
  
  useEffect(()=>{
    // console.alert(2)
    if (titleMenu.current!==null){
      
      titleMenu.current.play().then(() => {}).catch((error) => {
        titleMenu.current.play()
      });
  
    }
    if (inputEl.current!==null && inputEl2.current!==null){
      
      inputEl2.current.play();
      inputEl2.current.pause();
      inputEl.current.play();
      inputEl.current.pause();
    
    }

  },[])
  

  return (
    <>
      <div style={{zIndex:0, position:'fixed'}}>
          <video style={{position:'fixed',zIndex:0,right:0,left:0,minHeight:"100%",minWidth:'100%',width:'auto',height:'auto',backgroundSize:'100% 100%'}} ref={titleMenu} id ="vidMenu" controlsList="nodownload nofullscreen noplaybackrate" controls={false} autoPlay muted loop src={video5} type="video/mp4" webkit-playsInline playsInline/>
      </div>
     {/* <video style={{position:'fixed',zIndex:0,right:0,left:0,minHeight:'100%',minWidth:'100%'}} ref={titleMenu} id ="vidMenu" controlsList="nodownload nofullscreen noplaybackrate" controls={false} autoPlay muted loop src={video5} type="video/mp4" webkit-playsInline playsInline/> */}
      <div class="scrollbar" >
        <div class="overflow">
          
          <section ref={titleColor}  className="main" style={{borderLeft: "5px solid #000"}} >
              
        
            <div className="container-fluid">
                
                
              {/* <marquee>*/}
              <div 
                className="row"
                style={{
                  borderBottom: "5px solid #000",
                  borderTop: "5px solid #000",
                }}
                
              >

                <section style={{paddingLeft:0,paddingRight:0}}class="marquee">
                  <Marquee style={{color:'white',fontSize:20,fontFamily:'Cubano',position:'relative'}} direction={"right"} gradient={false}>
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      THE META BUCKS&nbsp;&nbsp;&nbsp;THE META BUCKS&nbsp;&nbsp;&nbsp;
                      
                  </Marquee>
                </section>
                {/* <section class="marquee py-2">
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  <h4 style={{fontFamily:"Cubano"}} class="text">THE META BUCKS</h4>
                  
                  
                </section> */}
              </div>
              {/* <nav>*/}
              <div className="row">
                <Navbar className="nav" expand="lg">
                    {/* <video style={{ objectFit:"fill", position:"fixed"}} ref={titleMenu} id ="vidMenu" controlsList="nodownload nofullscreen noplaybackrate" controls={false} autoPlay muted loop src={video3} type="video/mp4" webkit-playsInline playsInline/> */}
                  <Container fluid style={{marginTop:-20}}>
                    <Navbar.Brand href="">
                      <img src={nav} alt="" className="hedar_img" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls="basic-navbar-nav"
                      className="button_nav"
                    />
                    <Navbar.Collapse style={{marginBottom:70}} id="basic-navbar-nav">
                      <Nav className="pt-3" style={{ marginLeft: "auto" }}>
                        {/* <a href="#STORY" className="nav-link" style={{color: "#000"}}>
                          STORY
                        </a> */}
                        <a href="#ROADMAP" className="nav-link" style={{color: "#000"}}>
                          ROADMAP
                        </a>
                        <a href="#SHUTITDOWN" className="nav-link" style={{color: "#000"}}>
                          SHUTITDOWN
                        </a>
                        
                        <a href="#TEAM" className="nav-link" style={{color: "#000"}}>
                          TEAM
                        </a>
                        <a href="#FAQ" className="nav-link" style={{color: "#000"}}>
                          FAQ
                        </a>
                        <a id="login" style={{color: "#000"}} className="nav-link" href="https://discord.com/api/oauth2/authorize?client_id=968220879328792596&redirect_uri=https%3A%2F%2Fthemetabucks.io%2Fcallback&response_type=code&scope=identify%20guilds%20guilds.members.read">
                          CONNECT
                        </a>
                        {/* MetaMask/WEB3 Intergration */}
                        <a className="nav-link" style={{color: "#FFFFFF"}}>
                          MINT
                        </a>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </div>
              {/* This moves video up */}
              <div style={{marginTop:-41}} className="row hedar_s">
                  {/* This moves video down */}
                <div style={{marginBottom:-5}} className="container-fluid ">
                
                  
                  <video ref={titleMenu} id ="vidMenu" className="video_container3" controlsList="nodownload nofullscreen noplaybackrate" controls={false} autoPlay muted loop src={video3} type="video/mp4" webkit-playsInline playsInline/>
                  {/* <canvas ref={canvasMenu}></canvas> */}
         
                  {/* <div className="buckaroo_img_div"> */}
                    {/* <img src={home} alt="" className="img-fluid" /> */}
                    {/* <video style={{zIndex:98}} className="video_container3" controls={true} controlsList="nodownload noplaybackrate" autoPlay={true} src={video3} type="video/mp4" />
                    
                  </div> */}
                  <div className="d-flex flex-column left_said_contenet">
                  
                    <button className="left_said_icon" style={{zIndex:98,position:'relative'}} onClick={(e) => {
                      e.preventDefault();
                      window.open("https://discord.gg/themetabucks","_blank")
                      //window.location.href = "https://twitter.com/brommmyy";
                      }}>
                      <img src={twitter} className="twitterImg" alt=""  />
                    </button>
                    
                    <button className="left_said_icon" onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/TheMetaBucks","_blank")
                      //window.location.href = "https://twitter.com/brommmyy";
                    }}>
                    
                        <img src={twitter2} className="twitterImg" alt=""  />
                
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*------ video section ------*/}
          <section className="video" style={{zIndex:98,position:'relative',borderLeft: "5px solid #000" }}>
            {/* <div className="video_container3"> */}
              <video ref={inputEl2} className="video_container2 " controls={true} controlsList="nodownload noplaybackrate" autostart autoPlay={false} webkit-playsInline playsInline src={video} type="video/mp4" />
            {/* </div> */}
          </section>
          {/* Animation section */}
          {/* <section className="Animation px-md-5 px-5 py-5" id="home">
            <div className="container-fluid px-md-5">
              <div className="row">
                <div className="col-md-8 col-sm-6 d-flex flex-column justify-content-center py-4 px-0">
                  <h1 className="pb-4">Meta Bucks BANNER.</h1>
                  <h6>
                    META BUCKS is a collection of 3,333 animated NFTs
                    (non-fungible tokens) ON THE ETHEREUM BLOCKCHAIN.
                  </h6>
                  <h6>
                    This collection is made up of unique characters — each
                    acting as the center piece for their respective Meta Bucks
                    BANNER.
                  </h6>
                </div>
                <div className="col-md-4 col-sm-6 py-4 px-0">
                  <div className="Animation_componet">
                    <h4>Animation</h4>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* THE STORY */}
          {/* <section className="STORY px-md-5 px-5 py-5" id="STORY">
            <div className="px-md-5">
              <h1 className="STORY_heding" >THE STORY</h1>
              <h4 className="py-3" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h4>
              <h4 className="py-3" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h4>
            </div>
          </section> */}
          {/* FRENS */}
          <section className="video"  id="ROADMAP" style={{zIndex:98,position:'relative',borderLeft: "5px solid #000"}} >
            {/* <div className="video_container3"> */}           
              <button className="buttonGame" onClick={() => {playVideo();}}  style={{marginLeft:'auto',marginRight:'auto',position:'absolute',zIndex:99,backgroundColor:'transparent',borderColor:'transparent'}}>
                <img src={button} className='rollButton' alt=""/></button>
              {/* <video  ref={inputEl} style={{zIndex:98}} className="video_container2 " controls={false} controlsList="nodownload nofullscreen noplaybackrate" autoPlay={false} src={video2} type="video/mp4" webkit-playsInline playsInline  /> */}

              <video  ref={inputEl} style={{zIndex:98}} className="video_container2 " controls={false} controlsList="nodownload nofullscreen noplaybackrate" autoPlay={false} src={video2} type="video/mp4" webkit-playsInline playsInline  />
              
            {/* </div> */}
          </section>
           {/* SHUT IT DOWN SUNDAY */}
          <section className="STORY" id="SHUTITDOWN" style={{zIndex:98,position:'relative',borderLeft: "5px solid #000"}}>
            {/* <img  src={shutitdown} alt=""  /> */}
            <video ref={titleMenu} id ="vidMenu" className="video_container3" controlsList="nodownload nofullscreen noplaybackrate" controls={false} autoPlay muted loop src={video6} type="video/mp4" webkit-playsInline playsInline/>
            
            <div className="shutitText px-md-5" style={{marginBottom:40,marginTop:20}}>
              <h4 className="py-2" style={{ fontFamily:"Cubano" }}>
              It started off with our core team noticing how everyone was getting so drained from grinding various servers across the NFT space. We were concerned about our community! 
              </h4>
              <h4 className="py-2" style={{ fontFamily:"Cubano" }}>
              It occurred to us that while we were claiming to encourage a non-grinding mentality, no one was actually doing anything to change that. We then came up with the idea to shut down our server on Sundays, encouraging our community to take time off, spend time with family and friends, and go outside! 
              </h4>
              <h4 className="py-2" style={{ fontFamily:"Cubano" }}>
              Since launching this initiative, more and more leaders in web3 have partnered with us to support this incredible movement. JOIN US AND hELP MAKE A POSITIVE IMPACT!
              </h4>
            </div>
          </section>


          {/* <section className="FRENS py-5 px-md-5 px-4" id="ROADMAP">
            <div className="container-fluid px-md-5">
              <div className="row">
                <div className="col-sm-6 d-flex justify-content-center align-items-center my-4">
                  <div className="map_img">
                    <img src={map} alt="" className="img-fluid h-75" />
                  </div>
                </div>
                <div className="col-sm-6 my-4">
                  <div className="FRENS_text_div">
                    <button className="FRENS_btn">
                      <img src={button} alt="" className="img-fluid" />
                    </button>
                    <div className="h-100">
                      <div className="container-fluid h-100 p-0">
                        <div className="row h-25 m-0 p-4">
                          <div className="FRENS_inner_div1">
                            <h1>FRENS</h1>
                          </div>
                        </div>
                        <div className="row h-75 m-0 p-4">
                          <div className="FRENS_inner_div">
                            <h4 className="text-center py-5">
                              Our goal at THE Meta bucks is to create and form
                              significant partnerships with other projects,
                              communities, and influencers whose values align
                              with ours.
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
          {/* dream team */}
          <section  className="dream_team py-5 px-md-5 px-4" id="TEAM" style={{zIndex:98,position:'relative',borderLeft: "5px solid #000"}}>
            <div style={{backgroundColor:'transparent'}} className="container-sm">
              <h1 className="STORY_heding">THE DREAM TEAM</h1>
              


              <div style={{backgroundColor:'transparent',alignContent:'center',alignSelf:'center',justifyContent:'center'}} className="row px-xl-5 mx-xl-5">
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto ">
                    <img src={card5} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    THE JINX
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    FOUNDER
                  </p>
                  
                 
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano", cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/thejinx333","_blank")
                      // window.location.href = "https://twitter.com/thejinx333";
                    }}
                  >
                    @THEJINX333
                  </p>
                  
                
                
                </div>
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto card2">
                    <img src={card3} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    EDUARDO JINICH
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    ARTIST & FOUNDER
                  </p>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano",cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/ejinich","_blank")
                      //window.location.href = "https://twitter.com/ejinich";
                    }}
                  >
                    @EJINICH
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto card3">
                    <img src={card6} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    SELLY KLATER
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    ANIMATOR
                  </p>
                 
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano",cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/Selly_Klater","_blank")
                      //window.location.href = "https://twitter.com/Selly_Klater";
                    }}
                  >
                    @SELLY_KLATER
                  </p>
                </div>
              </div>


              <div style={{backgroundColor:'transparent'}} className="row px-xl-5 mx-xl-5">
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto ">
                    <img src={card2} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    BROMMY
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    ADVISOR
                  </p>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano",cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/brommmyy","_blank")
                      //window.location.href = "https://twitter.com/brommmyy";
                    }}
                  >
                    @DBROMMEDY
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto card2">
                    <img src={card} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    JOSH.BUSD
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    ADVISOR
                  </p>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" ,cursor:'pointer'}}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/Josh_Busd","_blank")
                      //window.location.href = "https://twitter.com/Josh_Busd";
                    }}
                  >
                    @JOSH_BUSD
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto card3">
                    <img src={card4} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    ILUUMINATE
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    EXTERNAL RELATIONS
                  </p>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano",cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/luuminize","_blank")
                      //window.location.href = "https://twitter.com/luuminize";
                    }}
                  >
                    @LUUMINIZE
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xl-3 py-2">
                  <div className="team_img m-auto card3">
                    <img src={card1} alt="" className="img-fluid" />
                  </div>
                  <h3
                    className="text-center"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    BREADNFT
                  </h3>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano" }}
                  >
                    BANK MANAGER
                  </p>
                  <p
                    className="text-center m-0"
                    style={{ fontWeight: "600", fontFamily: "Cubano",cursor:'pointer' }}
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://twitter.com/BreadNFT_","_blank")
                      //window.location.href = "https://twitter.com/BreadNFT_";
                    }}
                  >
                    @BREADNFT_
                  </p>
                </div>
              </div>


              




              




              
            </div>
          </section>
          {/* <section className="dream_team py-5 px-md-5 px-4" id="TEAM">
            <div className="container-fluid px-md-5">
              <h1 className="STORY_heding">THE DREAM TEAM</h1>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  <div className="team_img m-auto card1">
                    <img src={card1} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>THE JINX</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    FOUNDER
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/thejinx333';}}>
                    @THEJINX333
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  <div className="team_img m-auto card2">
                    <img src={card2} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>EDUARDO</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    CO-FOUNDER/ARTIST
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/ejinich';}}>
                    @EJINICH
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  {" "}
                  <div className="team_img m-auto card3">
                    <img src={card3} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>SELLY</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    ANIMATOR
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/Selly_Klater';}}>
                    @SELLY_KLATER
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  {" "}
                  <div className="team_img m-auto card4">
                    <img src={card4} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>BROMMY</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    PROJECT ADVISOR
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/brommmyy';}}>
                    @BROMMMYY
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  {" "}
                  <div className="team_img m-auto card5">
                    <img src={card5} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>JOSH</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    PROJECT ADVISOR
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/Josh_Busd';}}>
                    @JOSH_BUSD
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-2">
                  <div className="team_img m-auto card6">
                    <img src={card} alt="" className="img-fluid" />
                  </div>
                  <h3 className="text-center" style={{ fontWeight: "600", fontFamily:"Cubano" }}>ILUUMINATE</h3>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }}>
                    EXTERNAL REALTIONS
                  </p>
                  <p className="text-center m-0" style={{ fontWeight: "600", fontFamily:"Cubano" }} onClick={(e) => {e.preventDefault();window.location.href='https://twitter.com/luuminize';}}>
                    @LUUMINIZE
                  </p>
                </div>
                
              </div>
            </div>
          </section> */}
          {/* FAQ'S */}
          <section className="FAQ py-5 px-md-5 px-4" id="FAQ" style={{zIndex:98,position:'relative',borderLeft: "5px solid #000"}}>
            <div className="container-fluid px-md-5">
              <h1 className="STORY_heding">FAQs</h1>
              <Accordion 
              
              
              defaultActiveKey="">
                <Accordion.Item   eventKey="0">
                  <Accordion.Header>
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6  style={{fontFamily:"Cubano" }} className="m-0">WHO ARE THE META BUCKS?</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }}>
                    The Meta Bucks are a series of 3,333 uniquely designed and animated NFT banners. The limited collection is paving the road through a new area of the market. They intend on taking over and becoming leaders in an untapped niche of the metaverse. The project plans on supplying holders with animated banners along with a matching profile character associated with their NFT. 

                    {/* </p>
                    <p>
                      The limited collection is paving the road through a new
                      area of the market.
                    </p>
                    <p>
                      they intend on taking over and becoming leaders in an
                      untapped niche of the metaverse.
                    </p>
                    <p>
                      The project plans on supplying holders with animated
                      banners
                    </p>
                    <p>
                      along with a corresponding/matching profile character
                      associated with their NFT. */}
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                {/* Removed here */}
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6  style={{fontFamily:"Cubano" }} className="m-0">WHAT DO I GET WHEN I MINT MY NFT? </h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }}>
                      {" "}
                      When you mint your animated meta bucks banner you will also be able to redeem your matching animated PFP redeemable through our website. You will also receive a still banner and PFP image file that will automatically be adjusted in size.
                    </p>
                    {/* <p>
                      {" "}
                      their free buckaroo profile picture NFT. This character
                      will resemble and match the buckroo inside your animated
                      banner.
                    </p> */}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6  style={{fontFamily:"Cubano" }} className="m-0">WEN MINT?</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }}>We will be launching in May.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header >
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6  style={{fontFamily:"Cubano" }} className="m-0">WHAT IS THE MINT PRICE?</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }}>The mint price will be 0.1 ETH for whitelist. The public mint price will be 0.125 ETH.</p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6  style={{fontFamily:"Cubano" }} className="m-0">IS THERE A DISCORD?</h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }} onClick={(e) => {
                      e.preventDefault();
                      window.open("https://discord.gg/themetabucks","_blank")
                      //window.location.href = "https://twitter.com/brommmyy";
                      }}>
                    Yes! Our discord is officially open to the public. Welcome to all our new Buckaroos!
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>
                    <div className="d-flex align--items-center">
                      <div className="w-auto">
                        <MdOutlineKeyboardArrowRight
                          style={{ fontSize: "36px", fontWeight: "900" }}
                        />
                      </div>
                      <h6 style={{fontFamily:"Cubano" }} className="m-0">
                      HOW DO I GET MORE UPDATES ABOUT THE META BUCKS?
                      </h6>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body className="px-5 py-0">
                    <p  style={{fontFamily:"Cubano" }}>
                    Follow our official Meta Bucks twitter account. All important information and updates will be provided there. We will never drop any stealth mints or surprise anyone. Only relate to our official links via twitter and website.
                    </p>
                    {/* <p>
                      be provided there.We will never drop any stealth mints or
                      surprise anyone.Only relate our offcial links via twitter
                      and website.
                    </p> */}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </section>
          {/* scrollbar */}
        </div>
      </div>
    </>
  );
}

export default Home;