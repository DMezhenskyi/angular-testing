import { TaxCalculatorService, Countries } from "./tax-calculator.service"

describe(`TaxCalculatorService`, () => {
  let service: TaxCalculatorService;
  let testCountries: Countries;
  beforeEach(() => {
    testCountries = { ua: { name: 'Ukraine', vat: 20 } };
    service = new TaxCalculatorService(testCountries)
  })
  it(`should return 0 if isB2B flag is true`, () => {
    const result = service.calculateVAT(100, 'ua', true);
    expect(result).toBe(0);
  })
  it(`should properly calculate VAT for a given country`, () => {
    const result = service.calculateVAT(100, 'ua');
    expect(result).toBe(20);
  })
  describe(`TaxCalculatorSevice: Error Handling`, () => {
    it(`should throw error if country isn't supported`, () => {
      expect(() => service.calculateVAT(100, 'ir'))
        .toThrowError(/isn't supported/)
    })
    it(`should throw error if price is negative number`, () => {
      expect(() => service.calculateVAT(-100, 'ua'))
        .toThrowError(/negative number/)
    })
  })
})