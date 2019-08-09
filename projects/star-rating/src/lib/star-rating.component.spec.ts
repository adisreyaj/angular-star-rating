import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  let component: StarRatingComponent;
  let fixture: ComponentFixture<StarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StarRatingComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a list with the total number received', () => {
    expect(component.ratings.length).toBe(5);
  });

  it('should properly color the icons based on rating', () => {
    component.rating = 3;
    const color1 = component.getRatingColor(1);
    expect(color1).toBe(component.filledColor);
    const color2 = component.getRatingColor(2);
    expect(color2).toBe(component.filledColor);
    const color3 = component.getRatingColor(3);
    expect(color3).toBe(component.filledColor);
    const color4 = component.getRatingColor(4);
    expect(color4).toBe(component.emptyColor);
    const color5 = component.getRatingColor(5);
    expect(color5).toBe(component.emptyColor);
  });

  it('should properly show the icons based on selected type', () => {
    component.rating = 4;
    let icon: string = component.getIcon(1);
    expect(icon).toBe('star');
    icon = component.getIcon(2);
    fixture.detectChanges();
    expect(icon).toBe('star');
    icon = component.getIcon(3);
    fixture.detectChanges();
    expect(icon).toBe('star');
    icon = component.getIcon(4);
    fixture.detectChanges();
    expect(icon).toBe('star');
    icon = component.getIcon(5);
    fixture.detectChanges();
    expect(icon).toBe('star_border');
    component.rating = 2.6;
    component.type = 'filled';
    fixture.detectChanges();
    icon = component.getIcon(3);
    expect(icon).toBe('star_half');
  });

  it('clicking on stars should emit the current star value', () => {
    component.readonly = false;
    spyOn(component.rated, 'emit');
    component.rate(3);
    expect(component.rated.emit).toHaveBeenCalledWith(3);
  });
});
