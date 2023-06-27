import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;
    // private recipes: Recipe[] = [
    //     new Recipe('A Test recipe', 'This is simply a test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg',[
    //       new Ingredient('Meat',1),
    //       new Ingredient('French Fries',20)
    //     ]),
    //     new Recipe('Another Test recipe', 'This is simply a test', 'https://images-gmi-pmc.edge-generalmills.com/1e24b5e7-e3e3-43ce-b737-a2215397f006.jpg',[
    //       new Ingredient('Buns',2),
    //       new Ingredient('Bread',1)
    //     ])
    //   ];

    private recipes: Recipe[] = [];
    
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
      
      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice())
      }

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}