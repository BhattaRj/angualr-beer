import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBearListComponent } from './my-bear-list/my-bear-list.component';
import { BearDialogComponent } from './bear-dialog/bear-dialog.component';
import { MyBeerRoutingModule } from './my-beer.routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BeerComponentModule } from '../shared/beer-component.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		MyBearListComponent,
		BearDialogComponent
	],
	imports: [
		CommonModule,
		MyBeerRoutingModule,
		ReactiveFormsModule,
		MatInputModule,
		MatButtonModule,
		BeerComponentModule,
		MatIconModule,
		MatDialogModule
	]
})
export class MyBeerModule { }
