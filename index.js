const date = new Date();

const currYear = date.getFullYear();
const currMonth = date.getMonth()
const viewMonth = (currMonth+1).toString().padStart(2, "0");

document.querySelector(".current_yearMonth").textContent = `${currYear} - ${viewMonth}`;

const prevLastDay = new Date(currYear, currMonth, 0);
const thisLastDay = new Date(currYear, currMonth+1, 0);

const PLDate = prevLastDay.getDate();
const PLDay = prevLastDay.getDay();
const TLDate = thisLastDay.getDate();
const TLDay = thisLastDay.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate+1).keys()].slice(1);
/*  Array(n)으로 배열을 만들면 길이가 n인 배열이 생성. (이때 모든 요소들은 undefined) 
그런데 모든 요소들이 empty 값이기 때문에 keys() 메서드를 활용하면 0부터 n - 1까지의 Array Iterator가 생성되는데,
전개 구문을 통해서 이 Array Iterator를 배열로 만들어 내면 0부터 n-1까지의 배열을 얻어낼 수가 있다.
이번 달 마지막 날짜 + 1을 n에 전달해주고
제일 앞에 있는 0을 없애기 위해서 slice 메서드를 이용. */
const nextDates = [];

if (PLDay != 6) {
    for (let i = 0; i < PLDay + 1; i++) {
        prevDates.unshift(PLDate - i);
    }
}

for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);
dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`
})

document.querySelector('.dates').innerHTML = dates.join('');
