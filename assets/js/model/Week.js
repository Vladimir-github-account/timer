"use strict";

import Day from "./Day.js" 

class Week {
    constructor(date){
        this._days = [];
        
        
        for (let i = 0; i < 7; i++){
            
        }
    }

    static containMonth(date, month) {
        return Week.getMonday(date).getMonth() === month || Week.getSunday(date).getMonth() === month;
    }

    static getMonday(date) {
        const monday = new Date(date.toString());
        if (date.getDay() === 1){
            return date;
        }
        const weekDayNumber = monday.getDay();
        monday.setDate(monday.getDate() - weekDayNumber  > 1 ? weekDayNumber -1: -1);
        return monday;
    }

    static getSunday(date) {
        const sunday = new Date(date.toString());
        if (date.getDay() === 1){
            return date;
        }
        sunday.setDate(sunday.getDate() - (7 - sunday.getDay()));
        return sunday;
    }
}

Week.containMonth(new Date(), 11);

export default Week;