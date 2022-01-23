import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


function Copyright() {

  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Flata Shop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  form: {
    display: 'flex',
    flexWrap: "wrap",
    flexDirection: 'row',
    width: '50%',
    height: '40%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    border: '4px'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ItemForm({currentUser}) {
  const classes = useStyles();
  const [newItem, setnewItem] = useState({
    name:"", 
    description:"", 
    price:0,
    quantity:0,
    image:"",
    seller_id: currentUser.id
  })

  function handleSubmit(e){
      e.preventDefault()
      console.log(newItem)
      fetch('/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newItem)
      })
        .then(res => res.json())
        .then(newItem => {
          console.log(newItem)
          // something to append to the UI the obj created
        });
     setnewItem({name:"",description:"", price:0,quantity:0,image:"",seller_id: 0})
     
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sell an item
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={14}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="name"
                value={newItem.name}
                onChange={(e) => setnewItem({...newItem, name: e.target.value})}
                autoFocus
              />
            </Grid> 
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="description"
                label="Description"
                name="description"
                value={newItem.description}
                onChange={(e) => setnewItem({...newItem, description: e.target.value})}
                autoComplete="description"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="price"
                label="price"
                type="number" 
                step="0.01"
                id="price"
                value={newItem.price}
                onChange={(e) => setnewItem({...newItem, price: e.target.value})}
              />
            </Grid>
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="quantity"
                label="Quantity"
                type="number"
                id="quantity"
                value={newItem.quantity}
                onChange={(e) => setnewItem({...newItem, quantity: e.target.value})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="image"
                label="Image"
                name="image"
                value={newItem.image}
                onChange={(e) => setnewItem({...newItem, image: e.target.value})}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            List the item
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
   );
}