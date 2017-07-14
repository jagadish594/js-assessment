describe('objects and context', () => {
  let a;
  let b;
  let C;

  beforeEach(() => {
    a = {
      name: 'Matt',
      greeting: 'Hello',
      sayIt() {
        return `${this.greeting}, ${
          this.name}!`;
      },
    };

    b = {
      name: 'Rebecca',
      greeting: 'Yo',
    };

    C = function CFunction(name) {
      this.name = name;
      return this;
    };
  });

  it('you should be able to alter the context in which a method runs', () => {
    // define a function for fn so that the following will pass
    expect(objectsAnswers.alterContext(a.sayIt, b)).to.eql('Yo, Rebecca!');
  });

  it('you should be able to alter multiple objects at once', () => {
    // define a function for fn so that the following will pass
    const obj1 = new C('Rebecca');
    const obj2 = new C('Melissa');
    const greeting = 'What\'s up';

    objectsAnswers.alterObjects(C, greeting);

    expect(obj1.greeting).to.eql(greeting);
    expect(obj2.greeting).to.eql(greeting);
    expect(new C('Ellie').greeting).to.eql(greeting);
  });

  it('you should be able to iterate over an object\'s "own" properties', () => {
    // define a function for fn so that the following will pass
    C = function CFunction() {
      this.foo = 'bar';
      this.baz = 'bim';
    };

    C.prototype.bop = 'bip';

    const obj = new C();

    expect(objectsAnswers.iterate(obj)).to.eql(['foo: bar', 'baz: bim']);
  });
});
