import { Component, Input } from '@angular/core';
import { IconDefinition, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss'
})
export class RatingsComponent {
faStar = faStar;
faStarHalfStroke = faStarHalfStroke;
faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];

  private _score: number = 0;
  
  @Input() set score(val: number | undefined) {
    this._score = val?(val>5?5:val):0;
    const solidStarCount: number = Math.floor(this._score);
    for (let i = 0; i < solidStarCount; i++) {
      this.stars.push(this.faStar);
    }

    if(this._score-solidStarCount>0 && this._score-solidStarCount<1){
      this.stars.push(this.faStarHalfStroke);
    }

    for (let i = this.stars.length; i < 5; i++) {
      this.stars.push(this.faStarEmpty);
    }
  }
}
