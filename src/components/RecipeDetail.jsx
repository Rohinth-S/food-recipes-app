function RecipeDetail({ recipe, onBack }) {
  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={onBack}>← Back</button>
      <div className="recipe-content">
        <img src={recipe.image} alt={recipe.name} className="recipe-detail-image" />
        <div className="recipe-info-detail">
          <h1>{recipe.name}</h1>
          <p className="cuisine">{recipe.cuisine}</p>
          <div className="recipe-stats">
            <span>Servings: {recipe.servings}</span>
            <span>Calories: {recipe.caloriesPerServing}</span>
            <span>Difficulty: {recipe.difficulty}</span>
          </div>
          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients?.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <ol>
              {recipe.instructions?.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
