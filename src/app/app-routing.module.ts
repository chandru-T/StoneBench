import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app.layout.component';


@NgModule({
  imports: [RouterModule.forRoot(

    [
      {
        path: '', component: AppLayoutComponent,
      
      }
    ]

  )

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
