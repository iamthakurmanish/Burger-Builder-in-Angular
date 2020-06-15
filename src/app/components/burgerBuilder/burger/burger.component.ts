import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  
  state: any = {
    ingredients: null,
    ingredientsPrice: null,
    totalPrice: 2,
    purchasable: false
  };
  addedIngredients: any;

  constructor() { }

  ngOnInit(): void {
    this.state.ingredients = {
      "salad": 0,
      "tomato": 0,
      "cheese": 0,
      //"onion": 0,
      "egg": 0
    };
    this.state.ingredientsPrice = {
      salad: 0.5,
      tomato: 0.3,
      cheese: 0.6,
      //onion: 0.4,
      egg: 1.0
    };

    this.getAddedIngredients();
  }

  getAddedIngredients() {
    this.addedIngredients = Object.keys( this.state.ingredients )
      .map( ingredientName => {
          return [...Array( this.state.ingredients[ingredientName] )].map( ( v, i ) => {
              return ingredientName;
          } );
      } )
      .reduce((prev, current) => {
          return prev.concat(current)
      }, []);
  }

  //Get value from output
  updateStateOutputCallback(event: any) {
    this.state = event.state;
    this.getAddedIngredients();
  }

}
