export class Temperature {
  value: number;

  constructor(value: number) {
    if (value > 2) {
      this.value = 2;
    } else if (value < 0) {
      this.value = 0;
    } else {
      this.value = value;
    }
  }

  update(temperature: Temperature) {
    return new Temperature(temperature.value);
  }
}
