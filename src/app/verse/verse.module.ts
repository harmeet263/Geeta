import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersePageRoutingModule } from './verse-routing.module';

import { VersePage } from './verse.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersePageRoutingModule
  ],
  declarations: [VersePage]
})
export class VersePageModule {}
