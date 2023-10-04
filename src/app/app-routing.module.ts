import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { CalendarComponent } from './calendar/calendar.component';
import { Tab1Component } from './tab1/tab1.page';
import { Tab2Component } from './tab2/tab2.page';
import { Tab3Component } from './tab3/tab3.page';


const routes: Routes = [
  {path:'',component: Tab1Component},
  {path:"tab2",component:Tab2Component},
  {path:"tab3",component:Tab3Component},
  {path:"calendar",component:CalendarComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
