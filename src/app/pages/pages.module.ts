import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PAGES_ROUTES} from '@app/pages/pages.route';
import {ProyectoComponent} from '@app/pages/proyecto/proyecto.component';
import {SharedModule} from '@app/shared/shared.module';

@NgModule({
  imports: [
      CommonModule,
      PAGES_ROUTES,
      SharedModule,
  ],
  declarations: [
      ProyectoComponent
  ]
})
export class PagesModule { }
