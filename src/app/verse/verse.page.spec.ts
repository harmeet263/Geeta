import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VersePage } from './verse.page';

describe('VersePage', () => {
  let component: VersePage;
  let fixture: ComponentFixture<VersePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VersePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
