export const productProfile = {
  "repository": "fishing-pond-map",
  "title": "全国釣り堀マップ",
  "domain": "WebApp",
  "hostApp": null,
  "rank": 77,
  "tier": "P2",
  "ideaNo": 13,
  "overview": "全国の釣り堀を、場所、店舗名、料金、釣れる魚、営業時間、設備、アクセス、レビューで検索・比較できるWebマップ。現在地、都道府県、主要都市、予算、魚種、初心者向け条件から候補を絞り込む。",
  "problem": "釣り堀の情報は公式サイト、地図、SNS、口コミに分散し、料金、魚種、営業状況、初心者や家族向けかどうかを横断比較しにくい。",
  "differentiation": "釣り堀選びに必要な料金プラン、魚種、レンタル、持ち帰り、駐車場、主要地点からのアクセス、情報確認日を地図検索と比較表に集約する。",
  "publish": "GitHub Pages / Google Play派生",
  "surface": "Static WebApp + CLI validation core",
  "entity": "pond listing",
  "requiredFields": [
    "id",
    "title",
    "prefecture",
    "address",
    "facilityType",
    "owner"
  ],
  "warningField": "sourceUrl",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
