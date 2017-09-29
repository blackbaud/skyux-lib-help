import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { HelpInitComponent } from './init-help.component';
import { HelpInitializationService } from '../public';

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

    fixture = TestBed.createComponent(HelpInitComponent);
    component = fixture.componentInstance;
  });

  it('should initialize the help widget on creation', () => {
    expect(helpInitService.load).toHaveBeenCalled();
  });
});
