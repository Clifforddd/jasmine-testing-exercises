it('should calculate the monthly rate correctly', function() {
  // ...
  let values = {
    amount: 1000,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual("18.64");
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 1200,
    years: 5,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual("22.37");
});


/// etc
