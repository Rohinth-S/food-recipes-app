import { useState, useEffect } from 'react'
import './App.css'
import RecipeCard from './components/RecipeCard'
import RecipeDetail from './components/RecipeDetail'

function App() {
  const [recipes, setRecipes] = useState([])
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes?limit=110&skip=0')
      const data = await response.json()
      setRecipes(data.recipes)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching recipes:', error)
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="loading">Loading recipes...</div>
  }

  if (selectedRecipe) {
    return (
      <div className="app">
        <RecipeDetail recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      </div>
    )
  }

  return (
    <div className="app">
      <h1>Recipe Collection</h1>
      <div className="recipes-grid">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
