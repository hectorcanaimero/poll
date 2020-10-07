import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NavController } from '@ionic/angular';

import { Centro, Psuv } from './../../shared/interfaces/centro.interface';
import { FirestoreService } from 'src/app/shared/services/firestore.service';

@Component({
  selector: 'app-edit-centro',
  templateUrl: './edit-centro.page.html',
  styleUrls: ['./edit-centro.page.scss'],
})
export class EditCentroPage implements OnInit {

  form: FormGroup;
  titulo: string = 'Ver Centro Electoral';
  slug: string = '';
  button: boolean = true;
  items: any = { 
    centro: { id: "", data: {} as Centro },
    psuv: { id: "", data: {} as Psuv}
  };

  constructor(
    private fb: FormBuilder,
    private nav: NavController,
    private act: ActivatedRoute,
    private fs: FirestoreService,
  ) { }

  ngOnInit() {
    this.act.url.subscribe((res) => {
      this.slug = res[0].path;
      this.fs.selectId('centro', this.slug).subscribe((res) => {
        this.items.centro.id = res.payload.id;
        this.items.centro.data = res.payload.data();
      })
      this.fs.selectCentro(this.slug).subscribe((res) => 
        res.forEach(doc => {
          this.items.psuv.id = doc.id,
          this.items.psuv.data = doc.data()
        })
      );
    })
    console.log(this.items);
    this.onLoad();
  }

  onLoad = () => {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      codigo: ['', Validators.required],
      centro: ['', Validators.required],
      cedula: ['', Validators.required],
      password: ['', Validators.required],
      electores: ['', Validators.required],
      parroquia: ['', Validators.required],
      cuadrante: ['', Validators.required],
    })
  }

  onEdit = () => {
    this.button = false;
    this.titulo = 'Editar Centro';
  }

  onSubmit = (id: string, idPsuv: string) => {
    const centro = {
      codigo: this.form.value.codigo,
      centro: this.form.value.centro,
      electores: this.form.value.electores,
      password: +this.form.value.password,
      location: {
        parroquia: this.form.value.parroquia || this.items.centro.data.location.parroquia,
        cuadrante: this.form.value.cuadrante || this.items.centro.data.location.cuadrante
      },
      total: {
        data: this.items.centro.data.total.data,
        cne: this.items.centro.data.total.cne,
        psuv: this.items.centro.data.total.psuv
      }
    };
    const psuv = {
      name: this.form.value.name,
      cedula: this.form.value.cedula,
      phone: this.form.value.phone,
      password: +this.form.value.password
    }
    this.fs.updateCentro(id, centro, idPsuv, psuv);
    this.nav.navigateBack('tabs/tab3');
  }

  onBack = () => this.nav.navigateBack('tabs/tab3');
}
