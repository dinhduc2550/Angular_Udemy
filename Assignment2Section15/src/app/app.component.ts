import {Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') form!: NgForm
  formGroupAssignment!: FormGroup
  title = 'Assignment2Section15';
  options = ['Stable', 'Critical', 'Finished']
  selectedStatus = "Critical"

  onSubmit() {
      console.log(this.formGroupAssignment.get('data').get('status2').value)
  }

  forbiddenProjectNames  = ["Test"]
  disabled: boolean = false;
  forbiddenName(control: FormControl):{[s:string]:boolean}{
    if(this.forbiddenProjectNames.indexOf(control.value)!==-1){
      return {'nameIsForbidden':true}
    }
    return null
  }
  ngOnInit(): void {
    this.formGroupAssignment = new FormGroup({
      'data': new FormGroup({
        'projectName2': new FormControl(null, [Validators.required,this.forbiddenName.bind(this)]),
        'mail2': new FormControl(null, [Validators.required]),
        'status2': new FormArray([], [Validators.required])
      })
    })

  }
}
