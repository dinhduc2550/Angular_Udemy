import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm
  data = {mail: '', password: '', sub: ''}
  submitted = false
  title = 'AssignmentSection15';
  subscriptions = ["Basic", "Advanced", "Pro"]
  selectedSubscription = "Advanced"

  onSubmit() {
    this.submitted = truefo
    this.data.mail = this.form.value.mail;
    this.data.password = this.form.value.password;
    this.data.sub = this.form.value.subscription;
    console.log(this.data)
  }
}
