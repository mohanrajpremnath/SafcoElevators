import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ElevatorsComponent } from './elevators/elevators.component';
import { HomeComponent } from './home/home.component';
import { ModernisationComponent } from './modernisation/modernisation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'elevators', component: ElevatorsComponent},
  {path: 'modernisation', component: ModernisationComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
