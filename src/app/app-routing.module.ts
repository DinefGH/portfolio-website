import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'overlay-menu', component: OverlayMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
