import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se4Page } from './se4.page';

const routes: Routes = [
  {
    path: '',
    component: Se4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se4PageRoutingModule {}
