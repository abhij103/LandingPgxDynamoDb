import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsPageComponent } from './tags-page/tags-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TagsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'',component:TagsPageComponent}])
  ]
})
export class TagsModule { }
