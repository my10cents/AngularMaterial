import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material';

@Component({
    selector: 'app-step-demo',
    templateUrl: './step-demo.component.html',
    styleUrls: ['./step-demo.component.scss']
})
export class StepDemoComponent implements OnInit {
    public isLinear = false;
    public firstFormGroup: FormGroup;
    public secondFormGroup: FormGroup;
    public firstButton: Boolean = true;
    public lastButton: boolean = false;

    constructor(private _formBuilder: FormBuilder) {}

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }

    onNext(stepper: MatStepper) {
        // let promise = service.validateData();
        stepper.next();
        this.changeButton(stepper);
    }

    onPrior(stepper: MatStepper) {
        // let promise = service.validateData();
        stepper.previous();
        this.changeButton(stepper);
    }

    onReset(stepper: MatStepper) {
        // let promise = service.validateData();
        stepper.reset();
        this.changeButton(stepper);
    }

    private changeButton(stepper: MatStepper) {
        this.lastButton = stepper.selectedIndex === stepper._steps.length - 1;
        this.firstButton = stepper.selectedIndex === 0;
    }
}
