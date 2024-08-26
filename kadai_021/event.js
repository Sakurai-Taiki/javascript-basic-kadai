//btn要素の取得と出力
const btn = document.getElementById('btn');

//text要素の取得と出力
const text = document.getElementById('text');

//非同期処理
  btn.addEventListener('click', () => {
    setTimeout (() => {
    text.textContent ='ボタンをクリックしました';
  }, 2000);
});