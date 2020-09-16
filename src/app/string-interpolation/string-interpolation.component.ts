import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstName = "John"
  value = ''
  cor_bodega = "primary"
  constructor() { }

  ngOnInit(): void {
  }

  rola() {
    console.log('Rolou!')
  }

}
