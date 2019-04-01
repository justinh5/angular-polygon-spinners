import { NgModule } from '@angular/core';
import { PolygonSpinnerComponent } from './polygon-spinner.component';
import { ThreeSpinnerComponent } from './three-spinner/three-spinner.component';
import { FourSpinnerComponent } from './four-spinner/four-spinner.component';
import { FiveSpinnerComponent } from './five-spinner/five-spinner.component';
import { SixSpinnerComponent } from './six-spinner/six-spinner.component';
import { SevenSpinnerComponent } from './seven-spinner/seven-spinner.component';
import { EightSpinnerComponent } from './eight-spinner/eight-spinner.component';
import { NineSpinnerComponent } from './nine-spinner/nine-spinner.component';
import { TenSpinnerComponent } from './ten-spinner/ten-spinner.component';

@NgModule({
  declarations: [PolygonSpinnerComponent, ThreeSpinnerComponent, FourSpinnerComponent, FiveSpinnerComponent, SixSpinnerComponent, SevenSpinnerComponent, EightSpinnerComponent, NineSpinnerComponent, TenSpinnerComponent],
  imports: [
  ],
  exports: [PolygonSpinnerComponent,
            ThreeSpinnerComponent,
            FourSpinnerComponent,
            FiveSpinnerComponent,
            SixSpinnerComponent,
            SevenSpinnerComponent,
            EightSpinnerComponent,
            NineSpinnerComponent,
            TenSpinnerComponent]
})
export class PolygonSpinnerModule { }
