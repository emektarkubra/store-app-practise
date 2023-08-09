import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";
import { SignContext } from "../context/SignContext";
import { StyledProductCard } from "./styled/ProductCard.styled";

export default function ProductCard({ product, id }) {
  const { onlineUser } = useContext(SignContext);
  const { handleAddFavorites } = useContext(FavoriteContext);

  return (
    <>
      <StyledProductCard className="card">
        <Link to={`/products/product/${id}`}>
          <img src={product.image} className="card-img" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description.substring(0, 40)}..</p>
          <p className="card-price-text">{product.price} €</p>
          {onlineUser !== null ? (
            <button onClick={() => handleAddFavorites(product)} className="btn">
              Fav
            </button>
          ) : null}
        </div>
      </StyledProductCard>
    </>
  );
}
