# AngularCicd

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
# CI/CD環境の概要

このプロジェクトでは以下のCI/CD環境およびテスト・フレームワークを導入しています：

## テストフレームワーク

### 1. Karma + Jasmine

- **目的**: Angular標準のユニットテストフレームワーク
- **設定ファイル**: `karma.conf.js`（Angular CLIによって内部的に管理）
- **実行方法**: `npm test` または `ng test`
- **特徴**:
  - ブラウザ環境でテストを実行（実際のDOM操作を含むテストに適しています）
  - Angular公式のテスト環境として組み込まれている
  - コンポーネントのレンダリング、DOM操作のテストに強み

### 2. Jest

- **目的**: 高速で信頼性の高いユニットテスト
- **バージョン**: v29.7.0
- **設定ファイル**: `jest.config.js`
- **実行方法**: `npm run test:jest`
- **特徴**:
  - Node.js環境でテストを実行（高速）
  - スナップショットテスト機能
  - モック機能が充実
  - 並列テスト実行による高速化

### 3. Playwright

- **目的**: エンドツーエンド（E2E）テスト
- **バージョン**: v1.51.1
- **設定ファイル**: `playwright.config.ts`
- **実行方法**: `npm run test:e2e`
- **特徴**:
  - 複数のブラウザ（Chromium, Firefox, WebKit）をサポート
  - モバイルデバイスのエミュレーション
  - ネットワークインターセプト機能
  - 自動待機機能によるテストの安定性向上

## GitHub Actions ワークフロー

### CI (継続的インテグレーション)

- **ワークフローファイル**: `.github/workflows/ci.yml`
- **トリガー**: メインブランチへのプッシュ、プルリクエスト
- **実行内容**:
  1. Node.js環境のセットアップ
  2. 依存関係のインストール
  3. コードフォーマットチェック（Prettier）
  4. コード静的解析（ESLint）
  5. アプリケーションのビルド
  6. Karmaによるユニットテスト
  7. Jestによるユニットテスト
  8. Playwrightによるエンドツーエンドテスト
  9. ビルド成果物とテストレポートのアップロード
- **特記事項**:
  - フォーマットチェックをLintの前に実行することで、効率的な検証を実現
  - 複数のテストフレームワークでアプリケーションを検証
  - テスト成果物をアーティファクトとして保存

### CD (継続的デリバリー/デプロイメント)

- **ワークフローファイル**: `.github/workflows/cd.yml`
- **トリガー**: メインブランチへのプッシュ
- **実行内容**:
  1. Node.js環境のセットアップ
  2. 依存関係のインストール
  3. プロダクション用ビルド（ベースURLの設定含む）
  4. GitHub Pagesへのデプロイ
- **特記事項**:
  - `--base-href=/angular-cicd/` オプションを使用してGitHub Pages用のベースパスを設定
  - GitHub Pages専用のデプロイアクションを使用して自動デプロイを実現

## ローカル開発ツール

- **linting**: `npm run lint` - ESLintによるコード品質チェック
- **linting (修正)**: `npm run lint:fix` - 自動修正可能な問題を修正
- **フォーマット**: `npm run format` - Prettierによるコードフォーマット
- **フォーマットチェック**: `npm run format:check` - フォーマットに準拠しているか確認

## CI/CD環境導入の利点

1. **品質保証**: 自動テストでコード品質を継続的に確保
2. **早期発見**: 問題を早期に発見し、修正コストを削減
3. **自動デプロイ**: 手動操作なしでGitHub Pagesに自動デプロイ
4. **信頼性**: 複数のテストレイヤーによる堅牢なテスト体制
5. **開発効率**: チーム開発での品質標準を自動的に強制
