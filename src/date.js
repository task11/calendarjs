// 현재 시간 계산
const curr = new Date();

// UTC 계산
// const utc = curr.getTime() + (curr.getTimezoneOffset())
const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;

// UTC to KST (UTC + 9시간)
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

const today = new Date(utc + (KR_TIME_DIFF));

const dayObject = {
  year: today.getFullYear(), // 연도
  month: today.getMonth() + 1, // 월 ( 0 ~ 12 )
  date: today.getDate(), // 일 ( 1 ~ 31 )
  day: today.getDay() // 요일 ( 0 ~ 7 )
}

export default dayObject;