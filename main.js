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

// スライドして切り替えるやつ

const leftB = document.getElementById("left-b")
const rightB = document.getElementById("right-b")

console.log(leftB);
console.log(rightB);

const imgsB = document.getElementsByClassName("img-b")

let j = 0
let k = 1
let l = 2
let m = 3

// イベントバブリングが原因
// デバッカーで処理を止めて確認することが

const slideLeft = () => {
    imgsB[j].classList.remove("hidden-left")
    imgsB[k].classList.remove("non-hidden")
    imgsB[l].classList.remove("hidden-right")
    imgsB[m].classList.add("hidden-right")
    if (j === imgsB.length - 1) {
        j = 0
        k++
        l++
        m++
    } else if (k === imgsB.length - 1) {
        j++
        k = 0
        l++
        m++
    } else if (l === imgsB.length - 1) {
        j++
        k++
        l = 0
        m++
    } else if (m === imgsB.length - 1) {
        j++
        k++
        l++
        m = 0
    }
    console.log("おらおら");
    console.log(k);
    console.log(l);
    console.log(m);
    imgsB[k].classList.add("non-hidden")
    imgsB[j].classList.add("hidden-left")
}

const slideRight = () => {
    imgsB[j].classList.remove("hidden-left")
    imgsB[k].classList.remove("non-hidden")
    imgsB[l].classList.remove("hidden-right")
    imgsB[m].classList.add("hidden-left")
    if (j === 0) {
        j = imgsB.length - 1
        k--
        l--
        m--
    } else if (k === 0) {
        j--
        k = imgsB.length - 1
        l--
        m--
    } else if (l === 0) {
        j--
        k--
        l = imgsB.length - 1
        m--
    } else if (m === 0) {
        j--
        k--
        l--
        m = imgsB.length - 1
    }
    console.log(j);
    console.log(k);
    console.log(l);
    console.log(m);
    imgsB[k].classList.add("non-hidden")
    imgsB[l].classList.add("hidden-right")
}

leftB.addEventListener("click", slideLeft);
rightB.addEventListener("click", slideRight);

console.log(slideLeft);
