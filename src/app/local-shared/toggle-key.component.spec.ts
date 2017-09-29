import { ComponentFixture, TestBed } from '@angular/core/testing';

import { expect } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { ToggleKeyComponent } from './toggle-key.component';
import { HelpKeyComponent } from '../public/src/modules/help-key';
import { HelpWidgetService } from '../public';

class MockWidgetService {
  public setCurrentHelpKey = jasmine.createSpy('setCurrentHelpKey').and.callFake(() => { });
  public setHelpKeyToDefault = jasmine.createSpy('setHelpKeyToDefault')
    .and.callFake(() => { });
}
describe('ToggleKeyComponent', () => {
  let component: ToggleKeyComponent;
  let fixture: ComponentFixture<ToggleKeyComponent>;

  let mockWidgetService: MockWidgetService = new MockWidgetService();

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        ToggleKeyComponent,
        HelpKeyComponent
      ],
      providers: [
        {
          provide: HelpWidgetService,
          useValue: mockWidgetService
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ToggleKeyComponent);

    component = fixture.componentInstance;
  });

  it('should toggle helpKeys', () => {
    expect(component.helpKey).toBe(component.helpKey1);
    component.toggleHelpKey();
    expect(component.helpKey).toBe(component.helpKey2);
    component.toggleHelpKey();
    expect(component.helpKey).toBe(component.helpKey1);
  });
});
