import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Beer } from 'src/app/models/beer';
import { BeerService } from 'src/app/services/beer.service';
import { NotifyService } from 'src/app/services/notify.service';

@Component({
	selector: 'app-bear-dialog',
	templateUrl: './bear-dialog.component.html',
	styleUrls: ['./bear-dialog.component.scss']
})
export class BearDialogComponent {
	public beer: Beer = new Beer({});;
	public saving: boolean = false;
	form!: FormGroup;
	public image_url = './assets/beer.png';
	constructor(
		private dialogRef: MatDialogRef<BearDialogComponent>,
		private notifyService: NotifyService,
		private beerService: BeerService,
		private fb: FormBuilder,
		@Inject(MAT_DIALOG_DATA) public data: Beer
	) { }

	ngOnInit() {
		this.initForm();
	}

	initForm(): void {
		/** Create form */
		this.form = this.fb.group({
			name: new FormControl('', [Validators.required]),
			tagline: new FormControl('', [Validators.required]),
			description: new FormControl('', [Validators.required]),
		});
	}

	/** validation method validation */
	get name() { return this.form.get('name')!; }
	get tagline() { return this.form.get('tagline')!; }
	get description() { return this.form.get('description')!; }

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			this.notifyService.error("Please fill all required informatin !!.")
			return;
		}

		this.saving = true;
		let beer: Beer = this.form.value;
		beer.image_url = this.image_url;		
		this.dialogRef.close(beer);
	}
}
