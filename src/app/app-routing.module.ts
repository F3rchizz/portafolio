import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ItemComponent } from './pages/item/item.component';


const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'item', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
