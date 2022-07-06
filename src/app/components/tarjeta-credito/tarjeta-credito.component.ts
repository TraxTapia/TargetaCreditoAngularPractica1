import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css'],
})
export class TarjetaCreditoComponent implements OnInit {
  listTarjeta: any[] = [
    {
      titular: 'Juan Perez',
      numeroTarjeta: '36358383839393877',
      fechaExpiracion: '12/23',
      cvv: '123',
    },
    {
      titular: 'Miguel Juarez',
      numeroTarjeta: '36358383839393877',
      fechaExpiracion: '12/23',
      cvv: '123',
    },
  ];
  form: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      titular: ['', Validators.required],
      numeroTarjeta: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
        ],
      ],
      fechaExpiracion: [
        '',
        [Validators.required, Validators.maxLength(5), Validators.minLength(5)],
      ],
      cvv: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
    });
  }

  ngOnInit(): void {}
  agregarTargeta() {
    console.log(this.form);
    const targeta: any = {
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    };
    this.listTarjeta.push(targeta);
    this.toastr.success(
      'La targeta fue registrada correctamente!',
      'Tarjeta Registrada!'
    );
    this.form.reset();
  }
}
