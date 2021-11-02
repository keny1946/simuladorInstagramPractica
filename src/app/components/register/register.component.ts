import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/module/user/user.module';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup;
  constructor(private fb:FormBuilder, private toastr:ToastrService, private router:Router) {
    this.register = this.fb.group({
      numberCellphone: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(5)]],
      email: ['',[Validators.required,Validators.email]],
      fullName: ['',[Validators.required]],
      nameUser: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(5)]]
    });
   }
   get f(){
     return this.register.controls;
   }

  ngOnInit(): void {
  }
  log():void{
    if(this.register.valid){
      const user:User = ({
        numberCellphone: this.register.value.numberCellphone,
        email: this.register.value.email,
        fullName: this.register.value.fullName,
        nameUser: this.register.value.nameUser,
        password: this.register.value.password
      });
      this.router.navigate(['/inicio']);
    }else{
      this.toastr.error('Error Registro','Se registro correctamente');
    }
  }

}
