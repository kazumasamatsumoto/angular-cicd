import 'jest-preset-angular/setup-jest';

// グローバルなJestマッチャーを設定
global.beforeEach(() => {
  // カスタムマッチャーなどの追加設定があれば記述
});

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
      getPropertyValue: (prop: string) => {
        return '';
      }
    };
  }
});
