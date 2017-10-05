import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { HelpKeyComponent } from './help-key.component';
import { HelpWidgetService } from '../shared';

describe('HelpKeyComponent', () => {
  let component: HelpKeyComponent;
  let fixture: ComponentFixture<HelpKeyComponent>;
  let mockWidgetService: any;

  class MockWidgetService {
    public setCurrentHelpKey = jasmine.createSpy('setCurrentHelpKey').and.callFake(() => {});
    public setHelpKeyToDefault = jasmine.createSpy('setHelpKeyToDefault').and.callFake(() => {});
    public setTemporaryHelpKey = jasmine.createSpy('setTemporaryHelpKey').and.callFake(() => {});
    public removeTemporaryHelpKey = jasmine.createSpy('removeTemporaryHelpKey').and.callFake(() => {});
  }

  beforeEach(() => {
    mockWidgetService = new MockWidgetService();

    TestBed.configureTestingModule({
      declarations: [
        HelpKeyComponent
      ],
      providers: [
        { provide: HelpWidgetService, useValue: mockWidgetService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HelpKeyComponent);
    component = fixture.componentInstance;
  });

  it('should call the help service\'s setCurrentHelpKey method with its helpKey', () => {
    const testHelpKey = 'test-key.html';
    component.helpKey = testHelpKey;
    fixture.detectChanges();
    expect(mockWidgetService.setCurrentHelpKey).toHaveBeenCalledWith(testHelpKey);
  });

  it('should call call the help service\'s setCurrentHelpKey method with its helpKey every time the helpKey changes', () => {
    const testHelpKey1 = 'test-key1.html';
    const testHelpKey2 = 'test-key2.html';

    component.helpKey = testHelpKey1;
    fixture.detectChanges();
    expect(mockWidgetService.setCurrentHelpKey).toHaveBeenCalledWith(testHelpKey1);

    component.helpKey = testHelpKey2;
    fixture.detectChanges();
    expect(mockWidgetService.setCurrentHelpKey).toHaveBeenCalledWith(testHelpKey2);
  });

  it('should set the helpKey on the client to default when destroyed', () => {
    component.helpKey = 'HelpKey';
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(mockWidgetService.setCurrentHelpKey).toHaveBeenCalled();
  });

  it('should set the help key as temporary if the isTemporary attribute is true', () => {
    component.isTemporary = true;
    component.helpKey = 'HelpKey';
    fixture.detectChanges();
    expect(mockWidgetService.setCurrentHelpKey).not.toHaveBeenCalled();
    expect(mockWidgetService.setTemporaryHelpKey).toHaveBeenCalled();
  });

  it('should remove the temporary help key as if the isTemporary attribute is true when destroyed', () => {
    component.isTemporary = true;
    component.helpKey = 'HelpKey';
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(mockWidgetService.setHelpKeyToDefault).not.toHaveBeenCalled();
    expect(mockWidgetService.removeTemporaryHelpKey).toHaveBeenCalled();
  });

  it('should set the helpKey on the client to default when destroyed', () => {
    component.helpKey = 'HelpKey';
    component.ngOnDestroy();
    fixture.detectChanges();
    expect(mockWidgetService.setHelpKeyToDefault).toHaveBeenCalled();
  });
});
