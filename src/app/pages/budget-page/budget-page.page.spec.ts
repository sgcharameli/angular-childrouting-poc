import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BudgetPagePage } from './budget-page.page';

describe('BudgetPagePage', () => {
  let component: BudgetPagePage;
  let fixture: ComponentFixture<BudgetPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
