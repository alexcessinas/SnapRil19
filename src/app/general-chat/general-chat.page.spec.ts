import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { GeneralChatPage } from './general-chat.page';

describe('Tab2Page', () => {
  let component: GeneralChatPage;
  let fixture: ComponentFixture<GeneralChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralChatPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
