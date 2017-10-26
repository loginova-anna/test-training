import { TestTrainingPage } from './app.po';

describe('test-training App', () => {
  let page: TestTrainingPage;

  beforeEach(() => {
    page = new TestTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
