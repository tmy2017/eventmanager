import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {
  FormioResource,
  FormioResourceRoutes,
  FormioResourceConfig,
  FormioResourceService
} from 'angular-formio/resource';
import { RegisterModule } from './register/register.module';
import { ResourceComponent } from './resource/resource.component';
import { ViewComponent } from './view/view.component';

const eventRoutes: Routes = FormioResourceRoutes({
  resource: ResourceComponent,
  view: ViewComponent
});
eventRoutes[2].children.push({
  path: 'registrations',
  loadChildren: () => RegisterModule
});

@NgModule({
  declarations: [ResourceComponent, ViewComponent],
  imports: [
    CommonModule,
    FormioResource,
    RouterModule.forChild(eventRoutes)
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      name: 'event',
      form: 'event'
    }}
  ]
})
export class EventModule { }
