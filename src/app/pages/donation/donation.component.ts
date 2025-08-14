import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProgramDataService } from '../../services/program-data.service';

@Component({
  selector: 'app-donation',
  imports: [CommonModule],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.css',
})
export class DonationComponent {
  programs: any[] = [];

  constructor(
    private programService: ProgramDataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.programs = this.programService.getProgram();
  }

  goToProgram(program: any) {
    this.router.navigate(['/program', program.id.toString()]);
  }
  copyToClipboard(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Copied to clipboard: ' + text);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }
}
