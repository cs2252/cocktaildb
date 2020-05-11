import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom'
export default function SingleCocktail() {
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState({})
  const {id}=useParams()
// const id=11007
  useEffect(() => {
    setLoading(true)
    const getCocktail=async ()=>{
      try {
        const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data= await response.json()
        
        if(data.drinks)
        {
          // console.log(data.drinks)
          const {
            strDrink:name,
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory:category,
            strGlass:glass,
            strInstructions:instructions,
           strIngredient1,
           strIngredient2,
           strIngredient3,
           strIngredient4,
           strIngredient5,

            
            
          }=data.drinks[0];
          // console.log(strIngredient1)
          const ingredients=[
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
           
          ]
          // console.log(ingredients)
          const newCocktail={
            id,
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          // console.log(newCocktail)
          setCocktail(newCocktail)
        }
        else
        {
            console.log("indise else block")
            setCocktail(null)
        }
      } catch (error) {
          console.log(error)
          setCocktail(null)
      }
      setLoading(false)
    }
    getCocktail(id)
    // setLoading(false)
  },[id])
  // console.log(cocktail)
  if(loading)
    return <h2 className="section-title">"loading"</h2>
  else if(!cocktail)
    return <h2 className="section-title">error fetching cocktail for id={id}</h2>
  else
    return <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home 
      </Link>
<h2 className="section-title">{ cocktail.name}</h2>
<div className="drink">
  <img src={cocktail.image} alt={cocktail.name}/>
  <div className="drink-info">
  <p>category :{ cocktail.category}</p>
<p>info :{cocktail.info}</p>
  <p>glass:{ cocktail.glass}</p>
  <p>instructions:{ cocktail.instructions}</p>
  <p>ingredients:{" "} 
  {/* { console.log(cocktail.ingredients)}  */}
  {
   
    cocktail.ingredients
    ?cocktail.ingredients.map((item,index)=>{
    return <span key={index}>{item}</span>
    })
    :null
  }
  </p>
  </div>
  </div>
    </section>
}
  