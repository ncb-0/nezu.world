function flexImg() {
  let images = document.querySelectorAll(".img2f div img");


  for (let i = 0; i < images.length; i++) {
    let w = images[i].naturalWidth;
    let h = images[i].naturalHeight;
    let a = w / h;
    let parent = images[i].closest("div");

    console.log(`width: ${w}, height: ${h}, aspect ratio: ${a}`);
    // parent.style.flex = a;
    parent.setAttribute("style", `flex:${a};`);
  }
}

document.onload = flexImg();