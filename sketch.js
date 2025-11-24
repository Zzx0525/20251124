let spriteSheet;
let frameWidth = 1520 / 9; // 總寬度 1520 分為 9 個影格
let frameHeight = 127;
let numFrames = 9;
let currentFrame = 0;

// 在 setup() 執行前預先載入圖片
function preload() {
  // 請確保 '資料夾1/all.png' 的路徑是正確的
  spriteSheet = loadImage('1/all.png');
}

function setup() {
  // 建立一個全螢幕的畫布
  createCanvas(windowWidth, windowHeight);
  // 設定動畫的播放速度 (每秒影格數)
  frameRate(10);
}

function draw() {
  // 設定背景顏色為淺綠色
  background(204, 255, 204);

  // 計算目前影格在圖片精靈中的 x 座標
  let x = currentFrame * frameWidth;

  // 在畫布中央顯示目前的影格
  // image(圖片, 畫布x, 畫布y, 畫布寬, 畫布高, 來源x, 來源y, 來源寬, 來源高)
  image(spriteSheet, width / 2 - frameWidth / 2, height / 2 - frameHeight / 2, frameWidth, frameHeight, x, 0, frameWidth, frameHeight);

  // 更新到下一個影格，如果到底就從頭開始
  currentFrame = (currentFrame + 1) % numFrames;
}

// 當瀏覽器視窗大小改變時，自動調整畫布大小
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
