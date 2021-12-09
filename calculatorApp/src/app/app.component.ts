import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monitor: string = "0";

  buttons: string[] = [
    "C",
    "+-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "X",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",

  ];

  numbers: string[] = [
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
  ];

  operators: string[] = ["/", "X", "-", "+",];

  currentOperator: string = "none";
  operand1: number = 0;
  operand2: number = 1;


  getButtonClass(button: string): string {
    return button == '=' ? 'buttons equals' : 'buttons';
  }

  pressButton(content: string) {
    const isNumber: boolean = this.numbers.indexOf(content) > -1;
    const isOperator: boolean = this.operators.indexOf(content) > -1;

    switch (content) {
      case "C":
        this.pressButtonClear();
        break;
        case "%":
          this.pressPercentButton();
          break;
        case "+-":
          this.pressChangeSignButton();

          break;
        case "=":
          this.pressEqualBotton();
          break;

      default:
        if(isNumber){
          this.pressButtonNumber(content);
          return;
        }else if(isOperator){
          this.pressButtonOperator(content);
          return;
        }

        alert("You press an unknown button.");

        break;
    }

    // if (isClear) {
    //   this.pressButtonClear();
    //   return;
    // }

    // if(isPercent){
    //   this.pressPercentButton();
    // }

    // if(isSign){
    //   this.monitor = String(Number(this.monitor) * -1);
    // }

    // if (isNumber) {
    //   this.pressButtonNumber(content);
    //   return;
    // }

    // if (isEqual) {
    //   this.pressEqualBotton();
    // }

    // if (isOperator) {
    //   this.pressButtonOperator(content);
    //   return;
    // }
  }

  private pressChangeSignButton() {
    this.monitor = String(Number(this.monitor) * -1);
  }

  private pressPercentButton() {
    this.operand1 = Number(this.monitor);
    this.monitor = String(this.operand1 / 100);
    this.operand1 = 0;
  }

  pressButtonNumber(number: string): void {
    if (this.operand1 != 0) {
      this.monitor = "0";
    }

    this.monitor += number;
    this.monitor = Number(this.monitor).toString();
    return;
  }

  pressButtonOperator(operator: string): void  {
    this.operand1 = Number(this.monitor);
    this.currentOperator = operator;
    return;
  }

  pressButtonClear(): void  {
    this.monitor = "0";
    return;
  }

  pressEqualBotton(): void  {
    const entityMap: Map<string, Function> = new Map([
      ['+', (a: number, b: number) => {

        return a + b;
      }],
      ['-', (a: number, b: number) => {

        return a - b;
      }],
      ['X', (a: number, b: number) => {

        return a * b;
      }],
      ['/', (a: number, b: number) => {

        return a / b;
      }],
    ]);

    const operation = entityMap.get(this.currentOperator);

    if (this.operand1 != 0) {
      this.operand2 = Number(this.monitor);
      this.monitor = operation!(this.operand1, this.operand2);
      console.log(operation!(this.operand1, this.operand2));

      this.operand1 = 0;
      this.operand2 = 0;
      this.currentOperator = "none";
    }
  }
}
