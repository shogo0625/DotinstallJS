'use strict';

{
  function update() {
    // querySelector(要素のセレクタ)文書内（DOM）から特定の要素をひとつ取得する
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    // document.getElementById('target').textContent = 'Changed!';
    // querySelectorAll(要素のセレクタ)文書内（DOM）から特定の要素をすべて取得する 
    // document.querySelectorAll('p')[1].textContent = 'Changed!'; インデックス番号を渡して指定可
    // すべての p 要素を取得して forEach で処理
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
  }

  setTimeout(update, 1000);

  // 同じ標的に対して複数回DOM取得する場合は定数化する
  const targetNode = document.getElementById('target');
  // addEventListener (イベントの種類, 実行したい関数)　下の例ではアロー関数で渡している
  document.querySelector('button').addEventListener('click', () => {
    // targetNode.textContent = 'Changed!';
    targetNode.title = 'This is title!';

    // classNameを使うと元々ついているクラスと置き換えてしまう
    // targetNode.className = 'my-color';
    // targetNode.classList.add('my-color');
    // classList.contains('クラス名')　引数で渡したクラスを保持しているかどうかtrue or falseで返す
    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // } このようなクラスを付けたり外したりは toggle で可能
    targetNode.classList.toggle('my-color');
    // dataset.クラス名の後半　htmlのカスタムデータ属性を取得する
    targetNode.textContent = targetNode.dataset.translation;

    // li要素を1つ追加し親要素の ulに追加する
    // createElement　引数で渡す要素を生成する
    const item2 = document.createElement('li');
    item2.textContent = 'item 2';

    const ul = document.querySelector('ul');
    // appendChild　取得した要素に、引数で渡した要素を子要素の最後として追加する
    ul.appendChild(item2);

    // item0 を取得しコピー => cloneNode(true or false 要素の中身を複製するかどうか）
    const item0 = document.querySelectorAll('li')[0];
    const copy = item0.cloneNode(true);

    // const ulist = document.querySelector('ul');
    const item1 = document.querySelectorAll('li')[1];
    // insertBefore(挿入する要素, beforeの対象)
    ul.insertBefore(copy, item1);
    // remove メソッド は古いブラウザでは使えない
    // 親Node.removeChild(削除するNode)　だと使える
    ul.removeChild(item1);
  });
}
// input form の入力内容をリストに追加
{
  document.getElementById('add').addEventListener('click', () => {
    const li = document.createElement('li'); // まずli要素を作る
    const text = document.querySelector('input'); // inputフォームを取得する
    li.textContent = text.value; // inputフォームのvalueを作成したliのテキストとして代入
    document.getElementById('added_list').appendChild(li); // 親要素である ul の子要素として追加
    // 入力されたinput formを空にし、フォーカスさせる
    text.value = '';
    text.focus();
  });
}
// select の値をリストに追加
{
  document.getElementById('select_add').addEventListener('click', () => {
    const li = document.createElement('li');
    const color = document.querySelector('select');
    // select の場合、valueで値、selectedIndex で選択された値が何番目か取得できる
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    document.getElementById('added_list').appendChild(li);
  });
}
// ラジオボタン
{
  document.getElementById('radio_add').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    // 変数で選択された値を保持
    let selectedColor;

    colors.forEach(color => {
      if (color.checked === true) { // checkedでラジオボタンが選択されているか調べられる
        selectedColor = color.value;
      }
    });

    const li = document.createElement('li');
    li.textContent = selectedColor;
    document.getElementById('added_list').appendChild(li);
  });
}
// チェックボックス
{
  document.getElementById('check_add').addEventListener('click', () => {
    const colors = document.querySelectorAll('input');
    // 選択されたチェック項目を配列に保持（複数可のため配列） 値は入るが、再代入はされないため定数
    const selectedColors = [];

    colors.forEach(color => {
      if (color.checked === true) {
        selectedColors.push(color.value);
      }
    });

    const li = document.createElement('li');
    // joinメソッド　配列の中身をスペース区切りで文字列へ(カンマ区切りの場合は引数のカッコ自体省略可)
    li.textContent = selectedColors.join(' ')
    document.getElementById('added_list').appendChild(li);
  });
}

// いろいろな event
{
  // ダブルクリック時に実行
  document.getElementById('event').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  // mousemove に引数を渡す(慣習的に e )と XY 座標を取得できる
  document.addEventListener('mousemove', e => {
    // console.log('moved!');
    console.log(e.clientX, e.clientY);
  });

  // keydown キーボードの何を押したか取得できる
  document.addEventListener('keydown', e => {
    console.log(e.key);
  });

  // フォーム入力に関するイベント
  const text = document.querySelector('textarea');
  // focus フォーカスがあたったとき
  text.addEventListener('focus', () => {
    console.log('focus');
  });
  // blur フォーカスが外れたとき
  text.addEventListener('blur', () => {
    console.log('blur');
  });
  // input 内容が更新されたとき
  text.addEventListener('input', () => {
    // console.log('input');
    console.log(text.value.length);
  });
  // change 更新が確定されたとき
  text.addEventListener('change', () => {
    console.log('change');
  });
}

// form タグのイベント　引数にイベントオブジェクト（ e )渡せる
{
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault(); // 規定の動作をキャンセルする
    console.log('submit');
  });
}

// イベントの伝播　親要素にEventListenerを設定すれば、子要素にも反映できる
// EvventListenerを追加した要素＝ e.currentTarget　クリックした要素＝ e.target
{
  document.getElementById('todo').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}
