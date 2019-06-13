 //添加到購物車模組
 var car = 1; //宣告數量起始值為1
function myFunction() {
	x = document.getElementById("Howmuch");  // 加入購物車
	x.innerHTML = " 購物車" + car++;    // 數量
}