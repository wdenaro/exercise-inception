import { Component } from '@angular/core';

@Component({
  selector: 'app-micro-panel',
  templateUrl: './micro-panel.component.html',
  styleUrls: ['./micro-panel.component.scss']
})
export class MicroPanelComponent {
  private movies = [
    {
      title: 'Jaws',
      year: 1975,
      cast: [
        {
          name: 'Roy Scheider',
          character: 'Chief Martin Brody'
        },
        {
          name: 'Robert Shaw',
          character: 'Quint'
        },
        {
          name: 'Richard Dreyfuss',
          character: 'Matt Hooper'
        }
      ]
    },
    {
      title: 'Aliens',
      year: 1986,
      cast: [
        {
          name: 'Sigourney Weaver',
          character: 'Ripley'
        },
        {
          name: 'Carrie Henn',
          character: 'Newt'
        },
        {
          name: 'Michael Biehn',
          character: 'Corporal Hicks'
        },
        {
          name: 'Paul Reiser',
          character: 'Burke'
        }
      ]
    },
    {
      title: 'The Shawshank Redemption',
      year: 1994,
      cast: [
        {
          name: 'Tim Robbins',
          character: 'Andy Dufresne'
        },
        {
          name: 'Morgan Freeman',
          character: 'Ellis Boyd \'Red\' Redding'
        }
      ]
    }
  ];
}
