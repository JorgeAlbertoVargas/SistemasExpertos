import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SE1Page } from './se1.page';

const routes: Routes = [
  {
    path: '',
    component: SE1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SE1PageRoutingModule {}
