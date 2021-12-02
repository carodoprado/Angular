import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  constructor() { }

  errorPassword: any;
  errorUsuario: any;

  usuarioModel = new FormGroup({

    usuario: new FormControl("", [Validators.required, Validators.minLength(5)]),
    password: new FormControl("", [Validators.required, Validators.minLength(4)])

  });

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  login() {

    let usu = "admin";
    let pass = "1234";

    if (this.usuarioModel.get("password")?.invalid) {

      this.errorPassword = true;

    }
    else {
      this.errorPassword = false;
    }

    if (this.usuarioModel.get("usuario")?.invalid) {

      this.errorUsuario = true;

    }
    else {
      this.errorUsuario = false;
    }
    if (this.errorPassword && this.errorUsuario) {
      return;
    }
    if (usu == this.usuarioModel.value.usuario) {
      if (pass == this.usuarioModel.value.password) {
        alert("Bienvenido");
      }
      else {
        this.errorPassword = true;
      }
    }
    else {
      this.errorUsuario = true;
    }

  }
  get usuario() { return this.usuarioModel.get('usuario'); }

  get password() { return this.usuarioModel.get('password'); }
}
