import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceAreaComponent } from './bounce-area.component';

describe('BounceAreaComponent', () => {
  let component: BounceAreaComponent;
  let fixture: ComponentFixture<BounceAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BounceAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should render canvas', () => {
    const compiled = fixture.debugElement.nativeElement;
    component.ngAfterViewInit();
    fixture.detectChanges();
    expect(compiled.querySelector('canvas')).toBeDefined();
  });
});
