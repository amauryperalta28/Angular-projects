import { Component } from '@angular/core';
import { CalculatorButton } from './models/button.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calculatorMonitor: string = "0";

  buttons: CalculatorButton[] = [
    {text:"C", performAction: () => this.pressClearButton()  },
    {text:"+-", performAction: () => this.pressChangeSignButton() },
    {text:"%", performAction: () => this.pressPercentButton() },
    {text:"/", performAction: (button: string) => this.pressAnOperatorButton(button) },
    {text:"7", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"8", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"9", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"X", performAction: (button: string) => this.pressAnOperatorButton(button) },
    {text:"4", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"5", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"6", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"-", performAction: (button: string) => this.pressAnOperatorButton(button) },
    {text:"1", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"2", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"3", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:"+", performAction: (button: string) => this.pressAnOperatorButton(button) },
    {text:"0", performAction: (button: string) => this.pressButtonNumber(button) },
    {text:".", performAction: () => this.pressDotButton() },
    {text:"=", performAction: () => this.pressEqualButton() },
  ];

  currentOperator: string = "none";
  operand1: number = 0;
  operand2: number = 0;
  dotIsAdded: boolean = false;
  wasPressedOperator: boolean = false;

  getButtonClass(pressedButton: string): string {
    return pressedButton == '=' ? 'buttons equals' : 'buttons';
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

  private pressButtonNumber(number: string): void {
    if (this.wasPressedOperator) {
      this.calculatorMonitor = "0";
    }

    this.calculatorMonitor += number;
    this.calculatorMonitor = Number(this.calculatorMonitor).toString();
    this.wasPressedOperator = false;

    return;
  }

  private pressAnOperatorButton(operator: string): void {
    this.operand1 = Number(this.calculatorMonitor);
    this.currentOperator = operator;
    this.wasPressedOperator = true;
    return;
  }

  private pressClearButton(): void {
    this.calculatorMonitor = "0";
    this.restartCalculator();
    return;
  }

  private pressEqualButton(): void {
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

  private restartCalculator(): void {
    this.operand1 = 0;
    this.operand2 = 0;
    this.currentOperator = "none";
    this.dotIsAdded = false;
    this.wasPressedOperator = false;
  }
}
