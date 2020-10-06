import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditCentroPage } from './edit-centro.page';

describe('EditCentroPage', () => {
  let component: EditCentroPage;
  let fixture: ComponentFixture<EditCentroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCentroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditCentroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
