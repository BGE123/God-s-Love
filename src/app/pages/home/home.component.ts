import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideInRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '600ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  isVisible = false;

  onSectionInView() {
    this.isVisible = true;
  }
  hoverIndex: number | null = null;
  currentImage: string = 'assets/home/char1.png';
  programs = [
    {
      id: 1,
      pic: 'assets/programs/img1.svg',
      title: 'Telecom Business Empowerment Program',
      partners: 'Affiliate Partner: TGR Telecom',
      desc: 'We offer a 3-month training program to help low-income individuals start their own VTU (Virtual Top-Up) Telecom businesses.',
    },
    {
      id: 2,
      pic: 'assets/programs/img2.svg',
      title: 'Urban Farming & Agribusiness Training',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'Through our 3-month urban farming training, underserved individuals learn to cultivate, sustain, and grow income-generating farms in urban settings.',
    },
    {
      id: 3,
      pic: 'assets/programs/img3.svg',
      title: 'Quarterly Food Relief & Food Bank Operations',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'Our center also operates as a food bank, where we distribute food supplies every quarter to vulnerable groups',
    },
    {
      id: 4,
      pic: 'assets/programs/img4.jpg',
      title: 'Community Health Outreach & Wellness Education',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'We aim to support underserved Nigerians by offering:',
    },
  ];
  faqs = [
    {
      question: 'When was Godlove 360 foundation established?',
      answer:
        'Godlove 360 degree empowerment foundation was legally registered with the corporate affairs commission (CAC) on the 14 May 2024. This day serves as our official commencement day and anniversary.',
      open: true,
    },
    {
      question: 'Is Godlove 360 foundation limited to only Lagos State?',
      answer: 'No, our activities span multiple states in Nigeria.',
      open: false,
    },
    {
      question:
        'Is Godlove 360 foundation activities limited to certain age group?',
      answer: 'No, we welcome individuals of all ages.',
      open: false,
    },
  ];
  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
}
