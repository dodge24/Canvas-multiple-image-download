var header = document.getElementById('header');
var main = document.getElementById('main');
var footer = document.getElementById('footer');
header.addEventListener('change', handleImage, false);
main.addEventListener('change', handleImage, false);
footer.addEventListener('change', handleImage, false);
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
let z = 1; // zoom


var headerHeight = 0;
var mainHeight = 0;
var footerHeight=0;
var headerWidth = 0;
var mainWidth = 0;
var footerWidth=0;



var headerImage=new Image()
var mainImage=new Image()
var footerImage=new Image()
var heightData=[0]
var total=0
var tempTotal=0;
var tWidth=0;
let mainArray=[];
function handleImage(e) {
   

  if (e.target == header) {

    headerImage.src = URL.createObjectURL(e.target.files[0]);

    //console.log(img.width)
    headerImage.onload = function() {
      headerWidth=this.width
      headerHeight=this.height
     // heightData.push(this.height)
     // tWidth=this.width
     
    }
  }

  if (e.target == main) {
    Array.from(e.target.files).forEach(element => {
      var img=new Image();
      img.src=URL.createObjectURL(element);
      mainArray=[...mainArray,img]
      
    });

   
  }


  if (e.target == footer) {
 

    footerImage.src = URL.createObjectURL(e.target.files[0]);
    footerImage.onload = function() {
      footerWidth=this.width
      footerHeight=this.height
draw12(mainArray);
      // heightData.push(this.height)
      // tWidth=tWidth>this.width?tWidth:this.width

    }
    
  } 




}  
function draw12(data) {
console.log(data.fileList)

data.forEach(d => {
      console.log(d)
      console.log("this.height")
     canvas.height=headerHeight+footerHeight+d.height;
    canvas.width=headerWidth>footerWidth?headerWidth:headerWidth>d.width?headerWidth:d.width;
    ctx.drawImage(headerImage, 0,0);
    ctx.drawImage(d, 180,headerHeight);
    ctx.drawImage(footerImage, 0,headerHeight+d.height);
    var link = document.createElement('a');
  link.download = '/image/'+Math.random()+'.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
  //redraw()
    
   
   
  });

 // console.log(total)

// data.forEach(element => {
//   element.onload = function() {
//     console.log(this.height);
//     heightData.push(this.height)

   
//   }
// });




// for (let index = 0; index < data.length; index++) {
//   tempTotal=tempTotal+heightData[index]
//   console.log(tempTotal)
//   ctx.drawImage(data[index], 0,index===0?0:tempTotal);
// }

  //canvas.width = 2000;
//canvas.height = hHeight+hMain+fHeight;
//console.log(canvas.height)


  // ctx.drawImage(headerImage, 0,0);
  // ctx.drawImage(mainImage, 0,hHeight);
  // ctx.drawImage(footerImage, 0,hHeight+hMain);
  }