import { NgModule } from '@angular/core';
import {
  MatCheckboxModule, MatToolbarModule, MatInputModule, MatTabsModule,
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  exports: [
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
  ]
})
export class MatComponentsModule { }
