"use strict";

import Week from "./Week.js"

class Month {
    constructor(date){
        this._weeks = [];
        const from = new Date(date.getFullYear(), date.getMonth(), 1);
        
    }

    get weeks(){
        return this._weeks;
    }
}

const test = new Month(new Date(2019,11,8));

export default Month;