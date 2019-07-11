import { Component, OnInit } from "@angular/core";
import { FruitsInterface } from "fruits.interface.ts";

@Component({
  selector: "app-fruits",
  templateUrl: "./fruits.html",
  styleUrls: ["./fruits.css"]
})
export class FruitsComponent implements OnInit {
  fruits: Array<FruitsInterface>;

  ngOnInit() {
    this.fruits = [
      {
        color: "red",
        name: "apple"
      },
      {
        color: "yellow",
        name: "banana"
      },
      {
        color: "green",
        name: "lemon"
      }
    ];
  }

  up = index => {
    if (index - 1 < 0) {
      return;
    }
    this.fruits.splice(index - 1, 0, this.fruits.splice(index, 1)[0]);
  };

  down = index => {
    if (index + 1 > this.fruits.length) {
      return;
    }
    this.fruits.splice(index + 1, 0, this.fruits.splice(index, 1)[0]);
  };
}
