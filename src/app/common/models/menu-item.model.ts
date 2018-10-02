export declare class MenuItemModel {
    id: string | number;
    title: string;
    target: string;
    iconClass: string;
    parentId: string | number;
    //isFavority: boolean;
    visible: boolean;
    children: Array<MenuItemModel>;
}
