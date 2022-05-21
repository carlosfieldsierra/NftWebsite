import React, { useEffect, useState ,useLayoutEffect} from "react";
import { useNavigate } from "react-router-dom";
import computer from './images/Asset 9.png';
import { Grid, Typography, Button, CircularProgress } from "@mui/material";
import { Helmet } from 'react-helmet';
import logo from './images/jinx card verification screen logos-13.png'
import './qualified.css';
import AnimatedText from 'react-animated-text-content';
import swirlGif from './images/drive.png';
import Design from './components/design/design.component';
import Reward from './pages/home/homepage.component';
import loadingGif1 from '../components/images/gif1.gif';
import Typical from 'react-typical'
import TypeAnimation from 'react-type-animation';

function Qualified(props) {
    const history = useNavigate();
    const [step, setStep] = useState(0);

    useLayoutEffect(() => {
        if (window.innerWidth < 600){
            setStep(step + 1);
            setTimeout(function () {
            // setStep(step+2);
            setTimeout(function () {
                setStep(step+3);
            }, 5000);
        }, 8400);
        }
    }, [])

    useEffect(()=>{
        if(step===1){
            setTimeout(()=>{
               setStep(3)
            },13400)
        }
    },[step])

    // useEffect(()=>{
    //     if(step===3){
    //         setTimeout(()=>{
    //             history('/', { replace: true });
    //         },15000)
    //     }
    // },[step])

    
    const step0 = <div className="container">
        <img src={computer} className="image" />
        <img src={logo} className="logoCom" />
        <div className="label1">
            <Grid container >
                <Grid item style={{ flexGrow: "1" }}>
                    <Typography variant="button" style={{ fontFamily: "MyFont2", color: "black",fontSize:"2.2vh" }} gutterBottom>
                        USERNAME:
                    </Typography>
                </Grid>
                <Grid xs={6} item>
                    <div className="container1">
                        <div className="box">    
                            {/* <Typical
                                steps={["        ",1500,props.userName, 12000]}
                                loop={1}
                                wrapper="p"
                            /> */}
                            {/* <div style={{ width: '20em',backgrounColor:'black' }} > */}
                            <TypeAnimation
                                sequence={[1000,props.userName, 12000]}
                                repeat={1}
                                wrapper="p"
                                cursor={false}
                            />
                            {/* </div> */}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className="label2">
            <Grid container>
                <Grid item style={{ flexGrow: "1" }}>
                    <Typography variant="button" style={{ fontFamily: "MyFont2", color: "black",fontSize:"2.2vh" }} gutterBottom>
                        PASSWORD:
                    </Typography>
                </Grid>
                <Grid xs={6} item>
                    <div className="container2">
                    <div className="box">
                        {/* <p style={{color:'black'}}>__</p> */}
                        
                        {/* <Typical
                            steps={["        ",3500,'●●●●●●', 12000]}
                            loop={1}
                            wrapper="p"
                        /> */}
                        <TypeAnimation
                                sequence={[3500,'●●●●●●', 12000]}
                                repeat={1}
                                wrapper="p"
                                cursor={false}
                        />
                    </div>
                    </div>
                </Grid>
            </Grid>
        </div>
        <div style={{borderRadius:100}} className="label3">
            <Button variant="contained" style={{ background: "black",borderRadius:100,fontFamily:'MyFont2' }} onClick={() => {
                setStep(step + 1);
                
                // setTimeout(function () {
                //     setStep(step+1);
                //     setTimeout(function () {
                //         setStep(step+1);
                //     }, 5000);
                // }, 8400);
            }}>Login</Button>
        </div>
    </div>

    const step1 = <div className="container">
        <img src={loadingGif1} className="image" />
    </div>

    const step2 = <div className="container">
        <img src={computer} className="image" />
        {/*<img src={swirlGif} className="overlay3"/>*/}
        <div className="overlay3"><CircularProgress /></div>
    </div>

    const step3 = <Reward nameInput={props.userName}/>

    return step===3 
        ?
        step3
        :(
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    {step === 0 ? step0 : step === 1 ? step1 : step2}
                </Grid>
            </div>
        );
}

export default Qualified;