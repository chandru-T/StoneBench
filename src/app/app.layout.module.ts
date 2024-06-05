import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppTopbarComponent } from './app.topbar.component';
import { AppFooterComponent } from './app.footer.component';
import { AppLayoutComponent } from './app.layout.component';
import { RouterModule } from '@angular/router';
import { AppConfigComponent } from './app-config/app-config.component';

@NgModule({
  declarations: [AppLayoutComponent, AppTopbarComponent, AppFooterComponent, AppConfigComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
