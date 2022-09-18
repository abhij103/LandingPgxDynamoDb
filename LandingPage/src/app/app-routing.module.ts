import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'tags',
    loadChildren: () => import('./modules/tags/tags.module').then(m => m.TagsModule),
  },
  {
    path: 'tables',
    loadChildren: () => import('./modules/tables/tables.module').then(m => m.TablesModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
