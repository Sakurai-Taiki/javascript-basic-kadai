//現在の日付

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // 月の取得、月は0から始まるため+1する
const day = today.getDate();

console.log(year + '年' + month + '月' + day + '日');
