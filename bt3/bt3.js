function resetBarItem() {
  let bar_items = document.getElementsByClassName("bar-item");
  for (let i = 0; i < bar_items.length; i++) {
    if (bar_items[i].classList.contains("bar-item-active")) {
      bar_items[i].classList.remove("bar-item-active");
    }
  }
}
function resetChart() {
  let charts = document.getElementsByClassName("chart");
  for (let i = 0; i < charts.length; i++) {
    if (charts[i].classList.contains("chart-active")) {
      charts[i].classList.remove("chart-active");
    }
  }
}
function resetSubChart() {
  let subCharts = document.getElementsByClassName("subChart");
  for (let i = 0; i < subCharts.length; i++) {
    if (subCharts[i].classList.contains("subChart-active")) {
      subCharts[i].classList.remove("subChart-active");
    }
  }
}
function select_bar_item(index) {
  resetBarItem();
  resetChart();
  resetSubChart();
  let bar_items = document.getElementsByClassName("bar-item");

  if (bar_items[index].className == "bar-item") {
    bar_items[index].classList.add("bar-item-active");
  }
}

function select_chart(index) {
  resetBarItem();
  resetChart();
  resetSubChart();
  let charts = document.getElementsByClassName("chart");
  if (charts[index].className == "chart") {
    charts[index].classList.add("chart-active");
  }
}

function select_subChart(index) {
  let subCharts = document.getElementsByClassName("subChart");
  resetBarItem();
  resetChart();
  resetSubChart();
  if (subCharts[index].className == "subChart") {
    subCharts[index].classList.add("subChart-active");
  }
}

var countSideBar = 0;
function openSideBar() {
  countSideBar += 1;
  let left_side = document.getElementById("left-side");
  let logo_content = document.getElementById("logo-content");
  let item_contents = document.getElementsByClassName(" item-content");
  let angle_down = document.getElementById("angle-down");
  let angle_up = document.getElementById("angle-up");
  let bar_items = document.getElementsByClassName("bar-item");
  let charts = document.getElementById("menu");
  let subCharts = document.getElementById("subCharts");
  let darkMode = document.getElementById("dark-mode");
  if (countSideBar % 2 !== 0) {
    left_side.style.width = "20px";
    logo_content.style.display = "none";
    for (let i = 0; i < item_contents.length; i++) {
      item_contents[i].style.display = "none";
    }
    for (let i = 0; i < bar_items.length; i++) {
      bar_items[i].style.justifyContent = "center";
      bar_items[i].style.paddingLeft = "0px";
    }
    angle_down.style.display = "none";
    angle_up.style.display = "none";
    charts.style.visibility = "hidden";
    subCharts.style.visibility = "hidden";
    darkMode.style.display = "none";
  } else {
    left_side.style.width = "200px";
    left_side.style.flexGrow = "1";
    logo_content.style.display = "flex";
    for (let i = 0; i < item_contents.length; i++) {
      item_contents[i].style.display = "flex";
    }
    for (let i = 0; i < bar_items.length; i++) {
      bar_items[i].style.justifyContent = "left";
      bar_items[i].style.paddingLeft = "16px";
    }
    if (countChart % 2 !== 0) {
      charts.style.visibility = "visible";
      if (countSubChart % 2 !== 0) {
        subCharts.style.visibility = "visible";
      }
    }
    angle_down.style.display = "flex";
    darkMode.style.display = "flex";
  }
}
var countChart = 0;
function showHideChart() {
  let a = document.getElementById("sidebar").offsetWidth;
  let charts = document.getElementById("menu");
  let angle_down = document.getElementById("angle-down");
  let angle_up = document.getElementById("angle-up");
  let subCharts = document.getElementById("subCharts");
  if (a >= 192) {
    countChart += 1;
    if (countChart % 2 !== 0) {
      charts.style.visibility = "visible";
      angle_up.style.display = "flex";
      angle_up.style.color = "#1890ff";
      angle_down.style.display = "none";
      if(countSubChart %2 !== 0){
        subCharts.style.visibility = "visible";
      }
    } else {
      subCharts.style.visibility = "hidden";
      charts.style.visibility = "hidden";
      angle_down.style.display = "flex";
      angle_up.style.display = "none";
    }
  }
}

function showChartHover() {
  let a = document.getElementById("sidebar").offsetWidth;
  let hoverChart = document.getElementById("hoverChart");
  let chart_style = document.getElementsByClassName("chart-style");
  if (a < 192) {
    event.stopPropagation();
    hoverChart.style.display = "flex";
  }
}

function hideChartHover() {
  var a = document.getElementById("sidebar").offsetWidth;
  if (a < 192) {
    document.getElementById("hoverChart").style.display = "none";
  }
}

var countSubChart = 0;
function showHideSubChart() {
  countSubChart += 1;
  let subCharts = document.getElementById("subCharts");
  let angle_down = document.getElementById("angle-down-sub");
  let angle_up = document.getElementById("angle-up-sub");

  if (countSubChart % 2 !== 0) {
    subCharts.style.visibility = "visible";
    angle_up.style.display = "flex";
    angle_up.style.color = "#1890ff";
    angle_down.style.display = "none";
  } else {
    angle_up.style.display = "none";
    angle_down.style.display = "flex";
    subCharts.style.visibility = "hidden";
  }
}

function showSubChartHover() {
  document.getElementById("hoverSubCharts").style.display = "inline-block";
}

function hideSubChartHover() {
  document.getElementById("hoverSubCharts").style.display = "none";
}

// Dark Mode
function darkMode() {
  const sidebar = document.getElementById("sidebar");
  let hoverChart = document.getElementById("hoverChart");
  let hoverSubChart = document.getElementById("hoverSubCharts");
  let hi = document.getElementById("hiAccount");
  let bar_icon = document.getElementById("bar-icon");
  let left_side = document.getElementById("left-side");
  if (left_side.className == "light") {
    left_side.className = "dark";
  } else {
    left_side.className = "light";
  }
  if (sidebar.className == "light") {
    sidebar.className = "dark";
    document.getElementById("switch-text").style.color = "#fff";
  } else {
    sidebar.className = "light";
    document.getElementById("switch-text").style.color = "#000";
  }
  if (hoverChart.className == "lightChart") {
    hoverChart.className = "darkChart";
  } else {
    hoverChart.className = "lightChart";
  }
  if (hoverSubChart.className == "lightSubChart") {
    hoverSubChart.className = "darkSubChart";
  } else {
    hoverSubChart.className = "lightSubChart";
  }
  if (hi.className == "hi") {
    hi.className = "darkHi";
  } else {
    hi.className = "hi";
  }
  if (bar_icon.className == "bar_icon") {
    bar_icon.className = "bar_icon_dark";
  } else {
    bar_icon.className = "bar_icon";
  }
  if (document.getElementById("switch").checked) {
    document.getElementById("logo-container").style.backgroundColor = "#001529";
    document.getElementById("top-right").style.backgroundColor = "#001529";
  } else {
    document.getElementById("logo-container").style.backgroundColor = "#fefefe";
    document.getElementById("top-right").style.backgroundColor = "#fff";
  }
}
