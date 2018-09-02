import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home-demo',
    templateUrl: './home-demo.component.html',
    styleUrls: ['./home-demo.component.scss']
})
export class HomeDemoComponent implements OnInit {
    color: string = 'primary';
    constructor() {}

    ngOnInit() {}
}
