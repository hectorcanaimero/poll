import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCentroPage } from './add-centro.page';

describe('AddCentroPage', () => {
  let component: AddCentroPage;
  let fixture: ComponentFixture<AddCentroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCentroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCentroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
