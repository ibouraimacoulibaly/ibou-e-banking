import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';

import { InternationalPhoneNumberModule } from 'ngx-international-phone-number';




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
    ReleveImpressionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    AppRoutingModule,
    FormsModule,
    InternationalPhoneNumberModule,
    MatButtonModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
