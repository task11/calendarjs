import dayObject from "./date.js";

const week = {
  0: "sun",
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat"
}

function rendering() {
  const prevMonth = new Date(dayObject.year, dayObject.month - 1, 0);
  const prevDate = prevMonth.getDate();
  const prevDay = prevMonth.getDay();

  const currMonth = new Date(dayObject.year, dayObject.month, 0);
  const currDate = currMonth.getDate();
  const currDay = currMonth.getDay(); // 4(목)


  let template = [];
  let viewDate = 0; // 일요일부터 시작

  for (let i = prevDate - prevDay; i < prevDate + 1; i++) {
    template.push(`<div class="date prev disable ${week[viewDate++]}"> ${i} </div>`);
    viewDateInit();
  }


  for (let i = 1; i < currDate + 1; i++) {
    template.push(`<div class="date current ${week[viewDate++]}"> ${i} </div>`);
    viewDateInit();
  }

  for (let i = 1; viewDate < 7; i++) {
    template.push(`<div class="date next disable ${week[viewDate++]}"> ${i} </div>`);
  }

  function viewDateInit() {
    if (viewDate === 7) {
      viewDate = 0;
    }
  }

  return template;
}

const render = rendering();
const app = document.getElementById('root');
app.innerHTML = render.join(' ');