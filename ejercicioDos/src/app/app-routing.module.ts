import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'vista', component: VistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
