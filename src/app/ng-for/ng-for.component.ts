import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  food_menu = [
    {name: "Hamburguer", price: 15.01}, 
    {name: "French Fries", price: 8.99}, 
    {name: "Nuggets", price: 9.99} 
  ]

  ngOnInit(): void {
  }

}
