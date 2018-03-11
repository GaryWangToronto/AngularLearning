import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerrListComponent } from './sellerr-list.component';

describe('SellerrListComponent', () => {
  let component: SellerrListComponent;
  let fixture: ComponentFixture<SellerrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
