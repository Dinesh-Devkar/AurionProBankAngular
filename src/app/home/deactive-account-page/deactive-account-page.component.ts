import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deactive-account-page',
  templateUrl: './deactive-account-page.component.html',
  styleUrls: ['./deactive-account-page.component.css']
})
export class DeactiveAccountPageComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

 
  RefreshPage(){
    localStorage.clear();
    
    this.router.navigate([''])
    
  }
}
