// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [
    {
      data: [12, 10, 2, 4, 10],
      name: 'succes-rate',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['Launch', 'Landing', 'unExpected-event', 'space-debris', 're-Entering'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'success-rate',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

var barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
var areaChartOptions = {
  series: [
    {
      name: 'Miscellaneous Expenses',
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: 'special-facilities',
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['100$', '200$', '300$', '400$', '500$', '600$', '700$'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Missllaneous Expenses',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'special-facilities',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

var areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

let areaC = document.querySelector("#areachart");
let barC = document.querySelector("#barchart");
let site = document.querySelector("#site-visit");
let duration = document.querySelector("#Duration");
let price = document.querySelector("#final-price");
let planetSelec = document.querySelector("#planet-selector");
let sbplanet = document.querySelector("#submit-planet");
let sbsite = document.querySelector("#sbsite");
let sbduration = document.querySelector("#sbduration");
let amount = document.querySelector("#diff-price");

let date = document.querySelector("#book-date");

let dateBtn = document.querySelector("#date-submit");
let possibility = document.querySelector("#possibility");

let confirmh = document.querySelector(".confirm-h");
let confirmbtn = document.querySelector(".confirm-btn");






site.style.display = "none";
duration.style.display = "none";
price.style.display = "none";

sbplanet.addEventListener("click",()=>{
  site.style.display = "block";
})
sbsite.addEventListener("click",()=>{
  duration.style.display = "block";
})
sbduration.addEventListener("click",()=>{
date.style.display = "block";
})

dateBtn.addEventListener("click",()=>{
  price.style.display = "block";
  amount.innerText = Math.floor(Math.random()*2000)+"$"
  areaC.style.display = "block";
  barC.style.display = "block";
  possibility.style.display = "block"
  confirmh.style.display = "block"
  confirmbtn.style.display = "block"
})

console.log("working");



const submit = document.getElementsByClassName("confirm-btn")[0];
submit.addEventListener("click",(e)=>{
  // e.preventDefault();
  console.log("clicked");

  Email.send({
    SecureToken : "e380fc05-f889-4706-9795-63ab8f8a0094",
    To : 'rishikadhiman2003@gmail.com',
    From : "namankumar2611@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );



});

