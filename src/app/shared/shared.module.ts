import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { HelloComponent } from './hello.component';
import { VisibleWithDirective } from './visible-with.directive';

@NgModule({
    imports: [CommonModule, PortalModule],
    declarations: [VisibleWithDirective, HelloComponent, HeaderComponent],
    exports: [VisibleWithDirective, HelloComponent, HeaderComponent, PortalModule],
})
export class SharedModule {}
