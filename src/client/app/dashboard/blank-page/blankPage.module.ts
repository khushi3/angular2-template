import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule }   from '@angular/forms';

import { BlankPageComponent } from './blankPage.component';
import { Encompass_360 } from './360_en.service';

@NgModule({
    imports: [BrowserModule,FormsModule ],
    declarations: [BlankPageComponent],
    providers: [
    Encompass_360
  ],
    exports: [BlankPageComponent]
})

export class BlankPageModule { }
