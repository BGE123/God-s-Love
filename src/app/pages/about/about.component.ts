import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  boards = [
    {
      id: 1,
      icon: 'assets/about/bmem1.png',
      name: 'Stella Mojisola Ayo',
      title: 'Director (Founder)',
    },
    {
      id: 2,
      icon: 'assets/about/bmem2.png',
      name: 'Johnson Tunde Ayo',
      title: 'Director (Co- Founder)',
    },
    {
      id: 3,
      icon: 'assets/about/bmem3.png',
      name: 'Gbemisola Babatunde',
      title: 'Director (Finance)',
    },
    {
      id: 4,
      icon: 'assets/about/bmem4.png',
      name: 'Johnson Adu',
      title: 'Director (Agric Expert)',
    },
  ];
  teams = [
    {
      id: 1,
      icon: 'assets/about/tmem1.png',
      name: 'Stephen Awhanjinu',
      title: 'Outreach Manager',
    },
    {
      id: 2,
      icon: 'assets/about/tmem2.png',
      name: 'Victoria Fakile',
      title: 'Welfare Coordinator',
    },
    {
      id: 3,
      icon: 'assets/about/tmem3.png',
      name: 'Mojisola Akinola',
      title: 'Legal Adviser',
    },
    {
      id: 4,
      icon: 'assets/about/tmem4.jpg',
      name: 'Oyelelye Akeem. O',
      title: 'Head Facilitator/ Trainer',
    },
  ];
}
