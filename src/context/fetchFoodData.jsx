export const fetchFoodData = async (searchTerm) => {
    const appId = "a054b204";
    const appKey = "58b51be60f295c9b0ba3bcaa45057a85";
    
    const url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(searchTerm)}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data from Edamam API");
      
      const data = await response.json();
      // Map data and round nutrient values to integers
      const foodItems = data.hints.map(item => ({
        name: item.food.label,
        calories: Math.round(item.food.nutrients.ENERC_KCAL || 0),
        protein: Math.round(item.food.nutrients.PROCNT || 0),
        fat: Math.round(item.food.nutrients.FAT || 0),
        carbs: Math.round(item.food.nutrients.CHOCDF || 0)
      }));
      
      return foodItems;
    } catch (error) {
      console.error("Error:", error);
    }
  };  