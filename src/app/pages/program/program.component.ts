import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgramDataService } from '../../services/program-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  imports: [CommonModule],
  templateUrl: './program.component.html',
  styleUrl: './program.component.css',
})
export class ProgramComponent {
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
