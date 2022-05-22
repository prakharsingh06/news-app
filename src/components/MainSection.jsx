import { Grid, Typography, Box } from "@mui/material";
import Categories from "./Categories";
import { useState } from "react";
import Posts from "./Posts";

const MainSection = ({text,setText, flag, setFlag})=> {

    const [currentCategory, setCurrentCategory] = useState('general');

    return (
            <>
            <Grid container>
            <Grid style={{borderRight:'2px solid black', borderBottom : '2px solid black'}} item lg={2} xs={12} sm={2}>
                <Categories flag={flag} setFlag={setFlag} setText={setText} currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
            </Grid>
            <Grid style={{maxHeight:'90vh', overflowY:'scroll'}} container item lg={10} xs={12} sm={10}>
                
                <Posts text={text} currentCategory={currentCategory}/>
            </Grid>
        </Grid>
        </>
    )
}

export default MainSection;