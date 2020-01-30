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
let l = 2
let m = imgsB.length - 1
let n = imgsB.length - 2
let slideLeft
let slideRight


///////////////////////////
// 画像のクラスの初期設定//
//////////////////////////

imgsB[0].classList.add("non-hidden")

if (imgsB.length >= 2) {
    imgsB[1].classList.add("hidden-right")
}

if (imgsB.length >= 3) {
    imgsB[m].classList.add("hidden-left")
}


//////////////////////////////////////////////////////////////
// clickで発生する処理                          //////////////
// if文によって画像の枚数の場合分けをし      /////////////////
// それによって画像の枚数を自由に設定できるようにしました  ///
//////////////////////////////////////////////////////////////

// 1枚の時
if (imgsB.length === 1) {
    leftB.classList.add("none")
    rightB.classList.add("none")
} 

// 2枚の時
else if (imgsB.length === 2) {
    rightB.classList.add("none")
    slideLeft = () => {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.add("hidden-left")
        imgsB[k].classList.remove("hidden-right")
        imgsB[k].classList.add("non-hidden")
        leftB.classList.add("none")
        rightB.classList.remove("none")
    }

    slideRight = () => {
        imgsB[j].classList.remove("hidden-left")
        imgsB[j].classList.add("non-hidden")
        imgsB[k].classList.remove("non-hidden")
        imgsB[k].classList.add("hidden-right")
        rightB.classList.add("none")
        leftB.classList.remove("none")
    }
} 

// 3枚の時
else if (imgsB.length === 3) {
    slideLeft = () => {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.add("hidden-left")
        imgsB[j].classList.remove("low-z-index")
        imgsB[k].classList.remove("hidden-right")
        imgsB[k].classList.add("non-hidden")
        imgsB[k].classList.remove("low-z-index")
        imgsB[l].classList.remove("hidden-left")
        imgsB[l].classList.add("hidden-right")
        imgsB[l].classList.add("low-z-index")
        if (j === 2) {
            j = 0
            k++
            l++
        } else if (k === 2) {
            j++
            k = 0
            l++
        } else if (l === 2) {
            j++
            k++
            l = 0
        }
    }

    slideRight = () => {
        imgsB[j].classList.remove("non-hidden")
        imgsB[j].classList.add("hidden-right")
        imgsB[j].classList.remove("low-z-index")
        imgsB[l].classList.remove("hidden-left")
        imgsB[l].classList.add("non-hidden")
        imgsB[l].classList.remove("low-z-index")
        imgsB[k].classList.remove("hidden-right")
        imgsB[k].classList.add("hidden-left")
        imgsB[k].classList.add("low-z-index")
        if (j === 0) {
            j = 2
            k--
            l--
        } else if (k === 0) {
            j--
            k = 2
            l--
        } else if (l === 0) {
            j--
            k--
            l = 2
        }
    }
} 

// 4枚の時
else if (imgsB.length === 4) {
    slideLeft = () => {
        imgsB[m].classList.remove("hidden-left")
        imgsB[j].classList.remove("non-hidden")
        imgsB[k].classList.remove("hidden-right")
        imgsB[l].classList.add("hidden-right")
        if (j === imgsB.length - 1) {
            j = 0; k++; l++; m++;
        } else if (k === imgsB.length - 1) {
            j++; k = 0; l++; m++;
        } else if (l === imgsB.length - 1) {
            j++; k++; l = 0; m++;
        } else if (m === imgsB.length - 1) {
            j++; k++; l++; m = 0;
        }
        imgsB[j].classList.add("non-hidden")
        imgsB[m].classList.add("hidden-left")
    }

    slideRight = () => {
        imgsB[j].classList.remove("hidden-left")
        imgsB[k].classList.remove("non-hidden")
        imgsB[l].classList.remove("hidden-right")
        imgsB[m].classList.add("hidden-left")
        if (j === 0) {
            j = imgsB.length - 1; k--; l--; m--;
        } else if (k === 0) {
            j--; k = imgsB.length - 1; l--; m--;
        } else if (l === 0) {
            j--; k--; l = imgsB.length - 1; m--;
        } else if (m === 0) {
            j--; k--; l--; m = imgsB.length - 1;
        }
        imgsB[k].classList.add("non-hidden")
        imgsB[l].classList.add("hidden-right")
    }
} 

// 5枚以上の時
else {
    slideLeft = () => {
        imgsB[m].classList.remove("hidden-left")
        imgsB[j].classList.remove("non-hidden")
        imgsB[k].classList.remove("hidden-right")
        imgsB[l].classList.add("hidden-right")
        if (j === imgsB.length - 1) {
            j = 0; k++; l++; m++; n++;
        } else if (k === imgsB.length - 1) {
            j++; k = 0; l++; m++; n++;
        } else if (l === imgsB.length - 1) {
            j++; k++; l = 0; m++; n++;
        } else if (m === imgsB.length - 1) {
            j++; k++; l++; m = 0; n++;
        } else if (n === imgsB.length - 1) {
            j++; k++; l++; m++; n = 0;
        } else {
            j++; k++; l++; m++; n++;
        }
        console.log(j);
        console.log(k);
        console.log(l);
        console.log(m);
        console.log(n);
        console.log("--------")
        imgsB[j].classList.add("non-hidden")
        imgsB[m].classList.add("hidden-left")
    }
    
    slideRight = () => {
        imgsB[m].classList.remove("hidden-left")
        imgsB[j].classList.remove("non-hidden")
        imgsB[k].classList.remove("hidden-right")
        imgsB[n].classList.add("hidden-left")
        if (j === 0) {
            j = imgsB.length - 1; k--; l--; m--; n--;
        } else if (k === 0) {
            j--; k = imgsB.length - 1; l--; m--; n--;
        } else if (l === 0) {
            j--; k--; l = imgsB.length - 1; m--; n--;
        } else if (m === 0) {
            j--; k--; l--; m = imgsB.length - 1; n--;
        } else if (n === 0) {
            j--; k--; l--; m-- ; n = imgsB.length - 1;
        } else {
            j--; k--; l--; m--; n--;
        }
        console.log(j);
        console.log(k);
        console.log(l);
        console.log(m);
        console.log(n);
        console.log("--------")
        imgsB[j].classList.add("non-hidden")
        imgsB[k].classList.add("hidden-right")
    }
}

leftB.addEventListener("click", slideLeft);
rightB.addEventListener("click", slideRight);