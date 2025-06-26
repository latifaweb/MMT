import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { LinkService } from './services/link.service';
import { Link, Profile } from './interfaces/link.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  profile$!: Observable<Profile>;
  links$!: Observable<Link[]>;

  constructor(private linkService: LinkService) {}

  ngOnInit(): void {
    this.profile$ = this.linkService.profile$;
    this.links$ = this.linkService.links$;
  }
}