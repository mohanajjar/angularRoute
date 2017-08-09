import { FirstAngularRouterPage } from './app.po';

describe('first-angular-router App', () => {
  let page: FirstAngularRouterPage;

  beforeEach(() => {
    page = new FirstAngularRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
