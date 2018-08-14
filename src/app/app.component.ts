import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  recipe: Recipe[] = [
    new Recipe('Pizza', ['Cheese', 'Tomato Sauce', 'Pepperoni', 'Pizza Dough'],['Put it together', 'Bake', 'Eat']),
    new Recipe('Chili bean', ['Bean'], ['Microwave', 'Eat']),
    new Recipe('Hummus', ['Chick Pea', 'spice things'], ['Dip chips', 'Eat'])
  ];
}
