import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfesseurListPage } from './professeur-list.page';

describe('ProfesseurListPage', () => {
  let component: ProfesseurListPage;
  let fixture: ComponentFixture<ProfesseurListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesseurListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfesseurListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
