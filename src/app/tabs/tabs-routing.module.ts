import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'private-chat',
        loadChildren: () => import('../private-chat/private-chat.module').then(m => m.PrivateChatModule)
      },
      {
        path: 'general-chat',
        loadChildren: () => import('../general-chat/general-chat.module').then(m => m.GeneralChatModule)
      },
      {
        path: 'list-users',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/general-chat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/general-chat',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
