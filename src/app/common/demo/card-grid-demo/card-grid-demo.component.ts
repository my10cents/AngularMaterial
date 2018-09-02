import { Component, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-card-grid-demo',
    templateUrl: './card-grid-demo.component.html',
    styleUrls: ['./card-grid-demo.component.scss']
})
export class CardGridDemoComponent implements OnInit {
    public cols: number = 3;

    constructor(private bo: BreakpointObserver) {}

    //ideia base: https://brianflove.com/2017/05/03/responsive-angular/
    // using: @angular/flex-layout
    //
    //I use @angular/cdk
    //
    ngOnInit() {
        const grid = new Map([
            // [Breakpoints.Handset         , 1],
            [Breakpoints.HandsetPortrait, 1], // (max-width: 599px) and (orientation: portrait)
            [Breakpoints.HandsetLandscape, 2], // (max-width: 959px) and (orientation: landscape)
            // [Breakpoints.Tablet          , 2],
            [Breakpoints.TabletPortrait, 2], // (min-width: 600px) and (max-width: 839px) and (orientation: portrait
            [Breakpoints.TabletLandscape, 3], // (min-width: 960px) and (max-width: 1279px) and (orientation: landscape)
            // [Breakpoints.Web             , 3],
            [Breakpoints.WebPortrait, 3], // (min-width: 840px) and (orientation: portrait)
            [Breakpoints.WebLandscape, 4] // (min-width: 1280px) and (orientation: landscape)
        ]);

        let start: number;

        this.bo
            .observe([
                // Breakpoints.Handset
                Breakpoints.HandsetPortrait, // (max-width: 599px) and (orientation: portrait)
                Breakpoints.HandsetLandscape, // (max-width: 959px) and (orientation: landscape)
                // Breakpoints.Tablet
                Breakpoints.TabletPortrait, // (min-width: 600px) and (max-width: 839px) and (orientation: portrait
                Breakpoints.TabletLandscape, // (min-width: 960px) and (max-width: 1279px) and (orientation: landscape)
                // Breakpoints.Web
                Breakpoints.WebPortrait, // (min-width: 840px) and (orientation: portrait)
                Breakpoints.WebLandscape // (min-width: 1280px) and (orientation: landscape)
            ])
            .subscribe(result => {
                // if (result.breakpoints[Breakpoints.HandsetPortrait ]) { console.log('Handset Portrait '); }
                // if (result.breakpoints[Breakpoints.HandsetLandscape]) { console.log('Handset Landscape'); }
                // if (result.breakpoints[Breakpoints.TabletPortrait  ]) { console.log('Tablet Portrait '); }
                // if (result.breakpoints[Breakpoints.TabletLandscape ]) { console.log('Tablet Landscape'); }
                // if (result.breakpoints[Breakpoints.WebPortrait     ]) { console.log('Web Portrait '); }
                // if (result.breakpoints[Breakpoints.WebLandscape    ]) { console.log('Web Landscape'); }
                grid.forEach((cols, mqAlias) => {
                    if (result.breakpoints[mqAlias]) {
                        start = cols;
                    }
                });
                console.log('Break', start);
                this.cols = start;
            });
    }
}
