import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"]
})
export class SliderComponent implements OnInit {
  @Input() sliders: string;
  multipleImageSlider: Array<any> = [];
  showNavigationIndicators = false;
  constructor() {

  }

  private multiImageSlider() {
    const resultArr = [];
    let j = -1;
    for (let i = 0; i < this.sliders.length; i++) {
      if (i % 4 === 0) {
        j++;
        resultArr[j] = [];
        resultArr[j].push(this.sliders[i]);
      } else {
        resultArr[j].push(this.sliders[i]);
      }
    }
    this.multipleImageSlider = resultArr;
    console.log(this.multipleImageSlider);
  }
  ngOnInit() {
    this.multiImageSlider();
    
    console.log(this.sliders);
  }
}
