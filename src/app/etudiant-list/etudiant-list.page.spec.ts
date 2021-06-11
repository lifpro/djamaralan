import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EtudiantListPage } from './etudiant-list.page';

describe('EtudiantListPage', () => {
  let component: EtudiantListPage;
  let fixture: ComponentFixture<EtudiantListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtudiantListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EtudiantListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
