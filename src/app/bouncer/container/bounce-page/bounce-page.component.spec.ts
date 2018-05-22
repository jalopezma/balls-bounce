import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BouncePageComponent } from './bounce-page.component';
import { BouncerModule } from '../../bouncer.module';

describe('BouncePageComponent', () => {
  let component: BouncePageComponent;
  let fixture: ComponentFixture<BouncePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BouncerModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BouncePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
