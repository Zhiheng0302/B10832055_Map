let jsonobj;
let btns = []; // 館所有的 btn
let n = 0 ;
// 預讀取
function preload(){
jsonobj = loadJSON('data.json');
img = loadImage('assets/map.jpg');
}
function setup() {
createCanvas(360, 180);
console.log(jsonobj);
console.log(jsonobj.metadata.count);
console.log(jsonobj.features[0].geometry.coordinates);
console.log(jsonobj.features[0].geometry.coordinates);
jsonobj.features.forEach((v)=>{
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'darkgreen';
let lat = v.geometry.coordinates[0];
let lang = v.geometry.coordinates[1];
let mag = v.properties.mag;
// 根據每筆資料製作 btn 物件
btns.push(new btn((lat+180),180-(lang+90),mag*mag*1.3));
});
   ele = createAudio('Wii Music - Gaming Background Music (HD).mp3');

  // here we set the element to autoplay
  // The element will play as soon
  // as it is able to do so.
  ele.autoplay(true);
}
function draw() {
//background(220);
  ellipse(width / 2, height / 2, 50, 50);
image(img, 0, 0,360,180);
// 根據 btns 袋子中的每物件進行顯示
btns.forEach((b)=>{
b.display();
})
}
// 物件導向建立 按鈕
class btn{
constructor(x,y,size){
this.x = x;
this.y = y;
this.size = size;
}
display(){
if (mouseX>this.x-this.size/2 &&
mouseX<this.x+this.size/2 &&
mouseY>this.y-this.size/2 &&
mouseY<this.y+this.size/2){
fill(255,0,255,this.size*2)
  square(this.x,this.y,this.size+6*sin(n),this.size+30*sin(n));
}else {
fill(0,255,0,n = n+0.0002,this.size*2);
}
noStroke();
  n=n+0.00009
square(this.x,this.y,this.size+6*sin(n),this.size+30*sin(n));
}
}