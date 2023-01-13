import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShopComponent } from './page-shop.component';

describe('PageShopComponent', () => {
  let component: PageShopComponent;
  let fixture: ComponentFixture<PageShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
