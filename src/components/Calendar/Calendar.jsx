import React from 'react';

import classes from './Calendar.module.css';

import active from './active_ic.svg';

const Calendar = () => {
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
                <div  className={classes.day}>1</div>
                <div  className={classes.day}>2</div>
                <div  className={classes.day}>3</div>
                <div  className={classes.day}>4</div>
                <div  className={classes.day}>5</div>
                <div  className={classes.day}>6</div>
                <div  className={classes.day}>7</div>
                <div  className={classes.day}>8</div>
                <div  className={classes.day_selected}>9</div>
                <div  className={classes.day}>10</div>
                <div  className={classes.day}>11</div>
                <div  className={classes.day}>12</div>
                <div  className={classes.day}>13</div>
                <div  className={classes.day}>14</div>
                <div  className={classes.day}>15</div>
                <div  className={classes.day}>16</div>
                <div  className={classes.day}>17</div>
                <div  className={classes.day}>18</div>
                <div  className={classes.day}>19</div>
                <div  className={classes.day}>20</div>
                <div  className={classes.day}>21</div>
                <div  className={classes.day}>22</div>
                <div  className={classes.day}>23</div>
                <div  className={classes.day}>24</div>
                <div  className={classes.day}>25</div>
                <div  className={classes.day}>26</div>
                <div  className={classes.day}>27</div>
                <div  className={classes.day}>28</div>
                <div  className={classes.day}>29</div>
                <div  className={classes.day}>30</div>
                <div  className={classes.day}>31</div>
            </div>
            <div style={{margin: 10}}>
                <img src={active} alt="active"/> - Выбранный день
            </div>
        </div>
    );
};

export default Calendar;