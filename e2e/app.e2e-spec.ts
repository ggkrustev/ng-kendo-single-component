import { NgKendoSingleComponentPage } from './app.po';

describe('ng-kendo-single-component App', () => {
  let page: NgKendoSingleComponentPage;

  beforeEach(() => {
    page = new NgKendoSingleComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
