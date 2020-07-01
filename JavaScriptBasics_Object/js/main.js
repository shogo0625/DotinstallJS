'use strict';

// 配列
{
  const scores = [80, 90, 40];
  // console.log(scores[1]);
  // scores[2] = 44; 要素の変更

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

// 配列の値の操作
{
  const scores = [80, 90, 40, 70];
  scores.push(60, 50); // 配列の末尾に要素を追加
  scores.unshift(100); // 配列の先頭に要素を追加
  scores.shift(); // 配列の先頭の要素を削除（1つだけ・引数不要）
  scores.pop(); // 配列の末尾の要素を削除（1つだけ・引数不要）
  // 配列.splice( 変化が開始する位置, 削除数, 追加する要素の値（削除だけなら不要） );
  scores.splice(1, 1, 40, 50)

  for (let i = 0; i < scores.length; i++) {
    console.log(`Score ${i}: ${scores[i]}`);
  }
}

// スプレッド構文
{
  const otherScores = [10, 20];
  // スプレッド構文（...配列）　配列の中に別の配列の要素を展開
  const scores = [80, 90, 40, 70, ...otherScores];
  console.log(scores); // => [80, 90, 40, 70, 10, 20]

  // 関数の引数にもよく使われる
  function sum(a, b) {
    console.log(a + b);
  }
  // 展開されて渡される
  sum(...otherScores); // => 10 + 20 = 30
}

// 分割代入
{
  const scores = [80, 90, 40, 70];
  // 分割代入　配列の要素を分割して定数に代入
  const [a, b, c, d] = scores;
  console.log(c); // => 40
  // レスト構文で残りの要素をまとめて配列に代入
  const [first, second, ...others] = scores;
  // 値の入れ替え
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x); // => 70
  console.log(y); // => 30
}

// forEachを使った繰り返し処理（配列の要素の数だけ繰り返し）
{
  const scores = [80, 90, 40, 70];

  // 配列.forEach();　引数に関数を渡す
  // 関数の第１引数には対象の配列の要素が、第２引数にはインデックス番号が繰り返し代入
  scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`);
  });
}

// map 配列に対して関数内の処理をし、新しい配列を返す
// 引数には関数を渡し、関数の引数には対象の配列の要素が繰り返し代入
// map自体の返り値（新しい配列）を定数に代入すると良い
{
  const prices = [180, 190, 200];
  // 20円ずつ値上げした金額で新しい配列を作成
  const updatePrices = prices.map((price) => {
    return price + 20;
  });
  // => 一行に省略（引数が１つの場合（）不要 ＆ 処理がreturnの１行のみの場合中括弧も不要）
  // const updatePrices = prices.map(price => price + 20);
  console.log(updatePrices); // => [200, 210, 220]
}

// filter 配列の要素で条件の合うものだけで別の配列を作成
{
  const numbers = [1, 4, 7, 8, 10];

  // const evenNumbers = numbers.filter(number => {
  //   if (number % 2 === 0) {
  //     return true
  //   } else {
  //     return false
  //   }
  // });
  const evenNumbers = numbers.filter(number => number % 2 === 0);

  console.log(evenNumbers); // => [4, 8, 10]
}

// オブジェクト
{
  const point = {
    // プロパティ（メンバー）
    x: 100,
    // キー： 値
    y: 180,
  };
  // 値の変更
  point.x = 120;
  // point['x'] = 120;

  console.log(point.x);
  console.log(point['y']);

  // プロパティの追加・削除
  point.z = 90;
  delete point.y;
  console.log(point); // => {x: 120, z: 90}
}

// スプレッド構文・分割代入・レスト構文
{
  const otherProps = {
    r: 4,
    color: 'red',
  };
  // スプレッド構文で代入
  const point = {
    x: 100,
    y: 180,
    ...otherProps,
  };
  console.log(point); // => {x: 100, y: 180, r: 4, color: "red"}
  // 分割代入とレスト構文
  const { x, r, ...others } = point;
  console.log(x); // => 100
  console.log(r); // => 4
  console.log(others); // => {y: 180, color: "red"}
}

// Object.keys(オブジェクト名); でオブジェクトのキーを配列に入れられる
{
  const point = {
    x: 100,
    y: 180,
  };

  const keys = Object.keys(point); // => keys = point [x, y]
  keys.forEach(key => {
    console.log(`Key: ${key} Value: ${point[key]}`);
  });

  const points = [
    { x: 30, y: 20 },
    { x: 10, y: 50 },
    { x: 40, y: 40 },
  ];
  console.log(points[1].y); // => 50
}

// スプレッド構文で配列の値ごとコピー
{
  let x = [1, 2]
  let y = x;
  x[0] = 5;
  // y は x が[1, 2]のときに代入されたが、結果は[5, 2]となる => 値自体を代入している訳ではないため
  console.log(x); // => [5, 2]
  console.log(y); // => [5, 2]

  // 値ごとコピーしたい場合は、値の部分でスプレッド構文を利用する
  y = [...x]; // => [1, 2]
}

// データを操作する命令
{
  const str = 'hello';
  // length 文字列の長さを取得
  console.log(str.length); // => 5
  // substring(開始位置, 終了位置) 文字列を部分的に取得
  console.log(str.substring(2, 4)); // => 'll'
  // 配列のように[]でも取得できる
  console.log(str[1]); // => 'e'

  // join 配列の要素を引数で渡す区切り文字を含めて結合
  const d = [2019, 11, 14];
  console.log(d.join('/')); // => 2019/11/14
  // split 文字列を引数で渡す区切り文字で配列に分割する
  const t = '17:08:24';
  console.log(t.split(':')); // => [17, 08, 24]
  // 分割代入で別々の定数に代入してみる
  const [hour, minute, second] = t.split(':');
  console.log(hour);
  console.log(minute);
  console.log(second);
}

// 数値計算に関する便利な命令
{
  const scores = [10, 3, 9];
  // 平均値を算出する
  let sum = 0;
  scores.forEach(score => {
    sum += score;
  });
  let avg = sum / scores.length;
  console.log(avg); // => 7.3333333
  // 数値の操作
  // Math.floor 小数点以下切り捨て
  console.log(Math.floor(avg)); // => 7
  // Math.ceil 小数点以下繰り上げ
  console.log(Math.ceil(avg)); // => 8
  // Math.round 四捨五入
  console.log(Math.round(avg)); // => 7
  // 数値.toFixed(桁数) 指定した桁数まで数値を丸める
  console.log(avg.toFixed(3)); // => 7.333
  // 乱数を生成（０以上１未満の数値をランダムで表示）
  console.log(Math.random());
  // Math.floor(Math.random() * (max + 1 - min) + min) 整数値をランダムに生成
  console.log(Math.floor(Math.random() * 6) + 1);
}

// 日時の取得
{
  const d = new Date(); // => 現在日時の取得
  console.log(d);

  console.log(`${d.getMonth() + 1} 月 ${d.getDate()} 日`); // => 7月1日

  // 時間を指定して取得
  const date = new Date(2019, 10); // => 2019/11/01 00:00:00 (0から数えられるため11月)
  date.setHours(10, 20, 30); // => 2019/11/01 10:20:30
  date.setDate(date.getDate() + 3); // => 2019/12/04 00:00:00
  console.log(date);
}

// alert() や confirm()
{
  alert('Hello');
  // confrim の戻り値（キャンセル or OK）を定数に代入し、条件分岐
  const answer = confirm('削除しますか？');
  if (answer) {
    console.log('削除しました。');
  } else {
    console.log('キャンセルしました。');
  }
}

// どちらも1秒毎に日時をコンソール出力するタイマー処理
{
  // setInterval 
  let i = 0;
  // 現在日時を表示する関数
  function showTime() {
    console.log(new Date());
    i++;
    if (i > 2) {
      // setIntervalの繰り返しを止める。setIntervalで呼び出している関数内に記入
      clearInterval(intervalId);
    }
  }
  // setInterval(関数(カッコは付けない), ミリ秒) => 渡した関数をミリ秒間隔で実行する
  // setIntervalを定数に代入し、clearIntervalの引数に渡す
  const intervalId = setInterval(showTime, 1000);

  // setTimeout
  let t = 0;
  // 現在日時を表示する関数
  function checkTime() {
    console.log(new Date());
    // setTimeout(関数(カッコは付けない), ミリ秒) => 渡した関数を指定した時間経過後に1度だけ実行する
    // setTimeoutを定数に代入し、clearTimeoutの引数に渡す
    const timeoutId = setTimeout(checkTime, 1000);
    t++;
    if (t > 2) {
      // setTimeoutの繰り返しを止める。setTimeoutで呼び出している関数内に記入
      clearTimeout(timeoutId);
    }
  }
  // 最初に一度呼ぶ あとは関数内で繰り返し
  checkTime();
}

// 例外処理
{
  const name = 'taguchi';

  try {
    // 文字列を大文字に変換する
    console.log(name.toUpperCase());
  } catch (e) { // tryの中で例外が置きた時の処理 引数で渡した文字にエラーの情報が入る
    console.log(e);
  }

  console.log('Finished!');
}

// 複数のオブジェクト
{
  const posts = [
    {
      text: 'JavaScriptの勉強中...',
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  show(posts[0]);
}
// プロパティにメソッドをもたせる
{
  const posts = [
    {
      text: 'JavaScriptの勉強中...',
      likeCount: 0,
      show() { // メソッド　show: function() の形を省略
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() { // メソッド　show: function() の形を省略
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];

  posts[0].show();
}
// クラス
{
  class Post { // 親クラス
    // constructorメソッドでプロパティを初期化　new Postでインスタンス作成時に呼び出される
    // this はクラスで作られるインスタンス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    // 静的メソッド(static)　インスタンスから呼び出さずに直接クラスから呼び出すメソッド
    // thisは使ええない　インスタンスを作らず（使わず）に呼び出すため
    static showInfo() {
      console.log('Post class vesion 1.0');
    }
  }

  class SponsoredPost extends Post { // 子クラス
    // constructorメソッドでプロパティを初期化　new クラス名でインスタンス作成時に呼び出される
    // this はクラスで作られるインスタンス
    constructor(text, sponsor) {
      super(text); // 親クラスのconstructorを呼ぶ（引数必要）
      this.sponsor = sponsor;
    }

    show() {
      super.show();
      console.log(`..... Sponsored by ${this.sponsor}`)
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中...'),
    new Post('プログラミング楽しい！'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[0].like();
  posts[1].show();

  Post.showInfo();

  posts[2].show();
  posts[2].like();
}