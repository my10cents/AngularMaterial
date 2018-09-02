export class ResponseModel<T> {
    public Items: Array<T> = [];
    public TotalRows: number;

    constructor() {
        this.TotalRows = 0;
    }
}
