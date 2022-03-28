function reset() {
  let bar_items = document.getElementsByClassName("bar-item");
  let i = document.getElementsByClassName("style-icon");
  for (let index = 0; index < bar_items.length; index++) {
    bar_items[index].style.backgroundColor = "#ffffff";
    bar_items[index].style.color = "#000";
    i[index].style.color = "#grey";
  }
}
function select_bar_item(index) {
  reset();
  let bar_items = document.getElementsByClassName("bar-item");
  let i = document.getElementsByClassName("style-icon");
  bar_items[index].style.backgroundColor = "#E6F7FF";
  bar_items[index].style.color = "#1890ff";
  i[index].style.color = "#1890ff";
}
var countSideBar = 0;
function openSideBar() {
  let result;
  countSideBar += 1;
  let left_side = document.getElementById("left-side");
  let logo_content = document.getElementById("logo-content");
  let item_contents = document.getElementsByClassName(" item-content");
  let angle_down = document.getElementById("angle-down");
  let angle_up = document.getElementById("angle-up");
  let bar_items = document.getElementsByClassName("bar-item");
  let charts = document.getElementById("menu");
  let subCharts = document.getElementById("subCharts");
  if (countSideBar % 2 !== 0) {
    left_side.style.flexGrow = "0.1";
    logo_content.style.display = "none";
    for (let i = 0; i < item_contents.length; i++) {
      item_contents[i].style.display = "none";
    }
    for (let i = 0; i < bar_items.length; i++) {
      bar_items[i].style.justifyContent = "center";
    }
    angle_down.style.display = "none";
    angle_up.style.display = "none";
    subCharts.style.visibility = "hidden";
    charts.style.visibility = "hidden";
    result = true;
  } else {
    left_side.style.flexGrow = "1";
    logo_content.style.display = "flex";
    for (let i = 0; i < item_contents.length; i++) {
      item_contents[i].style.display = "flex";
    }
    for (let i = 0; i < bar_items.length; i++) {
      bar_items[i].style.justifyContent = "left";
    }
    angle_down.style.display = "flex";
    result = false;
  }
  return result;
}
var countChart = 0;
function showHideChart() {
  var a = document.getElementById("sidebar").offsetWidth;
  if (a >= 192) {
    reset();
    let charts = document.getElementById("menu");
    let angle_down = document.getElementById("angle-down");
    let angle_up = document.getElementById("angle-up");
    let bar_items = document.getElementsByClassName("bar-item");
    let i = document.getElementsByClassName("style-icon");
    let subCharts = document.getElementById("subCharts");
    countChart += 1;
    if (countChart % 2 !== 0) {
      charts.style.visibility = "visible";
      angle_up.style.display = "flex";
      angle_up.style.color = "#1890ff";
      angle_down.style.display = "none";
      bar_items[3].style.backgroundColor = "#E6F7FF";
      bar_items[3].style.color = "#1890ff";
      i[3].style.color = "#1890ff";
      return true;
    } else {
      subCharts.style.visibility = "hidden";
      charts.style.visibility = "hidden";
      angle_down.style.display = "flex";
      angle_up.style.display = "none";
      bar_items[3].style.backgroundColor = "#ffffff";
      bar_items[3].style.color = "#000";
      i[3].style.color = "grey";
      return false;
    }
  }
}

function showChartHover() {
  var a = document.getElementById("sidebar").offsetWidth;
  if (a < 192) {
    document.getElementById("hoverChart").style.display = "inline-block";
  }
}

function hideChartHover() {
  var a = document.getElementById("sidebar").offsetWidth;
  if (a <= 192) {
    document.getElementById("hoverChart").style.display = "none";
  }
}

var countSubChart = 0;
function showHideSubChart() {
  countSubChart += 1;
  let subCharts = document.getElementById("subCharts");
  if (countSubChart % 2 !== 0) {
    subCharts.style.visibility = "visible";
  } else {``
    subCharts.style.visibility = "hidden";
  }
}
