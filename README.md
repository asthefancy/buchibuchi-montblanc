# ぶちぶちモンブラン 〜タテかヨコか、フォークの行方〜

モンブランにフォークを刺して食べるだけの、中毒性スコアアタック・クソゲー（ブラウザゲーム）。
「縦に刺すと高得点だけど崩れやすい」「横に刺すと安全だけど地味」のトレードオフが軸。

## 遊ぶ
- 公開URL: https://asthefancy.github.io/buchibuchi-montblanc/
- ローカルで動かす: このフォルダで `node local-server.js` を実行 → http://localhost:8123/

## 操作
- 大きな「刺す」ボタンを**長押し**でぶちぶち食べてスコア獲得
- **たて刺し**＝高得点・崩れやすい／**よこ刺し**＝低得点・安全（右上のボタンで切替）
- 構造耐久値が0になると崩壊、制限時間は3分、食べ尽くせば完食クリア

## 技術
- 1ファイル完結（`index.html`）。Canvas 2D + requestAnimationFrame + Web Audio API
- ランキングは localStorage（既定）。`index.html` 上部に Supabase の URL/anon key を入れるとオンライン対応
- ゲームバランスは `index.html` 内の `CFG` でまとめて調整可能
