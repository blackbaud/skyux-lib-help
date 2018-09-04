import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HelpInitComponent } from './init-help.component';
import { HelpInitializationService } from '../../public';
import { BBHelpClient } from '@blackbaud/help-client';

describe('HelpInitComponent', () => {
  const helpInitService = new HelpInitializationService();
  let component: HelpInitComponent;
  let fixture: ComponentFixture<HelpInitComponent>;

  beforeEach(() => {
    spyOn(helpInitService, 'load').and.callFake((config: any) => { });

    TestBed.configureTestingModule({
      declarations: [
        HelpInitComponent
      ],
      providers: [
        {
          provide: HelpInitializationService,
          useValue: helpInitService
        }
      ]
    })
      .compileComponents();
  });

  it('should call load when the BBHelpClient is ready', fakeAsync(() => {
    spyOn(BBHelpClient, 'ready').and.callFake(() => Promise.resolve());
    fixture = TestBed.createComponent(HelpInitComponent);
    component = fixture.componentInstance;
    tick(1000);
    expect(helpInitService.load).toHaveBeenCalled();
  }));

  it('should not try to call load if the BBHelpClient is not ready', fakeAsync(() => {
    spyOn(BBHelpClient, 'ready').and.callFake(() => Promise.reject(''));
    fixture = TestBed.createComponent(HelpInitComponent);
    component = fixture.componentInstance;
    tick(1000);
    expect(helpInitService.load).not.toHaveBeenCalled();
  }));
});
