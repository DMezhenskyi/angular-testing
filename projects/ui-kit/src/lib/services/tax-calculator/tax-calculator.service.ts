import { Injectable } from '@angular/core';

export interface Country {
  [key: string]: {
    name: string;
    vat: number;
  };
}

@Injectable({
  providedIn: 'root',
})
export class TaxCalculatorService {
  readonly countries: Country = Object.freeze({
    ua: { name: 'Ukraine', vat: 20 },
    at: { name: 'Austria', vat: 20 },
    de: { name: 'Germany', vat: 19 },
    uk: { name: 'United Kingdom', vat: 20 },
    ge: { name: 'Georgia', vat: 18 },
  });
  
  /**
   * Expectation 1: It throws error if country isn't supported
   * Expectation 2: It throws error if the price less then 0
   * Expectation 3: Always returns 0 if isB2B flag set to true
   * Expectation 4: Calculates VAT amount based on country
   */
  calculateVAT(price: number, countryKey: string, isB2B = false) {
    if (!this.countries[countryKey]) {
      throw new Error(`This country isn't supported...`);
    }
    if (price < 0) {
      throw new Error(`The price can not be a negative number...`);
    }
    if (isB2B) {
      return 0;
    }
    return (price / 100) * this.countries[countryKey].vat;
  }
}
