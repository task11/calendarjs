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

let prevCount = -1;
let nextCount = 0;


function makeHTML() {
  const prevMonth = new Date(dayObject.year, dayObject.month + prevCount, 0);
  const currMonth = new Date(dayObject.year, dayObject.month + nextCount, 0);

  const prevDate = prevMonth.getDate();
  const prevDay = prevMonth.getDay();

  const currDate = currMonth.getDate();


  let template = [];
  let viewDate = 0; // 일요일부터 시작

  template.push(`
  <div class="calendar">
  <h1 class="title-name">${currMonth.getFullYear()}년 ${currMonth.getMonth() + 1}월</h1>
  <div class="calendar-month">`);


  for (let i = prevDate - prevDay; i < prevDate + 1; i++) {
    viewDateInit();
    template.push(`<div class="date prev disable ${week[viewDate++]}"> ${i}일</div>`);

  }

  for (let i = 1; i < currDate + 1; i++) {
    viewDateInit();
    if (i === 1) {
      template.push(`<div class="date current ${week[viewDate++]}"> ${currMonth.getMonth() + 1}월 ${i}일</div>`);
      continue;
    }
    template.push(`<div class="date current ${week[viewDate++]}"> ${i}일</div>`);

  }

  if (viewDate) {
    for (let i = 1; viewDate < 7; i++) {
      if (i === 1) {
        template.push(`<div class="date current ${week[viewDate++]}"> ${currMonth.getMonth() + 2}월 ${i}일</div>`);
        continue;
      }
      template.push(`<div class="date next disable ${week[viewDate++]}"> ${i}일</div>`);
    }
  }

  function viewDateInit() {
    if (viewDate === 7) {
      viewDate = 0;
    }
  }

  template.push(`</div>`);

  return template;
}

function onClickPrev() {
  prevCount--;
  nextCount--;
  rendering();

}

function onClickNext() {
  prevCount++;
  nextCount++;
  rendering();
}

function onClickToday() {
  prevCount = -1;
  nextCount = 0;
  rendering();
}

function rendering() {
  const render = makeHTML();
  const app = document.getElementById('root');
  app.innerHTML = render.join(' ');
}


rendering();



const prev = document.getElementById('prev');
const next = document.getElementById('next');
const currDay = document.getElementById('today');

prev.addEventListener('click', onClickPrev);
next.addEventListener('click', onClickNext);
currDay.addEventListener('click', onClickToday);