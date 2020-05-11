import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({cocktail}) {
//  console.log(cocktail.id)
return <article className="cocktail">
  <div className="image-container">
    <img src={cocktail.image} alt={cocktail.name}/>
  </div>
  <div className="cocktail-footer">
<h3>{cocktail.name}</h3>
<h4>{cocktail.glasss}</h4>
<h4>{cocktail.id}</h4>
<p>{cocktail.info}</p>
<Link to={`/SingleCocktail/${cocktail.id}`} className="btn 
btn-primary btn-details">
  details
</Link>
  </div>
</article>
}
