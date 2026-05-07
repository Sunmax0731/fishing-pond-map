# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 77 |
| Domain | WebApp |
| Idea No. | 13 |
| Repository | fishing-pond-map |
| 主な公開先 | GitHub Pages / Google Play派生 |

## 背景

釣り堀の情報は公式サイト、地図、SNS、口コミに分散し、料金、魚種、営業状況、初心者や家族向けかどうかを横断比較しにくい。

## 目的

全国の釣り堀を、場所、店舗名、料金、釣れる魚、営業時間、設備、アクセス、レビューで検索・比較できるWebマップ。現在地、都道府県、主要都市、予算、魚種、初心者向け条件から候補を絞り込む。

## 必須要件

- pond listing を複数件まとめて検証できる。
- required fields: `id`, `title`, `prefecture`, `address`, `facilityType`, `owner`。
- warning field: `sourceUrl`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
