function resetBarItem() {
  let bar_items = document.getElementsByClassName("bar-item");
  let i = document.getElementsByClassName("style-icon");
  for (let index = 0; index < bar_items.length; index++) {
    bar_items[index].style.backgroundColor = "#ffffff";
    bar_items[index].style.borderRight = "none";
    bar_items[index].style.color = "#000";
    i[index].style.color = "grey";
  }
}
function select_bar_item(index) {
  resetBarItem();
  resetChart();
  resetSubChart();
  let bar_items = document.getElementsByClassName("bar-item");
  let i = document.getElementsByClassName("style-icon");
  bar_items[index].style.backgroundColor = "#E6F7FF";
  bar_items[index].style.borderRight = "solid #0000FF";
  bar_items[index].style.color = "#1890ff";
  i[index].style.color = "#1890ff";
}
function resetChart() {
  let charts = document.getElementsByClassName("chart");
  let i = document.getElementsByClassName("style-chart");
  let chart_content = document.getElementsByClassName("chart-content");
  for (let index = 0; index < charts.length; index++) {
    charts[index].style.backgroundColor = "#ffffff";
    chart_content[index].style.color = "#000";
    i[index].style.color = "grey";
    charts[index].style.borderRight = "none";
  }
}
function select_chart(index) {
  resetChart();
  resetBarItem();
  resetSubChart();
  let chart_contents = document.getElementsByClassName("chart-content");
  let charts = document.getElementsByClassName("chart");
  let i = document.getElementsByClassName("style-chart");
  charts[index].style.borderRight = "solid #0000FF";
  charts[index].style.backgroundColor = "#E6F7FF";
  chart_contents[index].style.color = "#1890ff";
  i[index].style.color = "#1890ff";
}
function resetSubChart() {
  let subChart_contents = document.getElementsByClassName("subChart-content");
  let subCharts = document.getElementsByClassName("subChart");
  let i = document.getElementsByClassName("subChart-style");
  for (let index = 0; index < subCharts.length; index++) {
    subCharts[index].style.backgroundColor = "#ffffff";
    subChart_contents[index].style.color = "#000";
    i[index].style.color = "grey";
    subCharts[index].style.borderRight = "none";
  }
}
function select_subChart(index) {
  resetSubChart();
  resetChart();
  resetBarItem();
  let subChart_contents = document.getElementsByClassName("subChart-content");
  let subCharts = document.getElementsByClassName("subChart");
  let i = document.getElementsByClassName("subChart-style");
  subCharts[index].style.borderRight = "solid #0000FF";
  subCharts[index].style.backgroundColor = "#E6F7FF";
  subChart_contents[index].style.color = "#1890ff";
  i[index].style.color = "#1890ff";
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
    darkMode.style.display = "none";
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
    darkMode.style.display = "flex";
  }
}
var countChart = 0;
function showHideChart() {
  var a = document.getElementById("sidebar").offsetWidth;
  if (a >= 192) {
    resetBarItem();
    let charts = document.getElementById("menu");
    let angle_down = document.getElementById("angle-down");
    let angle_up = document.getElementById("angle-up");
    let bar_items = document.getElementsByClassName("bar-item");
    let i = document.getElementsByClassName("style-icon");
    let subCharts = document.getElementById("subCharts");
    bar_items[3].style.color = "#1890ff";
    i[3].style.color = "#1890ff";
    countChart += 1;
    if (countChart % 2 !== 0) {
      charts.style.visibility = "visible";
      angle_up.style.display = "flex";
      angle_down.style.display = "none";

      return true;
    } else {
      subCharts.style.visibility = "hidden";
      charts.style.visibility = "hidden";
      angle_down.style.display = "flex";
      angle_up.style.display = "none";
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
  resetChart();
  countSubChart += 1;
  let subCharts = document.getElementById("subCharts");
  let angle_down = document.getElementById("angle-down-sub");
  let angle_up = document.getElementById("angle-up-sub");
  let i = document.getElementsByClassName("style-chart");
  let chart_content = document.getElementsByClassName("chart-content");
  chart_content[2].style.color = "#1890ff";
  i[2].style.color = "#1890ff";
  if (countSubChart % 2 !== 0) {
    subCharts.style.visibility = "visible";
    angle_up.style.display = "flex";
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
  let bar_item = document.getElementsByClassName("bar-item");
  let sidebar = document.getElementById("sidebar");
  let i = document.getElementsByClassName("style-icon");
  let switch_text = document.getElementById("switch-text");
  bar_item[0].style.backgroundColor = "#1890ff";
  if (document.getElementById("switch").checked) {
    document.getElementById("logo-container").style.backgroundColor = "#001529";
    sidebar.style.backgroundColor = "#001529";
    switch_text.style.color = "#ffffff";
    for (let index = 0; index < bar_item.length; index++) {
      bar_item[index].style.color = "#ffffff";
      i[index].style.color = "#ffffff";
    }
  } else {
    document.getElementById("logo-container").style.backgroundColor = "#fefefe";
    sidebar.style.backgroundColor = "#fefefe";
    bar_item[0].style.backgroundColor = "#E6F7FF";
    bar_item[0].style.color = "#ffffff";
    i[0].style.color = "gray";
    switch_text.style.color = "#000";
    for (let index = 0; index < bar_item.length; index++) {
      bar_item[index].style.color = "#000000";
    }
  }
}
