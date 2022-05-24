import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemResultListComponent } from './item-result-list.component';

describe('ItemResultListComponent', () => {
  let component: ItemResultListComponent;
  let fixture: ComponentFixture<ItemResultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemResultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemResultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
