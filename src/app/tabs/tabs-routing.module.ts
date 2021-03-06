import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:  [
      {
      path: 'upload',
      children: [
        {
          path: '',
          loadChildren: () => import('../upload/upload.module').then( m => m.UploadPageModule)
        }
      ]
      },
      
      {
      path: '',
      redirectTo: 'tabs/upload',
      pathMatch: 'full'
      },
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
