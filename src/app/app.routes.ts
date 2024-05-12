import { Routes } from '@angular/router';

import { LandingComponent } from './main/landing/landing.component';
import { ToolsComponent } from './main/tools/tools.component';
import { LoginComponent } from './main/login/login.component';

import { AboutComponent } from './main/about/about.component';
import { FaqComponent } from './main/faq/faq.component';
import { ContactComponent } from './main/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GuestsComponent } from './pages/guests/guests.component';

export const routes: Routes = [
    {path: "home", component: LandingComponent},
    {path: "tools", component: ToolsComponent},
    {path: "login", component: LoginComponent},
    {path: "about", component: AboutComponent},
    {path: "faq", component: FaqComponent},
    {path: "contact", component: ContactComponent},
    {path: "guests", component: GuestsComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "**", pathMatch: "full", redirectTo: "home"}
];
