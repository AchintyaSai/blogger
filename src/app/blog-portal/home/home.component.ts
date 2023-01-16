import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/core/service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private homeService : HomeService) { }

  ngOnInit(): void {
  }

  getPosts()
  {
    this.homeService.getPosts().subscribe(data => {

    }, err => {
      
    })
  }
}
