//this file lists the objects in the database and their traits

export interface Conference {
    id: string;
    name: string;
    description?: string;
    starts: Date;
    ends: Date;
    maxPresentations: number;
    maxAttendees: number;
    locationId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    location?: Location;
    presentations?: Presentation[];
    attendees?: Attendee[];
  }
  
  export interface Location {
    id: string;
    name: string;
    city: string;
    state: string;
    roomCount: number;
    createdAt: Date;
    updatedAt: Date;
    conferences?: Conference[];
  }
  
  export interface Presentation {
    id: string;
    title: string;
    synopsis: string;
    presenter: string;
    conferenceId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    conference?: Conference;
  }
  
  export interface Attendee {
    id: string;
    name: string;
    email: string;
    conferenceId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    conference?: Conference;
  }
  
  export interface User {
    id: string;
    name?: string;
    email: string;
    image?: string;
    conferences?: Conference[];
    presentations?: Presentation[];
    attendees?: Attendee[];
  }