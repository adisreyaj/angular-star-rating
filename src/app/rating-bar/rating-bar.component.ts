import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.scss']
})
export class RatingBarComponent implements OnInit {
  @Input() total = 5;
  @Input() rating = 0;
  @Input() readonly = false;
  @Input() type: 'filled' | 'hollow' = 'hollow';
  @Input() filledColor = '#3db700';
  @Input() emptyColor = '#e0e0e0';
  @Output() rated = new EventEmitter<number>();
  ratings: number[] = [];
  constructor() {}

  ngOnInit() {
    for (let i = 1; i <= this.total; i++) {
      this.ratings.push(i);
    }
  }

  getRatingColor(index: number): string {
    return this.rating >= index || this.rating >= index - 0.5
      ? this.filledColor
      : this.emptyColor;
  }

  getIcon(index: number): string {
    if (this.rating >= index) {
      return 'star';
    } else {
      if (this.rating >= index - 0.5) {
        return 'star_half';
      } else {
        return this.type === 'hollow' ? 'star_border' : 'star';
      }
    }
  }

  rate(index: number): void {
    if (!this.readonly) {
      this.rating = index;
      this.rated.emit(index);
    }
  }
}
