export class NumbersCollection {
  constructor(public data: number[]) {};

  get length(): number { // the keyword get allows to create a getter so when calling the property is not necesary to call a function but access it as a property
    return this.data.length;
  };

  compare(leftIndex: number, rightIndex: number): boolean{
    return this.data[leftIndex] > this.data[rightIndex];
  };

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand

  };
}