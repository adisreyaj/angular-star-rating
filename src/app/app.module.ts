import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingBarComponent } from './rating-bar/rating-bar.component';
import { UserRatingComponent } from './cards/user-rating/user-rating.component';
import { FoodRatingComponent } from './cards/food-rating/food-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingBarComponent,
    UserRatingComponent,
    FoodRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
