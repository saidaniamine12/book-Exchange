import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductByNameComponent } from './view-all-product-by-name.component';

describe('ViewAllProductByNameComponent', () => {
  let component: ViewAllProductByNameComponent;
  let fixture: ComponentFixture<ViewAllProductByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
