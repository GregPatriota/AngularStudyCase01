import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  food_n: any
  food_p: number

  food_menu = [
    {name: "Hamburguer", price: 15.01}, 
    {name: "French Fries", price: 8.99}, 
    {name: "Nuggets", price: 9.99} 
  ]

  ngOnInit(): void {
  }

  add_to_list() {
    this.food_menu.push({name: this.food_n, price: this.food_p})
  }

}
