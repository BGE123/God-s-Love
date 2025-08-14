import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { VolunteerComponent } from './pages/volunteer/volunteer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DonationComponent } from './pages/donation/donation.component';
import { ProgramComponent } from './pages/program/program.component';
import { ProgramDetailComponent } from './pages/program-detail/program-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'program/:id', component: ProgramDetailComponent },
];
