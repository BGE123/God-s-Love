import { Component } from '@angular/core';
import { ProgramDataService } from '../../services/program-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-program-detail',
  imports: [CommonModule],
  templateUrl: './program-detail.component.html',
  styleUrl: './program-detail.component.css',
})
export class ProgramDetailComponent {
  programData: any;
  programs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramDataService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.programData = this.programService.getProgramById(id);
    this.programs = this.programService.getProgram();
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
