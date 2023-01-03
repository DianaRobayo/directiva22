import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { Directiva22Component } from './directiva22.component';



@NgModule({
  declarations: [
    Directiva22Component
  ],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,
    MatDialogModule,
    MatStepperModule,
    SharedModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    Directiva22Component
  ]
})
export class Directiva22Module { }
