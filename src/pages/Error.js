import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import loadingGif from '../components/images/Webp.net-gifmaker.gif';
import loadingGif2 from '../components/images/gif2.gif';
import Grid from '@mui/material/Grid';

function Error() {
    const history = useNavigate();
    useEffect(() => {
        setTimeout(function () {
            history("/", { replace: true });
        }, 7000);
    })

    return <div>
        <Helmet>
            <style>{'body { background-color: black; }'}</style>
        </Helmet>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={3}>
                <img src={loadingGif2} />
            </Grid>
        </Grid>
    </div>;
}

export default Error;