import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Demo1Component } from './demos/demo1/demo1.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { Demo4Component } from './demos/demo4/demo4.component';
import { DemosComponent } from './demos/demos.component';

const routes: Routes = [
  {
    path: '',
    component: DemosComponent,
  },
  {
    path: 'demo1',
    component: Demo1Component,
  },
  {
    path: 'demo2',
    component: Demo2Component,
  },
  {
    path: 'demo3',
    component: Demo3Component,
  },
  {
    path: 'demo4',
    component: Demo4Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
