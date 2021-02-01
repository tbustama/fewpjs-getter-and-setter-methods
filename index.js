// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }
  get circumference() {
    return this.diameter * Math.PI;
  }
  get area() {
    return this.radius * this.radius * Math.PI;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
    return 2 * this.radius;
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
    return this.radius * 2 * Math.PI;
  }
  set area(radius) {
    this.radius = radius;
    return radius * radius * Math.PI;
  }
}
