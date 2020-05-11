import React,{useState,useEffect} from "react";

import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
// import SearchForm from '../components/SearchForm'
export default function Home() {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("a")
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
     const getDrinks=async()=>{
      try{
        setLoading(true)
        const response=await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const data=await response.json()
        const {drinks} =data
        if(drinks)
        {
          const newCocktail=drinks.map(drink=>{
            return {
              id:drink.idDrink,
              name:drink.strDrink,
              image:drink.strDrinkThumb,
              info:drink.strAlcoholic,
              glasss:drink.strGlass
            }
          })
          setCocktails(newCocktail)
        }
        else
          setCocktails([])
      }
      catch(error){
        setCocktails([])
        // console.log("some error ")
        console.log(error.message)
      }
    setLoading(false)
  }
  getDrinks()
    
  }, [searchTerm])
// console.log(cocktails.id)
  return <main>
    <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
    <CocktailList loading={loading} cocktails={cocktails}/>
  </main>
}
