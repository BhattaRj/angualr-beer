import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarDuration, SnackbarPosition } from '../common/enum';


@Injectable({
	providedIn: 'root'
})
export class NotifyService {
	constructor(
		private snackBar: MatSnackBar,
	) { }

	/**
	 * Display the error.
	 * @param error 
	 */
	public error(msg: string, duration?: number) {
		this.snackBar.open(msg, 'X', {
			duration: duration || SnackbarDuration.Error,
			panelClass: ['red-snackbar'],
			verticalPosition: SnackbarPosition.ErrorVerticalPosition,
			horizontalPosition: SnackbarPosition.ErrorHorizontalPosition,
		});
	}

	/**
	 * Notify the users on success.
	 * @param msg 
	 */
	public success(msg: string, duration?: number) {
		this.snackBar.open(msg, 'X', {
			duration: duration || SnackbarDuration.Success,
			panelClass: ['green-snackbar'],
			verticalPosition: SnackbarPosition.SuccessVerticalPosition,
			horizontalPosition: SnackbarPosition.SuccessErrorHorizontalPosition,
		});
	}

	/**
	 * Notify the users.
	 * @param msg 
	 */
	public notify(msg: string, duration?: number) {
		this.snackBar.open(msg, 'X', {
			duration: duration || SnackbarDuration.Notify,
			panelClass: ['blue-snackbar'],
			verticalPosition: SnackbarPosition.NotifyVerticalPosition,
			horizontalPosition: SnackbarPosition.NotifyHorizontalPosition
		});
	}

}
