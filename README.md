# typescript

### コンパイル用の設定ファイルを作成

※最初の一回だけ必要。プロジェクトのルートフォルダで実行すると tsconfig.json が作成される。

```
tsc –-init
```

### javascript 変換(コンパイル)

ウォッチモードの場合、ファイルに変更があった場合自動でコンパイルされる

```
tsc

//ウォッチモード
tsc --watch
```

### コンパイルしたくないファイルの除外

tsconfig.json に以下を追加

```
//ワイルドカードも使えるよ
"exclude": ["ファイル名.ts"]

```

### 特定のファイルのみコンパイル

tsconfig.json に以下を追加
※インクルード配列に設定されていないファイルはコンパイルされない

```
"include": [
    "app.ts"
]

//ファイル単位のみ
"files": [
    "app.ts"
]
```

### WSL の html を開く

```
explorer.exe index.html
```
