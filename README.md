# 全国釣り堀マップ

全国の釣り堀を、場所、店舗名、料金、釣れる魚、営業時間、設備、アクセス、レビューで検索・比較できるWebマップ。現在地、都道府県、主要都市、予算、魚種、初心者向け条件から候補を絞り込む。

| 項目 | 内容 |
| --- | --- |
| Rank | 77 |
| Domain | WebApp |
| Idea No. | 13 |
| Repository | fishing-pond-map |
| 主な公開先 | GitHub Pages / Google Play派生 |

## Implementation

- `src/product-profile.mjs`: プロダクト定義。
- `src/core.mjs`: 入力正規化とバッチ評価。
- `src/validators.mjs`: 必須項目と warning 項目の検査。
- `src/review-model.mjs`: UI/レビュー向けモデル。
- `src/report.mjs`: Markdown / HTML レポート生成。
- `src/cli.mjs`: CLI。
- `public/`: 静的WebApp。

## Validation

`npm test` で代表シナリオ、QCDS、docs ZIP、文字化け、WebApp非blank表示を検証します。

## Strict QCDS Docs

- [Remote benchmark](docs/qcds-remote-benchmark.md)
- [Strict metrics](docs/qcds-strict-metrics.json)
- [Traceability matrix](docs/traceability-matrix.md)
- [Release evidence](docs/release-evidence.json)
