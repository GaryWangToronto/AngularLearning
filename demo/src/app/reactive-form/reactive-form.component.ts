import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  private formModel:FormGroup;

  mobileVaidator(param: FormControl):any{

    ng
  }

  private fb:FormBuilder = new FormBuilder();

  constructor() {
    this.formModel = this.fb.group({
      nickname: ['xxxx', [Validators.required, Validators.minLength(6)]],
      emails: this.fb.array([
        ['']
      ]),
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['', Validators.required],
        passwordConfirm: ['']
      }, {validator: passwordValidator})
    })
  }

  createUser(){

    // let nicknameValid:boolean = this.formModel.get('nickname').valid;
    //
    // console.log('nickname是否校验通过:'+nicknameValid);
    //
    // let nicknameErrors:any = this.formModel.get('nickname').errors;
    //
    // console.log('nickname的校验信息:'+JSON.stringify(nicknameErrors));

    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

}
