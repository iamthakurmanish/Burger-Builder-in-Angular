import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-burger-ingredient',
  templateUrl: './burger-ingredient.component.html',
  styleUrls: ['./burger-ingredient.component.css']
})
export class BurgerIngredientComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
    
  }

}