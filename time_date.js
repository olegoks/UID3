const time = document.querySelector('.time');

const date = document.querySelector('.date');

// Add Zeros
function addZero(n) {

    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}

function getStringWeekDay(day_number) {

    if (typeof getStringWeekDay.week_days == 'undefined') {

        getStringWeekDay.week_days = {

            1: ['Monday', 'Понедельник', 'Панядзелак'],
            2: ['Tuesday', 'Вторник', 'Аўторак'],
            3: ['Wednesday', 'Среда', 'Серада'],
            4: ['Thursday', 'Четверг', 'Чацвер'],
            5: ['Friday', 'Пятница', 'Пятнiца'],
            6: ['Saturday', 'Суббота', 'Субота'],
            0: ['Sunday', 'Воскресенье', 'Нядзеля']

        }

    }

    language_index = 0;
    current_lang = localStorage.getItem('language');

    if (current_lang == 'ru')
        language_index = 1;
    else if (current_lang == 'be')
        language_index = 2;

    return getStringWeekDay.week_days[day_number][language_index];

}

function getStringMonth(month_number) {

    if (typeof getStringMonth.months == 'undefined') {

        getStringMonth.months = {

            1: ['January', 'Январь', 'Студзень'],
            2: ['February', 'Февраль', 'Люты'],
            3: ['March', 'Март', 'Сакавік'],
            4: ['April', 'Апрель', 'Красавік'],
            5: ['May', 'Май', 'Май'],
            6: ['June', 'Июнь', 'Чэрвень'],
            7: ['July', 'Июль', 'Ліпень'],
            8: ['August', 'Август', 'Жнівень'],
            9: ['September', 'Сентябрь', 'Верасень'],
            10: ['October', 'Октябрь', 'Кастрычнік'],
            11: ['November', 'Ноябрь', 'Лістапад'],
            12: ['December', 'Декабрь', 'Снежань'],

        }

    }

    language_index = 0;
    current_lang = localStorage.getItem('language');

    if (current_lang == 'ru')
        language_index = 1;
    else if (current_lang == 'be')
        language_index = 2;

    return getStringMonth.months[month_number][language_index];

}

function changeTimeDate() {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth();

    let week_day_number = now.getDay();
    let week_day_str = getStringWeekDay(week_day_number);
    let month_str = getStringMonth(month);

    time.innerHTML = `${ addZero(hours) }<span>:</span>${ addZero(minutes) }<span>:</span>${ addZero(seconds) }`;
    date.innerHTML = `${week_day_str}<span>, </span>${ day }<span> <span>${month_str} `;

}

setInterval(changeTimeDate, 1000);