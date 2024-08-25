//btn要素の取得と出力
const btn = document.getElementById('btn');

//text要素の取得と出力
const text = document.getElementById('text');

//ボタンをクリックで表示切替
btn.addEventListener('click', () =>{
  text.textContent ='ボタンをクリックしました';
});