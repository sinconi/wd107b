
//撈產品資料模組
var a = 0; //宣告變數a由0開始
var b = 0; //宣告變數b由0開始
var c = 0; //宣告變數c由0開始
var mydata = JSON.parse(data1); //撈出json檔資料
var cardX = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9"]; //用陣列表示現在的產品名稱
var cmoneyX = ["cmoney1", "cmoney2", "cmoney3", "cmoney4", "cmoney5", "cmoney6", "cmoney7", "cmoney8", "cmoney9"]; //用陣列表示現在的產品價格

for (var d = 0;d < 10;d++) {
	document.getElementById(cardX[b++]).innerHTML = mydata[a++].name; //將產品名稱寫入對應地點
	document.getElementById(cmoneyX[c++]).innerHTML = "NT" + mydata[d].money + "$"; //將產品價格寫入對應地點
}