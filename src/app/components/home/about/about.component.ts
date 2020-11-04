import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public fb: string = 'https://www.facebook.com/fzindumentaria/'; 
  public whatsapp: string = 'https://api.whatsapp.com/send?phone=+5493624569607'; 
  public ig: string = 'https://www.instagram.com/indumentaria.resistencia.women/?igshid=1d8dpsudv5m0x'; 
  constructor() { }

  ngOnInit(): void {
  }

}
