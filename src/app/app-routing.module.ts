import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
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

import { ReleveIdentificationComponent } from './releve-identification/releve-identification.component';
import { ReleveImpressionComponent } from './releve-impression/releve-impression.component';
import { NouveauCompteComponent } from './components/dashboard/compte/nouveau-compte/nouveau-compte.component';
import { CommanderComponent } from './carte-chequiers/commander/commander.component';
import { FaireOpposerComponent } from './carte-chequiers/faire-opposer/faire-opposer.component';
import { ReseauxGabComponent } from './reseaux-gab/reseaux-gab.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { DeviseComponent } from './devise/devise.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReinitiationMotDePasseComponent } from './reinitiation-mot-de-passe/reinitiation-mot-de-passe.component';
import { CodeSmsComponent } from './code-sms/code-sms.component';
import { NouveauMotDePasseComponent } from './nouveau-mot-de-passe/nouveau-mot-de-passe.component';
import { CarteComponent } from './carte/carte.component';
import { CommanderCarteComponent } from './commander-carte/commander-carte.component';
import { AddDeviseComponent } from './devise/add-devise/add-devise.component';
import { CarteOppositionComponent } from './carte-opposition/carte-opposition.component';
import { ChequiersComponent } from './chequiers/chequiers.component';
import { NouveauBeneficiaireComponent } from './virements/nouveau-beneficiaire/nouveau-beneficiaire.component';
import { DetailPretsComponent } from './prets/detail-prets/detail-prets.component';
import { DetailPrets2Component } from './prets/detail-prets2/detail-prets2.component';
import { NouveauVirementComponent } from './virements/nouveau-virement/nouveau-virement.component';

import { DepotTermeComponent } from './depot-terme/depot-terme.component';
import { RemiseChequeComponent } from './remise-cheque/remise-cheque.component';

import { MessageContenuComponent } from './message-contenu/message-contenu.component';
import { ReseauxDetailsComponent } from './reseaux-details/reseaux-details.component';
import { BeneficiaireComponent } from './beneficiaire/beneficiaire.component';
import { BeneficiaireNouveauComponent } from './beneficiaire-nouveau/beneficiaire-nouveau.component';
import { MessageEnvoyeContenuComponent } from './message-envoye-contenu/message-envoye-contenu.component';
import { MiseEnGardeComponent } from './components/footer/mise-en-garde/mise-en-garde.component';
import { MentionLegaleComponent } from './components/footer/mention-legale/mention-legale.component';
import { FaqComponent } from './components/footer/faq/faq.component';
import { InfoSecuriteComponent } from './components/footer/info-securite/info-securite.component';




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
    path: 'presentation',
    component: PresentationComponent

  },
  {
    path: 'abonnement',
    component: AbonnementComponent
  },
  {
    path: 'reinitialiser-mot-de-passe',
    component: ReinitiationMotDePasseComponent
  },
  {
    path: 'code-sms',
    component: CodeSmsComponent

  },
  {
    path: 'nouveau-mot-de-passe',
    component: NouveauMotDePasseComponent
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
            path: 'beneficaire',
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
            path: 'detail-pret',
            component:DetailPretsComponent
          },
          {
            path: 'detail-pret2',
            component:DetailPrets2Component
          }
          ,
          {
            path: 'nouveau',
            component: NouveauPretsComponent
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
          },
          {
            path: 'contenu-message',
            component: MessageContenuComponent
          },
          {
            path: 'message-envoye',
            component: MessageEnvoyeContenuComponent
          },
          {
            path: 'devise',
            component: DeviseComponent
          },
          {
            path: 'add-devise',
            component: AddDeviseComponent
          },
          {
            path: 'carte',
            component: CarteComponent
          },
          {
            path: 'commander-carte',
            component: CommanderCarteComponent
          },
          {
            path: 'carte-opposition',
            component: CarteOppositionComponent
          },
          {
            path: 'cheque',
            component: ChequiersComponent
          },
          {
            path: 'nouveau-beneficiaire',
            component: NouveauBeneficiaireComponent
          },
          {
            path: 'nouveau-virement',
            component: NouveauVirementComponent
          },
          {
            path: 'depot-terme',
            component: DepotTermeComponent
           },
           {
             path: 'remise-cheque',
             component: RemiseChequeComponent
           },
           {
             path: 'reseaux-details',
             component: ReseauxDetailsComponent
           },
           {
             path: 'liste-beneficiaire',
             component: BeneficiaireComponent
           },
           {
             path: 'beneficiaire-nouveau',
             component: BeneficiaireNouveauComponent
           },
           {
             path:'mise-en-garde',
             component:MiseEnGardeComponent
           },
           {
             path:'mention-legale',
             component:MentionLegaleComponent
           },
           {
             path:'faq',
             component:FaqComponent
           },
           {
             path:'info-securite',
             component:InfoSecuriteComponent
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
