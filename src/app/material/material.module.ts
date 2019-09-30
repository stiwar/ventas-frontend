import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule, MatPaginatorModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSortModule, MatPaginatorIntl, MatCardModule, MatSnackBarModule } from '@angular/material';
import { MatPaginatorImpl } from '../_shared/mat-paginator';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: MatPaginatorImpl}
  ]
})
export class MaterialModule { }
