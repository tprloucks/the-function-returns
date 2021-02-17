/******************
 * YOUR CODE HERE *
 ******************/

/*********************************************************************************************************************

 * CODE BELOW HERE IS FOR INTERNAL USE ONLY! IT ENSURES THAT THE TESTING *
 * CAN READ AND EVALUATE YOUR CODE. *
 * DON'T CHANGE ANYTHING BELOW HERE, PLEASE! *

 *********************************************************************************************************************/

if (typeof greeting === "undefined") {
  greeting = undefined;
}

if (typeof sum === "undefined") {
  sum = undefined;
}

if (typeof prod === "undefined") {
  prod = undefined;
}

if (typeof greet === "undefined") {
  greet = undefined;
}

if (typeof sumOfTwo === "undefined") {
  sumOfTwo = undefined;
}

if (typeof multiply === "undefined") {
  multiply = undefined;
}

if (typeof sayHi === "undefined") {
  sayHi = undefined;
}

if (typeof returnWhatISay === "undefined") {
  returnWhatISay = undefined;
}

if (typeof divide === "undefined") {
  divide = undefined;
}

if (typeof remainder === "undefined") {
  remainder = undefined;
}

describe("greet", () => {
  it(`sets greeting to be its old value plus the given string, with a space in the middle`, () => {
    greet("mess");
    expect(greeting).toBe("Hello mess");
  });
});

describe("sumOfTwo", () => {
  it(`changes the value of the variable sum to be the sum of the two given numbers`, () => {
    sumOfTwo(2, 4);
    expect(sum).toEqual(6);
  });
});

describe("multiply", () => {
  it(`sets prod to the product of the three given numbers`, () => {
    multiply(2, 2, 2);
    expect(prod).toBe(8);
  });
});

describe("returnWhatISay", () => {
  it(`returns the given string unchanged`, () => {
    const returnValue1 = returnWhatISay("Colin");
    expect(returnValue1).toEqual("Colin");
    const returnValue2 = returnWhatISay("Brian");
    expect(returnValue2).toEqual("Brian");
  });
});

describe("sayHi", () => {
  it(`returns the given string with 'Hello' and a space before it, and an exclamation point after. `, () => {
    const returnValue1 = sayHi("Colin");
    expect(returnValue1).toEqual("Hello Colin!");
    const returnValue2 = sayHi("Mesi!");
    expect(returnValue2).toEqual("Hello Mesi!!");
  });
});

describe("divide", () => {
  it(`returns the result of dividing the first given nubmer by the second given number`, () => {
    const returnValue1 = divide(10, 5);
    expect(returnValue1).toEqual(2);
    const returnValue2 = divide(15, 3);
    expect(returnValue2).toEqual(5);
  });
});

describe("remainder", () => {
  it(`returns the remainder of dividing the first given number by the second given number`, () => {
    const returnValue1 = remainder(10, 3);
    expect(returnValue1).toEqual(1);
    const returnValue2 = remainder(28, 6);
    expect(returnValue2).toEqual(4);
  });
});
