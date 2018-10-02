import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItemModel } from '../models/menu-item.model';

@Component({
    selector: 'menu-tree-view',
    template: `
    <mat-nav-list *ngFor="let node of treeData">
        <div (click)="toggleChildren(node)" style="width:calc(100% - 45px); float:left;">
        <a mat-list-item *ngIf="node?.target == undefined" >{{node.title}}</a>
        <a mat-list-item *ngIf="node?.target?.length >  0" routerLink="{{node.target}}">{{node.title}}</a>
        </div>
        <div id="toggleMenu" (click)="toggleChildren(node)" [ngClass]="{ has_item:node.children?.length}">
            <mat-icon style="vertical-align: center;" *ngIf="node.children?.length && !node.visible">expand_more</mat-icon>
            <mat-icon style="vertical-align: center;" *ngIf="node.children?.length && node.visible">expand_less</mat-icon>
        </div>
        <div style="margin-left: 25px;">
            <menu-tree-view [treeData]="node.children" *ngIf="node.visible"></menu-tree-view>
        </div>
    </mat-nav-list>
  `,
    styles: [
        `
            #toggleMenu{
                float:right;
                width:41px;
                text-align:center;
                height: 32px;
                padding-top:4px;
                margin-top:4px;
                margin-bottom:8px;
                cursor: pointer;
            }
            .has_item {
                border-left: 1px solid silver;
            }
        `
    ]
})
export class TreeViewComponent {
    @Input() treeData: MenuItemModel[];

    constructor() {}

    toggleChildren(node: any) {
        if (node.target == null) {
            node.visible = !node.visible;
         }
    }
}


export interface ItemEventInterface {
    mouseEvent: MouseEvent;
    item: MenuItemModel;
}
