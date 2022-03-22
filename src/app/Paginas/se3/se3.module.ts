import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Se3PageRoutingModule } from './se3-routing.module';

import { Se3Page } from './se3.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Se3PageRoutingModule,
    ComponentsModule
  ],
  declarations: [Se3Page]
})
export class Se3PageModule {}
