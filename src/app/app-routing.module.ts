import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { IndexComponent } from './index/index.component';
import { IndexOverviewComponent } from './index-overview/index-overview.component';
import { ImprintSiteComponent } from './imprint-site/imprint-site.component';

const routes: Routes = [
  { path: '', component: IndexOverviewComponent},
  { path: 'imprint-site', component: ImprintSiteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
