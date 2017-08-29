import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { HelpKeyComponent } from './help-key.component';
import { BBHelpClientService } from '../shared/help-client.service';

describe('HelpKeyComponent', () => {
  let component: HelpKeyComponent;
  let fixture: ComponentFixture<HelpKeyComponent>;
  let mockHelpService: any;

  class MockHelpService {
    public setCurrentHelpKey = jasmine.createSpy('setCurrentHelpKey').and.callFake(() => {});
    public setHelpKeyToDefault = jasmine.createSpy('setHelpKeyToDefault')
      .and.callFake(() => {});
  }

  beforeEach(() => {
    mockHelpService = new MockHelpService();

    TestBed.configureTestingModule({
      declarations: [
        HelpKeyComponent
      ],
      providers: [
        { provide: BBHelpClientService, useValue: mockHelpService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelpKeyComponent);
    component = fixture.componentInstance;
  });

  it('should call call the help service\'s setCurrentHelpKey method with its helpKey', () => {
    const testHelpKey = 'test-key.html';
    component.helpKey = testHelpKey;
    component.ngOnInit();
    fixture.detectChanges();
    expect(mockHelpService.setCurrentHelpKey).toHaveBeenCalledWith(testHelpKey);
  });

  it('should set the helpKey on the client to default when destroyed', () => {
    component.helpKey = 'HelpKey';
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(mockHelpService.setHelpKeyToDefault).toHaveBeenCalled();
  });
});
