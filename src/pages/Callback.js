import React from "react";
import base64 from 'base-64'
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Qualified from "../components/Qualified";
import Grid from '@mui/material/Grid';
import loadingGif from '../components/images/Webp.net-gifmaker.gif';

function getGuild(token) {

    return fetch(`https://discordapp.com/api//users/@me/guilds`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(result => result.json())
        .then(response => {
            console.log(response)
            const targetGuild = response.find(guild => {
                return guild.name === process.env.REACT_APP_GUILD;
            });
            console.log("targetGuild", targetGuild);
            return targetGuild;
        })
        .catch(console.error);
}

function getGuildMember(token, guildId) {
    return fetch(`https://discordapp.com/api/users/@me/guilds/${guildId}/member`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(result => result.json())
        .then(response => {
            console.log("guildMember", response)
            // "12aaaa".includes("12a")
           // return response.roles.find(role => (process.env.REACT_APP_GUILD_ROLE,process.env.REACT_APP_GUILD_ROLE2,process.env.REACT_APP_GUILD_ROLE3).includes(role));
            return response.roles.find(role => process.env.REACT_APP_GUILD_ROLE.includes(role) ||  process.env.REACT_APP_GUILD_ROLE2.includes(role) ||  process.env.REACT_APP_GUILD_ROLE3.includes(role));
        })
        .catch(console.error);
}

function getUser(token) {
    return fetch(`https://discordapp.com/api/users/@me`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(result => result.json())
        .then(response => {
            console.log("user", response);
            return response;
        })
        .catch(console.error);
}

function authorizeCode(code) {
    return fetch(`https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + base64.encode(process.env.REACT_APP_CLIENT_ID + ':' + process.env.REACT_APP_CLIENT_SECRET),
        },
        body: `grant_type=authorization_code&code=${code}&redirect_uri=${process.env.REACT_APP_CALLBACK}`
    })
        .then(result => result.json())
}

function Callback() {
    const[loading,setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const history = useNavigate();
    useEffect(() => {
        if(user !== null){
            setTimeout(() => {
               setLoading(false); 
            }, 2000);
        }
    },[user]);

    useEffect(() => {
        const code = window.location.search.slice(6);
     
        if (!code)
            return document.getElementById('login').style.display = 'block';

        if (user!==null)
            return;

        authorizeCode(code)
            .then(response => {
                getGuild(response.access_token).then(guild => {
                    if (guild === undefined) {
                        console.log("No guild found");
                        setTimeout(()=>{
                            history('/error', { replace: true });
                        },3000)
                    }
                    getUser(response.access_token).then(user => {
                        if (user === undefined) {
                            console.log("No user found");
                            setTimeout(()=>{
                                history('/error', { replace: true });
                            },3000)
                        }
                        getGuildMember(response.access_token, guild.id, user.id).then(guildMember => {
                            if (guildMember === undefined) {
                                console.log("User does not have the correct role");
                                setTimeout(()=>{
                                    history('/error', { replace: true });
                                },3000)
                            }
                            setUser(user);
                        });
                    })
                });
            })
            .catch((e) => {
                console.log(e);
                setTimeout(()=>{
                    history('/error', { replace: true });
                },3000)
            });
    });

    return loading === true
    ? 
    <div>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <div style={{position: 'relative',width: '80%',maxWidth: '800px'}}>
                <img src={loadingGif} style={{display: 'block',width: '100%',height: 'auto'}} />
            </div>
        </Grid>
    </div>
    
    
   
    : <Qualified userName={user.username}/>;
}

export default Callback;