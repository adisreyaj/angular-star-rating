import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRatingComponent } from './cards/user-rating/user-rating.component';
import { FoodRatingComponent } from './cards/food-rating/food-rating.component';
import { StarRatingModule } from '@sreyaj/ng-star-rating';
@NgModule({
  declarations: [AppComponent, UserRatingComponent, FoodRatingComponent],
  imports: [BrowserModule, AppRoutingModule, StarRatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
