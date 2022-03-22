import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SE2Page } from './se2.page';

const routes: Routes = [
  {
    path: '',
    component: SE2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SE2PageRoutingModule {}
