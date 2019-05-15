import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit {
  filters: FormGroup;

  constructor(fb: FormBuilder) {
    this.filters = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)]
    });
  }
  
  // Here is one way (and maybe the only scenario) where you can use 
  // the subscribe() method.
  // valueSub: Subscription;
  // 
  // this.valueSub = this.filters.valueChanges.subscribe(value =>
  //   console.log('Value has changed!', value);
  // });

  // details: FormGroup;
  // departments = [
  //   'HR',
  //   'Payroll'
  // ];
  // constructor(fb: FormBuilder) {
  //   this.details = fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     middleInitial: ['', [Validators.maxLength(1), Validators.required]],
  //     position: ['Sales', [Validators.minLength(3), Validators.required]],
  //     department: [''],
  //     immediateSupervisor: [''],
  //     phoneNumber: ['', Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)],
  //     email: ['', [Validators.email, Validators.required]],
  //     status: ['Active', Validators.required]
  //   });
  // }

  // Gets called by any button submission on the form, or a enter button anywhere on the form.
  // saveEmployeeDetails(): void {
  //   console.log('Form Submitted', this.details.value);
  // }

  // logTheForm(): void {
  //   console.log('form: ', this.details);
  // }

  // LifecycleHook: runs right after Angular initializes, and after the constructor is called.
  ngOnInit() {
  }

  submit() {
    console.log('form: ', this.filters.value);
  }

}