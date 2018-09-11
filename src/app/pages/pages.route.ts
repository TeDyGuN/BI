import { Routes, RouterModule } from '@angular/router';
import {ProyectoComponent} from '@app/pages/proyecto/proyecto.component';
const pagesRoutes: Routes = [
    { path: 'proyectos', component: ProyectoComponent, data: { titulo: 'Panel de Administrador'}},
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
