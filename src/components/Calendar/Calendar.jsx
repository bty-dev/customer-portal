import React, {useState} from 'react';

import classes from './Calendar.module.css';

import active from './active_ic.svg';

const Calendar = () => {

    const [day, setDay] = useState(9);


    return (
        <div className={classes.main}>
            <p className={classes.title}>Октябрь 2022</p>
            <div className={classes.days_of_week_container}>
                <div className={classes.week__day}>Пн</div>
                <div className={classes.week__day}>Вт</div>
                <div className={classes.week__day}>Ср</div>
                <div className={classes.week__day}>Чт</div>
                <div className={classes.week__day}>Пт</div>
                <div className={classes.week__day}>Сб</div>
                <div className={classes.week__day}>Вс</div>
            </div>
            <div className={classes.calendar_container}>
                <div onClick={() => setDay(1)}  className={day === 1 ? classes.day_selected : classes.day}>1</div>
                <div onClick={() => setDay(2)}  className={day === 2 ? classes.day_selected : classes.day}>2</div>
                <div onClick={() => setDay(3)}  className={day === 3 ? classes.day_selected : classes.day}>3</div>
                <div onClick={() => setDay(4)}  className={day === 4 ? classes.day_selected : classes.day}>4</div>
                <div onClick={() => setDay(5)}  className={day === 5 ? classes.day_selected : classes.day}>5</div>
                <div onClick={() => setDay(6)}  className={day === 6 ? classes.day_selected : classes.day}>6</div>
                <div onClick={() => setDay(7)}  className={day === 7 ? classes.day_selected : classes.day}>7</div>
                <div onClick={() => setDay(8)}  className={day === 8 ? classes.day_selected : classes.day}>8</div>
                <div onClick={() => setDay(9)}  className={day === 9 ? classes.day_selected : classes.day}>9</div>
                <div onClick={() => setDay(10)}  className={day === 10 ? classes.day_selected : classes.day}>10</div>
                <div onClick={() => setDay(11)}  className={day === 11 ? classes.day_selected : classes.day}>11</div>
                <div onClick={() => setDay(12)}  className={day === 12 ? classes.day_selected : classes.day}>12</div>
                <div onClick={() => setDay(13)}  className={day === 13 ? classes.day_selected : classes.day}>13</div>
                <div onClick={() => setDay(14)}  className={day === 14 ? classes.day_selected : classes.day}>14</div>
                <div onClick={() => setDay(15)}  className={day === 15 ? classes.day_selected : classes.day}>15</div>
                <div onClick={() => setDay(16)}  className={day === 16 ? classes.day_selected : classes.day}>16</div>
                <div onClick={() => setDay(17)}  className={day === 17 ? classes.day_selected : classes.day}>17</div>
                <div onClick={() => setDay(18)}  className={day === 18 ? classes.day_selected : classes.day}>18</div>
                <div onClick={() => setDay(19)}  className={day === 19 ? classes.day_selected : classes.day}>19</div>
                <div onClick={() => setDay(20)}  className={day === 20 ? classes.day_selected : classes.day}>20</div>
                <div onClick={() => setDay(21)}  className={day === 21 ? classes.day_selected : classes.day}>21</div>
                <div onClick={() => setDay(22)}  className={day === 22 ? classes.day_selected : classes.day}>22</div>
                <div onClick={() => setDay(23)}  className={day === 23 ? classes.day_selected : classes.day}>23</div>
                <div onClick={() => setDay(24)}  className={day === 24 ? classes.day_selected : classes.day}>24</div>
                <div onClick={() => setDay(25)}  className={day === 25 ? classes.day_selected : classes.day}>25</div>
                <div onClick={() => setDay(26)}  className={day === 26 ? classes.day_selected : classes.day}>26</div>
                <div onClick={() => setDay(27)}  className={day === 27 ? classes.day_selected : classes.day}>27</div>
                <div onClick={() => setDay(28)}  className={day === 28 ? classes.day_selected : classes.day}>28</div>
                <div onClick={() => setDay(29)}  className={day === 29 ? classes.day_selected : classes.day}>29</div>
                <div onClick={() => setDay(30)}  className={day === 30 ? classes.day_selected : classes.day}>30</div>
                <div onClick={() => setDay(31)}  className={day === 31 ? classes.day_selected : classes.day}>31</div>
            </div>
            <div style={{margin: 10}}>
                <img src={active} alt="active"/> - Выбранный день
            </div>
        </div>
    );
};

export default Calendar;