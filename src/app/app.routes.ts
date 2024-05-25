import { Routes } from '@angular/router';
import { EventComponent } from './event/event.component';
import { NoticeComponent } from './notice/notice.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SempageComponent } from './sempage/sempage.component';

export const routes: Routes = [
    {path:"",component:HomepageComponent},
    {path:"event",component:EventComponent},
    {path:"notice",component:NoticeComponent},
    {path:"sem/:sem",component:SempageComponent}
];
