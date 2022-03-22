import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Se3Page } from './se3.page';

const routes: Routes = [
  {
    path: '',
    component: Se3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Se3PageRoutingModule {}
