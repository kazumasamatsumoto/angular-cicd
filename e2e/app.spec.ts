import { test, expect } from '@playwright/test';

test.describe('アプリケーションのテスト', () => {
  test('ホームページが表示されること', async ({ page }) => {
    // ホームページにアクセス
    await page.goto('/');
    
    // ページタイトルを確認
    const title = await page.title();
    expect(title).toBeTruthy();
    
    // ページ内容が表示されていることを確認
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
