import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

export interface FooterLink { label: string; route?: string; href?: string; sub?: string; }
export interface FooterColumn { title: string; links: FooterLink[]; }

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() columns: FooterColumn[] = [];
}
