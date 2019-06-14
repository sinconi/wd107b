
//撈產品資料模組
var e = 0; //宣告變數a由0開始
var f = 0; //宣告變數b由0開始
var g = 0; //宣告變數c由0開始
var mydata = JSON.parse(data2); //撈出json檔資料
var stickerX = ["sticker1", "sticker2", "sticker3", "sticker4", "sticker5", "sticker6", "sticker7", "sticker8", "sticker9"]; //用陣列表示現在的產品名稱
var smoneyX = ["smoney1", "smoney2", "smoney3", "smoney4", "smoney5", "smoney6", "smoney7", "smoney8", "smoney9"]; //用陣列表示現在的產品價格

for (var h = 0; h < 10; h++) {
	document.getElementById(stickerX[f++]).innerHTML = mydata[e++].name; //將產品名稱寫入對應地點
	document.getElementById(smoneyX[g++]).innerHTML = "NT" + mydata[h].money + "$"; //將產品價格寫入對應地點
}