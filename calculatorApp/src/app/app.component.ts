import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculatorMonitor: string = "0";

  buttons: string[] = ["C", "+-", "%", "/", "7", "8", "9", "X", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "="];
  numbers: string[] = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0",];
  operators: string[] = ["/", "X", "-", "+",];

  currentOperator: string = "none";
  operand1: number = 0;
  operand2: number = 0;
  dotIsAdded: boolean = false;
  wasPressedOperator: boolean = false;

  getButtonClass(pressedButton: string): string {
    return pressedButton == '=' ? 'buttons equals' : 'buttons';
  }

  pressButton(button: string) {
    const buttonPressed: string = this.numbers.indexOf(button) > -1 ? "number" :
      this.operators.indexOf(button) > -1 ? "operator" : button;

    switch (buttonPressed) {
      case "C":
        this.pressClearButton();
        break;
      case "%":
        this.pressPercentButton();
        break;
      case "+-":
        this.pressChangeSignButton();

        break;
      case "=":
        this.pressEqualButton();
        break;
      case ".":
        this.pressDotButton();

        break;
      case "number":
        this.pressButtonNumber(button);
        break;
      case "operator":
        this.pressAnOperatorButton(button);
        break;

      default:
        alert("You press an unknown button.");
        break;
    }
  }

  private pressDotButton(): void {
    if (!this.dotIsAdded) {
      this.calculatorMonitor += ".";
    }

    this.dotIsAdded = true;
  }

  private pressChangeSignButton(): void {
    this.calculatorMonitor = String(Number(this.calculatorMonitor) * -1);
  }

  private pressPercentButton(): void {
    this.operand1 = Number(this.calculatorMonitor);
    this.calculatorMonitor = String(this.operand1 / 100);
    this.operand1 = 0;

    this.wasPressedOperator = false;
  }

  pressButtonNumber(number: string): void {
    if (this.wasPressedOperator) {
      this.calculatorMonitor = "0";
    }

    this.calculatorMonitor += number;
    this.calculatorMonitor = Number(this.calculatorMonitor).toString();
    this.wasPressedOperator = false;

    return;
  }

  pressAnOperatorButton(operator: string): void {
    this.operand1 = Number(this.calculatorMonitor);
    this.currentOperator = operator;
    this.wasPressedOperator = true;
    return;
  }

  pressClearButton(): void {
    this.calculatorMonitor = "0";
    this.restartCalculator();
    return;
  }

  pressEqualButton(): void {
    const entityMap: Map<string, Function> = new Map([
      ['+', (a: number, b: number) => { return a + b; }],
      ['-', (a: number, b: number) => { return a - b; }],
      ['X', (a: number, b: number) => { return a * b; }],
      ['/', (a: number, b: number) => { return a / b; }],
    ]);

    const performOperation = entityMap.get(this.currentOperator);

    if (this.operand1 != 0) {
      this.operand2 = Number(this.calculatorMonitor);
      this.calculatorMonitor = performOperation!(this.operand1, this.operand2);
      console.log(performOperation!(this.operand1, this.operand2));

      this.restartCalculator();
    }
  }

  restartCalculator(): void {
    this.operand1 = 0;
    this.operand2 = 0;
    this.currentOperator = "none";
    this.dotIsAdded = false;
    this.wasPressedOperator = false;
  }
}
