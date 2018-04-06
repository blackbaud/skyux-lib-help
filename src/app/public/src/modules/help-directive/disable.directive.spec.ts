import { By } from '@angular/platform-browser';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpComponent } from '../help';

import { BBHelpDisableWidgetDirective } from './disable.directive';

import { HelpWidgetService } from '../shared';

import { HelpBBHelpTestComponent } from './fixtures/help.component.fixture';

class MockWidgetService {
  public disabledCount: number = 0;

  public increaseDisabledCount(): void {
    this.disabledCount++;
  }

  public decreaseDisabledCount(): void {
    if (this.disabledCount > 0) {
      this.disabledCount--;
    }
  }

  public disableWidget(): void {
  }

  public enableWidget(): void {
  }
}

describe('BBHelpDisableWidgetDirective', () => {
  let component: HelpBBHelpTestComponent;
  let fixture: ComponentFixture<HelpBBHelpTestComponent>;
  let mockWidgetService: MockWidgetService;
  let directiveElement: any;

  beforeEach(() => {
    mockWidgetService = new MockWidgetService();

    TestBed.configureTestingModule({
      declarations: [
        BBHelpDisableWidgetDirective,
        HelpBBHelpTestComponent,
        HelpComponent
      ],
      providers: [
        { provide: HelpWidgetService, useValue: mockWidgetService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HelpBBHelpTestComponent);
    component = fixture.componentInstance;
    directiveElement = fixture.debugElement.query(By.directive(BBHelpDisableWidgetDirective));
  });

  it('should call increaseDisabledCount on init when disableWidget is true ', () => {
    let directiveInstance = directiveElement.injector.get(BBHelpDisableWidgetDirective);
    spyOn(mockWidgetService, 'increaseDisabledCount').and.callThrough();
    directiveInstance.ngOnInit();
    expect(mockWidgetService.increaseDisabledCount).toHaveBeenCalled();
    expect(mockWidgetService.disabledCount).toEqual(1);
  });

  it('should call decreaseDisabledCount on destroy when disabledWidget is true', () => {
    let directiveInstance = directiveElement.injector.get(BBHelpDisableWidgetDirective);
    spyOn(mockWidgetService, 'decreaseDisabledCount').and.callThrough();
    directiveInstance.ngOnDestroy();
    expect(mockWidgetService.decreaseDisabledCount).toHaveBeenCalled();
    expect(mockWidgetService.disabledCount).toEqual(0);
  });
});
