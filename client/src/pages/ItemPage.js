import React from "react";
import ItemCard from "./ItemCard";
import Grid from '@mui/material/Grid';

function ItemPage({ items, users, addItem, currentuser,handleDeleteItem }) {
  return (
    <div>
      <Grid container spacing={8}>
      {items.map((item) => {
        return (
          <Grid item xs={3} mt={2} >
          <ItemCard
            
            handleDeleteItem ={handleDeleteItem}
            users={users}
            key={item.id}
            item={item}
            // name={item.seller.username}
            addItem={addItem}
            currentUser = {currentuser}
          />
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
}

export default ItemPage;
