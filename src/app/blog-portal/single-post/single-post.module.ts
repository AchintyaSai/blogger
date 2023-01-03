import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinglePostRoutingModule } from './single-post-routing.module';
import { SinglePostComponent } from './single-post.component';
import { UiComponentsModule } from 'src/app/ui-components/ui-components.module';


@NgModule({
  declarations: [
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    SinglePostRoutingModule,
    UiComponentsModule
  ]
})
export class SinglePostModule { }
