import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {

  
  return (
    <Card className="card">
      <CardMedia
        component="img"
        height="300px"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${product.cost}
        </Typography>
        <Rating name="read-only" value={product.rating} readOnly/>
      </CardContent>
      <CardActions>
        <Button style={{ width: "100%" }} variant="contained" value={product._id} onClick={handleAddToCart}>
          <AddShoppingCartOutlined />ADD TO CART
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
