import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LazyModule } from './lazy';
import { NavListComponent } from './nav-list/nav-list.component';
import { PriceModule } from './price';
import { SharedModule } from './shared';

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, PriceModule, AppRoutingModule, LazyModule, SharedModule],
    declarations: [AppComponent, NavListComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
