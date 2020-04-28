import { Component, OnInit } from "@angular/core";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipes.service";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Schnitzel",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG"
    ),
    new Recipe(
      "Burger",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg"
    ),
  ];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
