export enum SuccessMessageType {

}

export enum ErrorMessageType {

}

export enum PaginationDefaultType {
    DefaultLimit = 10,
    DefaulOffset = 0,
}

export enum SortOrderType {
    ASC = 'ASC',
    DESC = 'DESC'
}


export enum SnackbarDuration {
    Success = 10000,
    Error = 10000,
    Notify = 5000,
}

export enum SnackbarPosition {
    ErrorVerticalPosition = 'bottom',
    ErrorHorizontalPosition = 'right',
    SuccessVerticalPosition = 'bottom',
    SuccessErrorHorizontalPosition = 'right',
    NotifyVerticalPosition = 'bottom',
    NotifyHorizontalPosition = 'right'
}