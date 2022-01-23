
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@mui/icons-material/AddCircle';


// function ItemCard({item}) {
//     return (
//         <div>
//             <h1>{item.name}</h1>
//         </div>
//     )
// }

// export default ItemCard

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      height: '25vw',
      boxShadow:  "0 7px 30px -10px rgba(150,170,180,0.5)",
      color:"#1e88e5"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
      marginTop:'1%',// 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    }
    // avatar: {
    //   backgroundColor: red[500],
    // },
  }));
  
  export default function ItemCard({item, name,addItem}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    
    return (
      <Card className={classes.root}>
        <CardHeader 
          action={
            <IconButton aria-label="settings">
            </IconButton>
          }
          
          title={item.name}
          subheader= {`Seller: ${name}` }
        />
        <CardMedia
          className={classes.media}
          image={item.image}
          title="seller:"
        />
        <CardContent>
          <Typography variant="body2" color="#1e88e5" component="p">
            Category: {item.category}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton onClick={() => addItem(item)} aria-label="add to cart">
         < AddCircleIcon/>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Price:${item.price}</Typography>
            <Typography paragraph>
              No description Added
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }