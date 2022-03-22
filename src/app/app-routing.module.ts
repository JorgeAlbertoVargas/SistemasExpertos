import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadChildren: () => import('./Paginas/principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'se1',
    loadChildren: () => import('./Paginas/se1/se1.module').then( m => m.SE1PageModule)
  },
  {
    path: 'se2',
    loadChildren: () => import('./Paginas/se2/se2.module').then( m => m.SE2PageModule)
  },
  {
    path: 'se3',
    loadChildren: () => import('./Paginas/se3/se3.module').then( m => m.Se3PageModule)
  },
  {
    path: 'se4',
    loadChildren: () => import('./Paginas/se4/se4.module').then( m => m.Se4PageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
