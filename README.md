## Course Projects

The course project consists of 2 sub-projects:

- _ui-kit_ - A components library for the course section **Angular Testing Basics**.
- _ui-kit-demoapp_ - The playground for the components library.

## Useful Commands

- `npm run test --project ui-kit` to run tests for the component library.
- `npm run build --project ui-kit -- --watch` to run component library build in watch mode.
- `npm run start` to start the **ui-kit-demoapp**, which is used as a showcase for the library's components, directives, pipes, etc.

## Tasks

1. in the file `type-coercion.ts` file, you can find a group of util functions that perform data type coercion and other simple operations. Choose any function you like and write unit tests that cover different use cases of it. See the comments inside the file to get hits about how functions are supposed to work, and which values it has to return.

2. Write 4 tests for the `TaxCalculatorService`

- Make sure that the service method `calculateVAT` returns `0` if the `isB2B` flag is `true`
- Make sure that the VAT tax is calculated for any given country in the service.
- Write a test that verifies that the attempt to calculate VAT for an unsupported country throws the error, and the error message contains the string `isn't supported`
- Write a test that verifies that `calculateVAT` throws an error if you try to calculate VAT for the negative number, e.g., -100. Make sure that the error message contains the string 'negative number'

3. Services/components/etc. that you test are constantly changing, and if they are badly designed, the changes can break your tests without any reason. For example, at some point, you can start supporting a country you used in one of the tests before. Make sure that it is so by adding an unsupported country to the countries list in the service. Think about how to make it less fragile by using Angular DI. Hint: Use the old @Inject() syntax for DI

- The refactoring of service will break your test. Think about how you could fix it and how you can provide a mock country's value.

4. (Together) Try to refactor the `TaxCalculatorService` with the modern `inject()` function. It should break your test, and it is expected. TestBed class from `@angular/core/testing` can help you with that. Try to create an instance of Service using this TestBed tool.

5. (Together) Show what TestBed is and its features by performing the test case setup for the `ButtonComponent.` Cover what is `fixture,` `debugElement,` Change Detection in TestBed, and how to select elements with `By` helper.

6. Write 3 tests for ButtonComponent.

- Make sure that by default, the button has a 'solid' appearance;
- Make sure that by changing the `appearance` property, the proper CSS classes are applied to the host element.
- Test should verify that the loading icon is visible if the component `loading` property is set to `true`

7. When you query elements for tests using CSS selectors like '.loader, ' it might be quite dangerous because CSS selectors can be changed at any time and break our tests. It is hard to determine immediately if a CSS selector is used in the test or not, so it is a good practice to use "obvious" selectors in component templates
   like `[data-testId="loader"]` attribute, which might immediately give us a hint that some test might use it. Try to adjust all your current selectors accordingly.

8. Change the ChangeDetection strategy for your component to OnPush. Surprise! Your test will fail again. Prior to Angular 14.1, the solution would require a significant amount of work. From Angular 14.1, there is a method `setInput` for the
   created component and you can access it from the fixture.

9. Our button has a `disabled` state. When the button is disabled, it means that all default behaviors for the events, e.g., clicking, should be prevented. For example, the host element for your button might be a link. By default, clicking on the link will navigate you to another page, and this behavior must be prevented in a disabled state. Think about how you could test that the default behavior for the click event is prevented.
