describe('sample test', () => {
  let sum = 0;
  const func = jest.fn(() => 3);

  // beforeAll(() => {
  //   sum = 0;
  // });

  it('should return 1', () => {
    expect(sum + 1).not.toEqual(10);
    expect(sum + 1).toEqual(1);
  });

  test('should return 3', () => {
    sum = 1;
    expect(sum + 2).toEqual(3);
  });

  it('return 3 from mock function', () => {
    expect(func()).toEqual(3);
    expect(func).toHaveBeenCalledTimes(1);
    expect(func).toHaveBeenCalledWith();
  });
});

describe('App component should not have state', () => {
  let number;
  it('foo', () => {
    number = 10;
    expect(number).toBeDefined();
  });
});
