import { NgModule } from '@angular/core';
//import {MatStepperModule} from '@angular/material/stepper';


import {
    MatDatepickerModule, MatNativeDateModule, MatSidenavModule, MatToolbarModule,
    MatTableModule, MatFormFieldModule, MatPaginatorModule, MatButtonModule, MatInputModule,
    MatSelectModule, MatIconModule, MatExpansionModule, MatListModule, MatTabsModule,
    MatTooltipModule, MatMenuModule, MatDialogModule, MatCheckboxModule, DateAdapter,
    MatAutocompleteModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    

} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatRadioModule} from '@angular/material/radio';





@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatTabsModule,
        MatTooltipModule,
        MatMenuModule,
        MatDialogModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatCardModule,
        LayoutModule,
        MatStepperModule,
        CdkStepperModule,
        MatRadioModule,
        
       

       
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatTabsModule,
        MatTooltipModule,
        MatMenuModule,
        MatDialogModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatGridListModule,
        MatCardModule,
        LayoutModule,
        


    ]
})

export class MaterialAppModule { }
