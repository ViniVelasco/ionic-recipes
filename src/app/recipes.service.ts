import { Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'test',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG36JdvvcqZtJIKxgpj6nDiKOG9glfQsZUY-p5hFRl8k8tcveLlg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'test2',
      imageUrl: 'https://thepioneerwoman.com/wp-content/uploads/2017/05/marinated-chicken-salad-01.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}