import { Angular.001.JquerySortablePage } from './app.po';

describe('angular.001.jquery-sortable App', () => {
  let page: Angular.001.JquerySortablePage;

  beforeEach(() => {
    page = new Angular.001.JquerySortablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
