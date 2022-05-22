import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
    container :{
        height : '350px',
        margin : '10px',
        borderRadius : 10,
        border : '1px solid #d3cede',
        display : 'flex',
        alignItems : 'center',
        flexDirection : 'column',
        '& > *' : {
            padding : '0 5px 5px 5px'
        },
        
        
    },
    image: {
        height : '150px',
        width : '100%',
        objectFit : 'cover',
        borderRadius : '10px 10px 0 0'
    },
    text : {
        color : '#878787',
        fontSize : 12            
    },
    heading :{
        fontSize : 18,
        fontWeight : 600,
        textAlign : 'center'
    },
    detail : {
        fontSize : 15,
        wordBreak : 'break-word'
    }
})
const Post = (props)=>{
    const classes = useStyles();
    const addElipsis = (str,limit) => {
        return str.length > limit ? str.substring(0,limit) + "..." : str 
        
    }
    return(
        <Box className={classes.container}>
            <img className={classes.image} src={props.urlToImage} alt="alt"/>
            
            <Typography className={classes.heading}>
                {addElipsis(props.title,40)}
            </Typography>
            <Typography className={classes.text}>
                {props.source}
            </Typography>
            <Typography className={classes.detail}>
                {addElipsis(props.description,100)}
            </Typography>
        </Box>
    )
}

export default Post;