import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { CompteHomeComponent } from './components/dashboard/compte/compte-home/compte-home.component';
import { ListCompteComponent } from './components/dashboard/compte/list-compte/list-compte.component';
import { ListOperationsComponent } from './components/dashboard/compte/list-operations/list-operations.component';
import { VersBeneficaireComponent } from './virements/vers-beneficaire/vers-beneficaire.component';
import { VersCompteComponent } from './virements/vers-compte/vers-compte.component';
import { PretsEnCoursComponent } from './prets/prets-en-cours/prets-en-cours.component';
import { NouveauPretsComponent } from './prets/nouveau-prets/nouveau-prets.component';
import { RegistreComponent } from './registre/registre.component';
import { RegistreFormComponent } from './registre-form/registre-form.component';
import { VirementMasseComponent } from './virement-masse/virement-masse.component';
import { ReleveIdentificationComponent } from './releve-identification/releve-identification.component';
import { ReleveImpressionComponent } from './releve-impression/releve-impression.component';
import { NouveauCompteComponent } from './components/dashboard/compte/nouveau-compte/nouveau-compte.component';
import { CommanderComponent } from './carte-chequiers/commander/commander.component';
import { FaireOpposerComponent } from './carte-chequiers/faire-opposer/faire-opposer.component';
import { ReseauxGabComponent } from './reseaux-gab/reseaux-gab.component';
import { MessagerieComponent } from './messagerie/messagerie.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'registre',
    component: RegistreComponent
  },
  {
    path: 'registre-form',
    component: RegistreFormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: CompteHomeComponent,
        children: [
          {
            path: '',
            component: ListCompteComponent
          },
          {
            path: 'operations',
            component: ListOperationsComponent
          },
          {
            path:'beneficaire',
            component: VersBeneficaireComponent
          },
          {
            path: 'compte',
            component: VersCompteComponent
          },
          {
            path: 'prets',
            component: PretsEnCoursComponent
          },
          {
            path: 'nouveau',
            component: NouveauPretsComponent
          },
          {
            path: 'masse',
            component: VirementMasseComponent

          },
          {
            path: 'releve',
            component: ReleveIdentificationComponent
          },
          {
            path: 'impression',
            component: ReleveImpressionComponent
          },
          {
            path: 'nouveau-compte',
            component: NouveauCompteComponent
          },
          {
            path: 'commander',
            component: CommanderComponent
          },
          {
            path: 'faire',
            component: FaireOpposerComponent
          },
          {
            path: 'reseaux',
            component: ReseauxGabComponent
          },
          {
            path: 'messagerie',
            component: MessagerieComponent
          }
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
