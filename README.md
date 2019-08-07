# README

## タイトル
### 『画像・映像連動型スポーツショップapp』
 
## URL
https://shielded-crag-66667.herokuapp.com/

## 制作背景
#### YouTube等の動画サイトで、スポーツ映像を楽しんでいるとその選手が身につけているユニフォーム、アイテム、道具が欲しくなることがあります。しかし、これまでのアプリケーションサービスでは、『動画配信サイト』と『商品を購入するサイト』が別々になり、『動画配信サイト』を訪れた後、改めて別のサイトへ訪れる必要性がありました。また、別のサイトでは商品イメージが異なり、選手が身につけているものかをUserが改めて判断しなければならないと感じました。これは、Userにとって、とても不便だと感じました。そこで、同一サイト、またはページ内で動画を楽しむページ、商品を購入するページを実装し、Userの手間を省くことができるのではないかと考えました。また、サイト内でUserが留まる時間が増加すれば、サイトの運営者は広告収入の増加が見込めるのではないかと考えました。ただ、本来はAIによって画像解析を行い、自動で関連する商品を表示されることを行いたいと思いましたが、現状では技術不足ということで、Railsを使用したサイトイメージ（雛形）を制作しました。

## アプリの一部画面
#### トップページ
![トップページ](https://user-images.githubusercontent.com/51018339/62623221-4f977800-b95b-11e9-83c9-f884031ae029.png)
#### News&Weatherページ
![NEWS＆WEATHER](https://user-images.githubusercontent.com/51018339/62623391-ac932e00-b95b-11e9-90d9-9fb1e48e6af8.png)
　
## 工夫点と機能
#### 基本方針:User(サーファー)が、どのようなフロント実装や機能が望んでいるか、楽しんで利用してもらえるかをイメージして実装しました。
#### ・当然サーファーの方は天気を気にされると考え、API(Open-weather-map)による天気予報を表示させました。
#### ・トップページにJQuery.Ripple.jsを採用し、水中にいる臨場感をよりもってもらえるように画面実装を行いました。
#### ・配信される記事が、Userがいつ頃のことをさしているのかを把握しやすくなるよう、カレンダー機能（Datepicker）を同一ページ内に実装しました。

## 今後追加したい機能
#### ・複数枚による画像投稿機能
#### ・サイト運営者による管理機能(namespace)
#### ・プッシュ通知機能(push.js)
#### ・商品購入機能(pay.jp
