import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Link, Profile } from '../interfaces/link.interface';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private profileSubject = new BehaviorSubject<Profile>({
    name: 'John Doe',
    bio: 'Content Creator & Developer',
    avatar: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1750934521/MMT_18_Kreatif_loc1mq.png',
    backgroundColor: '#1a1a1a',
    textColor: '#ffffff'
  });

  private linksSubject = new BehaviorSubject<Link[]>([
    {
      id: 1,
      title: 'Instagram',
      url: 'https://instagram.com',
      icon: '📷',
      isActive: true
    },
    {
      id: 2,
      title: 'YouTube',
      url: 'https://youtube.com',
      icon: '🎥',
      isActive: true
    },
    {
      id: 3,
      title: 'GitHub',
      url: 'https://github.com',
      icon: '💻',
      isActive: true
    },
    {
      id: 4,
      title: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: '💼',
      isActive: true
    },
    {
      id: 5,
      title: 'Website',
      url: 'https://example.com',
      icon: '🌐',
      isActive: true
    }
  ]);

  get profile$(): Observable<Profile> {
    return this.profileSubject.asObservable();
  }

  get links$(): Observable<Link[]> {
    return this.linksSubject.asObservable();
  }

  updateProfile(profile: Profile): void {
    this.profileSubject.next(profile);
  }

  addLink(link: Omit<Link, 'id'>): void {
    const currentLinks = this.linksSubject.value;
    const newId = Math.max(...currentLinks.map(l => l.id)) + 1;
    const newLink: Link = { ...link, id: newId };
    this.linksSubject.next([...currentLinks, newLink]);
  }

  updateLink(updatedLink: Link): void {
    const currentLinks = this.linksSubject.value;
    const index = currentLinks.findIndex(l => l.id === updatedLink.id);
    if (index !== -1) {
      currentLinks[index] = updatedLink;
      this.linksSubject.next([...currentLinks]);
    }
  }

  deleteLink(id: number): void {
    const currentLinks = this.linksSubject.value;
    this.linksSubject.next(currentLinks.filter(l => l.id !== id));
  }
}