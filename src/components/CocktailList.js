import React from "react";
import Cocktail from './Cocktail'
export default function CocktailList({cocktails,loading}) {
  
 if(loading)
 {
 return <h2 className="section-title">"Loding"</h2>
}
if(cocktails.length<1)
{
  return <h2 className="section-title">
    no cocktail matched your search criteria
    </h2>
}
  // console.log(cocktails)
  return <section className="section">
    <h2 className="section-title">cocktails</h2>
    <div className="cocktails-center">
    <ul>
    {
      // console.log(cocktails)
      cocktails.map((cocktail,index)=><li key={index}><Cocktail cocktail={cocktail}/></li>)
    }
    </ul>
    </div>
  </section>

}
