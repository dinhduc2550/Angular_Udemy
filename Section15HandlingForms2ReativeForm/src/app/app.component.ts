import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import { Observable } from 'rxjs';

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
        'email2': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails),
      }),
      'gender2': new FormControl('male'),
      'hobbies2': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )
    this.signupForm.setValue({
      'userData2':{
        'userName':'San',
        'email2':'dinhduc2550@gmail.com'
      },
      'gender2':'male',
      'hobbies2':[]
    })
    //patch value chi set value cho att duoc set khong set nhung thu con lai
    this.signupForm.patchValue({
      'userData2':{
        'userName':'Anna',
      }
    })
  }

  onSubmit() {
    console.log(this.signupForm)

    //reset specific att obbject
    this.signupForm.get('userData2').get('userName').reset()
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

  forbiddenEmails(control: FormControl):Promise<any>|Observable<any>{
    const promise = new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden':true})
        }else{
          resolve(null)
        }
      },1500)
    })
    return promise
  }
}


