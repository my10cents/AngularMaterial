import { Component, OnInit } from '@angular/core';
import { ToastyService } from '../../components/toasty/toasty.service';

@Component({
    selector: 'app-toasty-demo',
    templateUrl: './toasty-demo.component.html',
    styleUrls: ['./toasty-demo.component.scss']
})
export class ToastyDemoComponent implements OnInit {
    constructor(private toast: ToastyService) {}

    ngOnInit() {}

    showToastyInfo() {
        this.toast.info('Toast show Info!');
    }

    showToastyError() {
        this.toast.error('Toast show Error!!');
    }

    showToastyWarning() {
        this.toast.warning('Toast show Warning.');
    }

    showToastySuccess() {
        this.toast.success('Toast show Success.');
    }
}
