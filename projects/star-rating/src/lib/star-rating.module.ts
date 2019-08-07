import { NgModule } from '@angular/core';
import { StarRatingComponent } from './star-rating.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StarRatingComponent],
  imports: [CommonModule],
  exports: [StarRatingComponent]
})
export class StarRatingModule {}
