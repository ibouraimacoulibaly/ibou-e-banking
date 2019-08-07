import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {NgxPrintModule} from 'ngx-print';

import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';
import { AgmCoreModule } from '@agm/core';
import { FileSelectDirective } from 'ng2-file-upload';
import {MatDialogModule} from "@angular/material";





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialAppModule } from './material.modules';
import { CompteHomeComponent } from './components/dashboard/compte/compte-home/compte-home.component';
import { ListCompteComponent } from './components/dashboard/compte/list-compte/list-compte.component';
import { ListOperationsComponent } from './components/dashboard/compte/list-operations/list-operations.component';
import { VersCompteComponent } from './virements/vers-compte/vers-compte.component';
import { VersBeneficaireComponent } from './virements/vers-beneficaire/vers-beneficaire.component';
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
import { DeviseComponent } from './devise/devise.component';
import { PresentationComponent } from './presentation/presentation.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { ReinitiationMotDePasseComponent } from './reinitiation-mot-de-passe/reinitiation-mot-de-passe.component';
import { CodeSmsComponent } from './code-sms/code-sms.component';
import { NouveauMotDePasseComponent } from './nouveau-mot-de-passe/nouveau-mot-de-passe.component';
import { CarteComponent } from './carte/carte.component';
import { CommanderCarteComponent } from './commander-carte/commander-carte.component';
<<<<<<< HEAD
import { AddDeviseComponent } from './devise/add-devise/add-devise.component';
=======
import { CarteOppositionComponent } from './carte-opposition/carte-opposition.component';
import { ChequiersComponent } from './chequiers/chequiers.component';
>>>>>>> 0cf6fac7cf59aaf9c951cdcc60358b679285d00e





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    CompteHomeComponent,
    ListCompteComponent,
    ListOperationsComponent,
    VersCompteComponent,
    VersBeneficaireComponent,
    PretsEnCoursComponent,
    NouveauPretsComponent,
    RegistreComponent,
    RegistreFormComponent,
    VirementMasseComponent,
    ReleveIdentificationComponent,
    ReleveImpressionComponent,
    NouveauCompteComponent,
    CommanderComponent,
    FaireOpposerComponent,
    ReseauxGabComponent,
    MessagerieComponent,
    DeviseComponent,
    FileSelectDirective,
    PresentationComponent,
    AbonnementComponent,
    ReinitiationMotDePasseComponent,
    CodeSmsComponent,
    NouveauMotDePasseComponent,
    CarteComponent,
    CommanderCarteComponent,
<<<<<<< HEAD
    AddDeviseComponent,
=======
    CarteOppositionComponent,
    ChequiersComponent,
>>>>>>> 0cf6fac7cf59aaf9c951cdcc60358b679285d00e
    

 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    AppRoutingModule,
    FormsModule,
    InternationalPhoneNumberModule,
    MatButtonModule,
    NgxPrintModule,
    AgmCoreModule.forRoot({
     //apiKey: '8110477bc4msha7acb11d1bf06b4p1bc2cfjsn2595b3a79a31',
      libraries: ['places']
    }),
    MatDialogModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
