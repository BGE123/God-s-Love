import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramDataService {
  programs = [
    {
      id: 2,
      pic: 'assets/programs/widow.jpg',
      title: 'Urban Farming & Agribusiness Training',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'Through our 3-month urban farming training, underserved individuals learn to cultivate, sustain, and grow income-generating farms in urban settings.',
      highlights: [
        {
          h: 'Practical, on-the-field sessions with agricultural experts',
        },
        {
          h: 'Sustainable techniques for home/backyard farming',
        },
        {
          h: 'Introduction to agri-entrepreneurship',
        },
        {
          h: 'Mentorship from AFAN and Xtralarge volunteers',
        },
      ],
      goals: [
        {
          g: 'Improve household income and strengthen food security through agriculture.',
        },
      ],
      img1: 'assets/programDets/pro2Img1.jpg',
      img2: 'assets/programDets/pro2Img2.jpg',
      img3: 'assets/programDets/pro2Img3.jpg',
      img4: 'assets/programDets/pro2Img4.jpg',
      img5: 'assets/programDets/pro2Img5.jpg',
    },
    {
      id: 3,
      pic: 'assets/programs/widow-food.jpg',
      title: 'Quarterly Food Relief & Food Bank Operations',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'Our center also operates as a food bank, where we distribute food supplies every quarter to vulnerable groups',
      highlights: [
        {
          h: 'Practical, on-the-field sessions with agricultural experts',
        },
        {
          h: 'Sustainable techniques for home/backyard farming',
        },
        {
          h: 'Introduction to agri-entrepreneurship',
        },
        {
          h: 'Mentorship from AFAN and Xtralarge volunteers',
        },
      ],
      goals: [
        {
          g: 'Improve household income and strengthen food security through agriculture.',
        },
      ],
      img1: 'assets/programDets/pro2Img1.jpg',
      img2: 'assets/programDets/pro2Img2.jpg',
      img3: 'assets/programDets/pro2Img3.jpg',
      img4: 'assets/programDets/pro2Img4.jpg',
      img5: 'assets/programDets/pro2Img5.jpg',
    },
    {
      id: 4,
      pic: 'assets/programs/widow-health.jpg',
      title: 'Community Health Outreach & Wellness Education',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'We aim to support underserved Nigerians by offering:',
      highlights: [
        {
          h: 'Practical, on-the-field sessions with agricultural experts',
        },
        {
          h: 'Sustainable techniques for home/backyard farming',
        },
        {
          h: 'Introduction to agri-entrepreneurship',
        },
        {
          h: 'Mentorship from AFAN and Xtralarge volunteers',
        },
      ],
      goals: [
        {
          g: 'Improve household income and strengthen food security through agriculture.',
        },
      ],
      img1: 'assets/programDets/pro2Img1.jpg',
      img2: 'assets/programDets/pro2Img2.jpg',
      img3: 'assets/programDets/pro2Img3.jpg',
      img4: 'assets/programDets/pro2Img4.jpg',
      img5: 'assets/programDets/pro2Img5.jpg',
    },
    {
      id: 5,
      pic: 'assets/programs/widow-food2.jpg',
      title: 'Community Health Outreach & Wellness Education',
      partners: 'Affiliate Partners: AFAN & Xtralarge Farms',
      desc: 'We aim to support underserved Nigerians by offering:',
      highlights: [
        {
          h: 'Practical, on-the-field sessions with agricultural experts',
        },
        {
          h: 'Sustainable techniques for home/backyard farming',
        },
        {
          h: 'Introduction to agri-entrepreneurship',
        },
        {
          h: 'Mentorship from AFAN and Xtralarge volunteers',
        },
      ],
      goals: [
        {
          g: 'Improve household income and strengthen food security through agriculture.',
        },
      ],
      img1: 'assets/programDets/pro2Img1.jpg',
      img2: 'assets/programDets/pro2Img2.jpg',
      img3: 'assets/programDets/pro2Img3.jpg',
      img4: 'assets/programDets/pro2Img4.jpg',
      img5: 'assets/programDets/pro2Img5.jpg',
    },
  ];

  getProgram() {
    return this.programs;
  }
  getProgramById(id: number) {
    return this.programs.find((program) => program.id === id);
  }
}
