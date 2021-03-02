import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralChatPage } from './general-chat.page';

const routes: Routes = [
  {
    path: '',
    component: GeneralChatPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralChatRoutingModule {}
