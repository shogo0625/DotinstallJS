'use strict'

let price = 500;
price += 100;
console.log(typeof null);

// switch文で条件分岐
const signal = 'yellow';

switch (signal) {
  case 'red':
    console.log('Stop!');
    break;
  case 'yellow':
    console.log('Caution!');
    break;
  case 'blue':
  case 'green':
    console.log('Go!');
    break;
  default:
    console.log('Wrong Signal');
    break;
}

// テンプレートリテラル（式展開）
// console.log(`hello ${name}`);

// forでの繰り返し
for (let i = 0; i < 5; i++) {
  console.log(`number ${i}`);
}
// whileでの繰り返し
let hp = 50;
while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15;
}
// do {} while (条件式)　必ず一度は実行される
do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 100);
// continueで処理をスキップさせる　breakだと繰り返し自体抜ける
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    continue;
  }
  console.log(i);
}

// 関数で処理をまとめる
function showAd(ad = '広告') { // デフォルト値を設定　定義文の引数を仮引数（値を仮置き）と呼ぶ
  console.log(`----- ${ad} -----`);
}

console.log('Tom is great!')
showAd('AD'); // 呼出時の引数を実引数と呼ぶ
console.log('Bob is great!')
showAd('アド');
console.log('Steve is great!')
showAd('あど');
console.log('Sam is great!')
showAd(); // 何も渡さない場合はデフォルトが反映される

// 関数宣言
function sum1(a, b, c) {
  return a + b + c;
}
// 関数式（式に代入する場合はセミコロン必要） function後に名前がついてないことから無名関数とも呼ばれる
const sum2 = function (a, b, c) {
  return a + b + c;
};
// 関数式はアロー関数で書換可能
// 処理内でreturnするだけの場合、中括弧省略可
// const sum3 = (a, b, c) => a + b + c;
// さらに、引数が1つだけの場合、仮引数の（）も不要
// const double = a => a * 2;
const sum3 = (a, b, c) => {
  return a + b + c;
}

const total = sum1(1, 2, 3) + sum2(4, 5, 6) + sum3(7, 8, 9);
console.log(total);

// スコープ＝有効範囲　グローバルスコープ＝ブロックの中などではなく、どこからでも呼び出せるスコープ
// 書いたコードはブロック｛　｝ で分けることで他のスクリプトに影響を受けない
