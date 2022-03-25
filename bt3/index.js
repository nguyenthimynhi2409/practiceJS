var countSideBar = 0;
function openSideBar() {
  countSideBar += 1;
  let left_side = document.getElementById("left-side");
  let logo_content = document.getElementById("logo-content");
  let item_contents = document.getElementsByClassName(" item-content");
  let angle_down = document.getElementById("angle-down");
  let bar_items = document.getElementsByClassName("bar-item");
  if (countSideBar % 2 !== 0) {
    left_side.style.flexGrow = "0.1";
    logo_content.style.display = "none";
    for(let i=0; i<item_contents.length;i++){
      item_contents[i].style.display = "none";
    }
    for(let i=0;i<bar_items.length;i++){
      bar_items[i].style.justifyContent = "center";
    }
    angle_down.style.display = "none";
  } else {
    left_side.style.flexGrow = "1";
    logo_content.style.display = "flex";
    for(let i=0; i<item_contents.length;i++){
      item_contents[i].style.display = "flex";
    }
    for(let i=0;i<bar_items.length;i++){
      bar_items[i].style.justifyContent = "left";
    }
    angle_down.style.display = "flex";
  }
}
var countChart = 0;
function showHideChart() {
  let charts = document.getElementById("menu");
  let angle_down = document.getElementById("angle-down");
  let angle_up = document.getElementById("angle-up");
  countChart += 1;
  if (countChart % 2 !== 0) {
    charts.style.visibility = "visible";
    angle_up.style.display = "flex";
    angle_down.style.display = "none";
  } else {
    charts.style.visibility = "hidden";
    angle_down.style.display = "flex";
    angle_up.style.display = "none";
  }
}
