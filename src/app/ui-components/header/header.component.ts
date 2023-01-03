import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onClick(screenId : number)
  {
    switch(screenId) {
      case 1:
        this.router.navigateByUrl("home");
        break;
      case 2:
        this.router.navigateByUrl("single-post");
        break;
      case 3:
        this.router.navigateByUrl("about");
        break;
      case 4:
        this.router.navigateByUrl("contact-us");
        break
    }
  }
}
