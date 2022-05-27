
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(values)).toEqual(VALUE);
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment(5000)).toEqual(249);
});

/// etc
