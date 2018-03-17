import { Component } from '@angular/core';

@Component({
  selector: 'app-micro-panel',
  templateUrl: './micro-panel.component.html',
  styleUrls: ['./micro-panel.component.scss']
})
export class MicroPanelComponent {
  public movies = [
    {
      title: 'Jaws',
      year: 1975,
      cast: [
        { name: 'Roy Scheider',
          character: {
            name: 'Chief Martin Brody',
            age: 41
          }
        },
        { name: 'Robert Shaw',
          character: {
            name: 'Quint',
            age: 48
          }
        },
        { name: 'Richard Dreyfuss',
          character: {
            name: 'Matt Hooper',
            age: 32
          }
        }
      ]
    },
    {
      title: 'Aliens',
      year: 1986,
      cast: [
        { name: 'Sigourney Weaver',
          character: {
            name: 'Ellen Ripley',
            age: 31
          }
        },
        { name: 'Carrie Henn',
          character: {
            name: 'Newt',
            age: 9
        }
        },
        { name: 'Michael Biehn',
          character: {
            name: 'Corporal Hicks',
            age: 28
          }
        },
        { name: 'Paul Reiser',
          character: {
            name: 'Burke',
            age: 33
          }
        }
      ]
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      cast: [
        { name: 'Tim Robbins',
          character: {
            name: 'Andy Dufresne',
            age: 30
          }
        },
        { name: 'Morgan Freeman',
          character: {
            name: 'Ellis Boyd \'Red\' Redding',
            age: 47
          }
        }
      ]
    }
  ];
}
