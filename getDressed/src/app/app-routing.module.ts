import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },  { path: 'headwear', loadChildren: './headwear/headwear.module#HeadwearPageModule' },
  { path: 'shirts', loadChildren: './shirts/shirts.module#ShirtsPageModule' },
  { path: 'pants', loadChildren: './pants/pants.module#PantsPageModule' },
  { path: 'shoes', loadChildren: './shoes/shoes.module#ShoesPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

