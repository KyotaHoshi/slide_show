// 1.ノードの取得
// ボタンの取得
const left = document.getElementById("left")
const right = document.getElementById("right")
// 画像の取得
const imgs = document.getElementsByClassName("img")
// const img1 = imgs[0]
// const img2 = imgs[1]
// const img3 = imgs[2]
// const img4 = imgs[3]

let i = 0

// 3.イベント時に呼び出される関数の定義
const moveLeft = () => {
    imgs[i].classList.toggle("appear")
    if(i === 0){
        i = imgs.length - 1
    }else {
        i--
    }
    console.log(i);
    imgs[i].classList.toggle("appear")
    console.log("leftが実行");
    
}

const moveRight = () => {
    imgs[i].classList.toggle("appear")
    if(i === imgs.length - 1) {
        i = 0
    }else {
        i++
    }
    console.log(i);
    imgs[i].classList.toggle("appear")
    console.log("rightが実行");
    
}

// 2.イベントを定義する
left.addEventListener("click", moveLeft)
right.addEventListener("click", moveRight)





/////////////////////////////////////////////////////////////////
// スライドして切り替えるやつ                              //////
// 左のボタンが動作しなかったのはイベントバブリングが原因だった//
// デバッカーで処理を止めて確認することができる              ////
/////////////////////////////////////////////////////////////////


////////////////////////
//   ノードを取得   ///
////////////////////////

const leftB = document.getElementById("left-b")
const rightB = document.getElementById("right-b")

// console.log(leftB);
// console.log(rightB);

const imgsB = document.getElementsByClassName("img-b")


//////////////////////////////////
//    関数で利用する変数の定義  //
//////////////////////////////////

let j = 0
let k = 1
let l = imgsB.length - 1


///////////////////////////
// 画像のクラスの初期設定//
//////////////////////////

imgsB[j].classList.add("non-hidden")

if (imgsB.length >= 2) {
    imgsB[k].classList.add("hidden-right")
}

if (imgsB.length >= 3) {
    imgsB[l].classList.add("hidden-left")
}


if (imgsB.length === 1) {
    leftB.classList.add("none")
    rightB.classList.add("none")
} else if (imgsB.length === 2) {
    rightB.classList.add("none")
}

//////////////////////////////////////////////////////////////
// clickで発生する処理                          //////////////
// if文によって画像の枚数の場合分けをし      /////////////////
// それによって画像の枚数を自由に設定できるようにしました  ///
//////////////////////////////////////////////////////////////

leftB.addEventListener("click", function() {
    if (imgsB.length === 2) {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.add("hidden-left")
        imgsB[k].classList.remove("hidden-right")
        imgsB[k].classList.add("non-hidden")
        leftB.classList.add("none")
        rightB.classList.remove("none")
    }

    else if (imgsB.length >= 3) {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.remove("low-z-index")
        imgsB[k].classList.remove("hidden-right")
        imgsB[k].classList.remove("low-z-index")
        imgsB[l].classList.remove("hidden-left")
        j++
        k++
        l++
        if (j === imgsB.length) {
            j = 0
        }
        if (k === imgsB.length) {
            k = 0
        }
        if (l === imgsB.length) {
            l = 0
        } 
        imgsB[j].classList.add("non-hidden")
        imgsB[k].classList.add("hidden-right")
        imgsB[k].classList.add("low-z-index")
        imgsB[l].classList.add("hidden-left")
    }
    
});

rightB.addEventListener("click", function() {
    if (imgsB.length === 2) {
        imgsB[j].classList.remove("hidden-left")
        imgsB[j].classList.add("non-hidden")
        imgsB[k].classList.remove("non-hidden")
        imgsB[k].classList.add("hidden-right")
        rightB.classList.add("none")
        leftB.classList.remove("none")
    }
    
    else if (imgsB.length >= 3 ) {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.remove("low-z-index")
        imgsB[l].classList.remove("hidden-left")
        imgsB[l].classList.remove("low-z-index")
        imgsB[k].classList.remove("hidden-right")
        j--
        k--
        l--
        if (j === -1) {
            j = imgsB.length - 1
        }
        if (k === -1) {
            k = imgsB.length - 1
        }
        if (l === -1) {
            l = imgsB.length - 1
        } 
        imgsB[j].classList.add("non-hidden")
        imgsB[l].classList.add("hidden-left")
        imgsB[l].classList.add("low-z-index")
        imgsB[k].classList.add("hidden-right")
    }
});
