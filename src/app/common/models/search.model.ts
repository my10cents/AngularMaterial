import { RequestModel } from './request.model';

export class SearchModel extends RequestModel {
    filter: string = '';
    onlyActive: boolean = true;

    public toDefault(value: string): this {
        let toReturn: this;
        toReturn.pageNumber = 1;
        toReturn.pageSize = 10;
        toReturn.filter = value;
        toReturn.onlyActive = true;
        return toReturn;
    }
}
