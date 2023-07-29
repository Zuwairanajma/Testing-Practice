const { addition, subtraction, multiplication, division } = require('./calculatorMethods');
describe('add function', () => 
{
  it('adds 2 numbers', () => 
  {
    expect(addition(1, 2)).toBe(3);
  });
});

describe('subtract function', () => 
{
it('returns positive for subtracting from higher number', () => 
{
  expect(subtraction(2, 1)).toBe(1);
});
});

describe('multiple function', () => 
  {
it('multiples 2 numbers', () => 
    {
      expect(multiplication(2, 3)).toBe(6);
    });
});

describe('divide function', () => 
  {
      test('correctly divides two numbers', () => 
      {
        expect(division(21, 3)).toBe(7);
      });
    });