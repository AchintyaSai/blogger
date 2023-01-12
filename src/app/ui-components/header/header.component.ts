import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CommonUtilsService } from 'src/app/core/service/common-utils.service';
import { PageId } from 'src/app/shared/constants/app-constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router, private commonUtils : CommonUtilsService) { }

  ngOnInit(): void {
  }

  onClick(screenId : number)
  {
    switch(screenId) {
      case 1:
        this.commonUtils.navigateToPage(PageId.HOME_PAGE)
        break;
      case 2:
        this.commonUtils.navigateToPage(PageId.SINGLE_POST_PAGE)
        break;
      case 3:
        this.commonUtils.navigateToPage(PageId.ABOUT_PAGE)
        break;
      case 4:
        this.commonUtils.navigateToPage(PageId.CONTACT_US_PAGE)
        break
    }
  }
}
