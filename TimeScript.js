setInterval(Action,1)
setInterval(ChangeColor,1)
setInterval(ChangeBG,10)
setInterval(FontChange,70)
const fonts = ["Tahoma","Heattenschweiler","BlinkMacSystemFont","Brush Script MT","Arial",
  "Times New Roman","Courier New","Georgia","Lucida Sans","Fantasy","Trebuchet MS","-apple-system"];
let fontindex=0;
let color=0;
let colorBG=0;
function FormatTime(time){
  return (((time>9) ? "" : "0")+time)
}
function Action(){
  let time = new Date();
  
  let parsed = "Time right now: "+FormatTime(time.getHours())+":"+FormatTime(time.getMinutes())+":"+FormatTime(time.getSeconds());
  
  document.getElementById("Ms").innerHTML = "Milliseconds elapsed: "+time.getMilliseconds();
  
  document.getElementById("Main").innerHTML = parsed;
  
  document.getElementById("Date").innerHTML = "Date: "+time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear();
  
}

function ChangeColor(){
  for (let x of document.getElementsByTagName("h2")){
    x.style.color=`hsl(${color}, 100%, 60%)`;
  }
  document.getElementById("Top").style.color = `hsl(${color}, 100%, 60%)`;
  //100 increment (epilepsy)
  //1 Increment (normal)
  color += 0.3;
}

function FontChange(){
  for (let x of document.getElementsByTagName("h2")){
    x.style.fontFamily=fonts[fontindex];
  }
  document.getElementById("Top").style.fontFamily = fonts[fontindex];
/*
  fontindex += 1
  if (fontindex >= fonts.length){
    fontindex=0;
  }
*/
 fontindex=Math.round(Math.random()*fonts.length)
 console.log(fontindex)
}
function ChangeBG(){
  for (let i of document.getElementsByTagName("html")){
    i.style.backgroundColor=`hsl(${colorBG}, 100%, 5%)`;
  } //1000 increment, 60% brightness (epilepsy)
  //1 Increment 2% brightness (normal)
  colorBG+=1000;
} 