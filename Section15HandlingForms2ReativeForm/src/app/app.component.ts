import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Section15HandlingForms2ReativeForm';
  genders = ['male', 'female'];
  signupForm!: FormGroup

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData2': new FormGroup({
        'userName': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        'email2': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender2': new FormControl('male'),
      'hobbies2': new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  //add form
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get(('hobbies2'))).push(control);
  }

  getControls() {
    return (<FormArray>this.signupForm.get('hobbies2')).controls;
  }

  //custom validator
  forbiddenUserNames = ['Chris','Anna']
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if(this.forbiddenUserNames.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true}
    }
    return null
  }
}
