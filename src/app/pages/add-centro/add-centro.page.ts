import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { FirestoreService } from '../../shared/services/firestore.service';

@Component({
  selector: 'app-add-centro',
  templateUrl: './add-centro.page.html',
  styleUrls: ['./add-centro.page.scss'],
})
export class AddCentroPage implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private nav: NavController,
    private fs: FirestoreService,
  ) { }

  ngOnInit() {
    this.onLoad();
  }
  
  onLoad = () => {
    this.form = this.fb.group({
      name: ['', Validators.required],
      codigo: ['', Validators.required],
      centro: ['', Validators.required],
      cedula: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      electores: ['', Validators.required],
      parroquia: ['', Validators.required],
      cuadrante: ['', Validators.required],
    })
  }

  onSubmit = () => {
    if (this.form.invalid) return;
    const centro = {
      codigo: this.form.value.codigo,
      centro: this.form.value.centro,
      electores: this.form.value.electores,
      password: this.form.value.password,
      location: {
        parroquia: this.form.value.parroquia,
        cuadrante: this.form.value.cuadrante
      }
    };
    const psuv = {
      name: this.form.value.name,
      cedula: this.form.value.cedula,
      phone: this.form.value.phone,
      password: this.form.value.password
    }
    this.fs.insertCentro(centro, psuv);
    this.nav.navigateBack('tabs/tab3');
  }

  onBack = () => this.nav.navigateBack('tabs/tab3');
}
