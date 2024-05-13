const selDate = [];

const selectDate = () => {
    const dates = document.querySelectorAll('.date');
    const year = document.querySelector('.year');
    const month = document.querySelector('.month');

    dates.forEach((i) => {
        i.addEventListener('click', ()=>{
            if(i.classList.contains('other') || i.classList.contains('selected')) {
                // 이번달이 아닌 날짜를 선택하거나, 이미 선택된 날짜를 클릭하면 모든 날짜의 선택을 해제한다.
                dates.forEach((ig) => {ig.classList.remove('selected');});
                i.classList.remove('selected');
                selDate.length = 0;
            } else if (selDate.length > 0) {
                // 한 날짜를 선택 후 다른 날짜를 선택하려 할때 이전에 선택한 날짜는 선택해제 이후 선택한 날짜를 선택과 함께 selDate에 정보 push.
                dates.forEach((ig)=>{ig.classList.remove('selected');});
                selDate.length = 0;
                i.classList.add('selected');
                selDate.push([year.innerHTML, month.innerHTML, i.innerHTML]);
            } else {
                // 위의 상황에 해당되지 않는 경우(else) 선택한 날짜에 선택과 함께 selDate에 정보 push.
                i.classList.add('selected');
                selDate.push([year.innerHTML, month.innerHTML, i.innerHTML]);
            }
        })
    })
}

const reset = () => {
    selDate.length = 0;
    selectDate();
}

window.onload = () => {
    const navBtn = document.querySelectorAll('.nav_btn');
    console.log(navBtn);
    navBtn.forEach(inf => {
        if (inf.classList.contains('go_prev')) {
            inf.addEventListener('click', ()=>{prevMonth(); reset();});
        } else if (inf.classList.contains('go_today')) {
            inf.addEventListener('click', ()=>{goToday(); reset();});
        } else if (inf.classList.contains('go_next')) {
            inf.addEventListener('click', ()=>{nextMonth(); reset();});
        }
    });
    reset();
}