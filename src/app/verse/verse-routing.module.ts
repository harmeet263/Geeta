import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersePage } from './verse.page';

const routes: Routes = [
  {
    path: '',
    component: VersePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersePageRoutingModule {}
