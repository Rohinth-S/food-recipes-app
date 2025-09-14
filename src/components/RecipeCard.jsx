function RecipeCard({ recipe, onClick }) {
  return (
    <div className="recipe-card" onClick={onClick}>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <div className="recipe-info">
        <h3 className="recipe-name">{recipe.name}</h3>
        <p className="recipe-cuisine">{recipe.cuisine}</p>
      </div>
    </div>
  )
}

export default RecipeCard
