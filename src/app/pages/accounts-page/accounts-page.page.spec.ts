import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountsPagePage } from './accounts-page.page';

describe('AccountsPagePage', () => {
  let component: AccountsPagePage;
  let fixture: ComponentFixture<AccountsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
