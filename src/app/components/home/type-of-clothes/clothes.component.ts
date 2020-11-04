import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { transcode } from 'buffer';

@Component({
  selector: 'app-offers',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css'],
  animations: [ 
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })), 
      state('hide', style({
        opacity: 0
      })),

      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]), 
  ] 
})
export class ClothesComponent implements OnInit {
  public focus: number = 0; 
  public show: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }

  get stateName() {
    return this.show ? 'show' : 'hide'; 
  }

  toggle() {
    this.show = !this.show; 
  }

}
