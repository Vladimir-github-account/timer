"use strict";

export default class Day {
    constructor (date){
        this._date = date;
        this._isCurrent = date.toDateString()=== Day.currentDay.toDateString();
    }
    get date(){
        return this._date;
    }
    set date(value){
        this._isCurrent = value.toDateString() === Day.currentDay.toLocaleString();
        return this._date = value;
    }
    get isCurrent(){
        return this._isCurrent;
    }
    
    
}

Day.currentDay = new Date();