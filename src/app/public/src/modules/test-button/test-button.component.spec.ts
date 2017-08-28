import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestButtonComponent } from './test-button.component';
import { BBHelpClientService } from '../shared/help-client.service';

describe('TestButtonComponent', () => {
  let component: TestButtonComponent;
  let fixture: ComponentFixture<TestButtonComponent>;
  let debugElement: DebugElement;

  let mockHelpService: any;

  class MockHelpService {
    public openWidgetToHelpKey = jasmine.createSpy('openWidgetToHelpKey').and.callFake(() => { });
  }

  beforeEach(() => {
    mockHelpService = new MockHelpService();

    TestBed.configureTestingModule({
      declarations: [
        TestButtonComponent
      ],
      providers: [
        { provide: BBHelpClientService, useValue: mockHelpService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TestButtonComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('on click it should call the openWidget method on the service', () => {
    const helpKey = 'test-key.html';
    component.helpKey = helpKey;
    debugElement.query(By.css('.test-button-component')).triggerEventHandler('click', undefined);
    expect(mockHelpService.openWidgetToHelpKey).toHaveBeenCalledWith(helpKey);
  });
});
