import { Component, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  myVar={img:"../Assets/ad1.jpg"};
  images=[
    {img:"../Assets/ad1.jpg"},
    {img:"../Assets/ad1.jpg"},
    {img:"../Assets/ad1.jpg"},
  ];
  slideConfig = {  
    "slidesToShow": 3,  
    "slidesToScroll": 3,  
    "dots": true,  
    "infinite": true  
  };
  constructor() { }

  ngOnInit(): void {
  }

}
