var imageloop = 1;
document.getElementById('bg').src = "images/sectionbg1.jpg";
document.getElementById('overlaysepbg').style.backgroundImage = "url('images/overlaybg1.jpg')";
closeoverlay();

function changebg() {
  if (imageloop == 1){
    document.getElementById('bg').src = "images/sectionbg1.jpg";
    document.getElementById('overlaysepbg').style.backgroundImage = "url('images/overlaybg1.jpg')";
  }
  if (imageloop == 2) {
    document.getElementById('bg').src = "images/sectionbg2.jpg";
    document.getElementById('overlaysepbg').style.backgroundImage = "url('images/overlaybg1.jpg')";
  }
  if (imageloop == 3) {
    document.getElementById('bg').src = "images/sectionbg3.jpg";
    document.getElementById('overlaysepbg').style.backgroundImage = "url('images/overlaybg3.jpg')";
  }
  if (imageloop == 4) {
    document.getElementById('bg').src = "images/sectionbg4.jpg";
    document.getElementById('overlaysepbg').style.backgroundImage = "url('images/overlaybg3.jpg')";
  }
}

function plusimageloop() {
  if (imageloop <4) {
    imageloop = imageloop + 1;
  }
  else if (imageloop == 4) {
    imageloop = 1;
  }
}

function minusimageloop() {
  if (imageloop >1) {
    imageloop = imageloop - 1;
  }
  else if (imageloop == 1) {
    imageloop = 4;
  }
}
//background image logic

function closeoverlaycontent(){
  document.getElementById('Menu').style.display = "none";
  document.getElementById('Delivery').style.display = "none";
  document.getElementById('Jobs').style.display = "none";
  document.getElementById('About_us').style.display = "none";
}

function showoverlay(){
  document.getElementById('overlay').style.visibility = "visible";
  document.getElementById('overlaysepbg').style.visibility= "visible";
}

function closeoverlay(){
  document.getElementById('overlay').style.visibility= "hidden"
  document.getElementById('overlaysepbg').style.visibility= "hidden";
  closeoverlaycontent();
}

function showoverlayMenu() {
  document.getElementById('Menu').style.display = "initial";
}
function showoverlayDelivery() {
  document.getElementById('Delivery').style.display = "initial";
}
function showoverlayJobs() {
  document.getElementById('Jobs').style.display = "initial";
}
function showoverlayAbout_us() {
  document.getElementById('About_us').style.display = "initial";
}
//overlay logic
