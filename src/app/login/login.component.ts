import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.frmLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  Login() {
    console.log(this.frmLogin);
    const login: any = {
      email: this.frmLogin.get('email')?.value,
      password: this.frmLogin.get('password')?.value,
    };

    this.toastr.success('Login Correcto!', 'Success!');
  }
}
