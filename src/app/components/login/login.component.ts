import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/module/usuario/usuario.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(private fb: FormBuilder,
    private route: Router,
    private toastr: ToastrService) {
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  get f() {
    return this.login.controls;
  }

  ngOnInit(): void {
  }
  log(): void {
    if (this.login.valid) {
      const usuario: Usuario = ({
        email: this.login.value.email,
        password: this.login.value.password,
      });
      if (usuario.email == 'jhoan1113@hotmail.com' && usuario.password == '123456789') {
        this.route.navigate(['inicio']);
        this.toastr.success('Validacion Inicio Sesion', 'Inicio sesion correctamente');
      } else {
        this.toastr.error('Validacion Inicio Sesion', 'Ocurrio un problema al momento de iniciar sesion');
      }
      console.log(this.login.value);
    }
  }


}
