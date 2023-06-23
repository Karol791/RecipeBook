import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is simply a test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg',[
          new Ingredient('Meat',1),
          new Ingredient('French Fries',20)
        ]),
        new Recipe('Another Test recipe', 'This is simply a test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg',[
          new Ingredient('Buns',2),
          new Ingredient('Bread',1)
        ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(id: number){
        return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
      
}