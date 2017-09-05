(function (main) {
    'use strict';

    var token = /d{1,4}|M{1,4}|yy(?:yy)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
    }
    function pad(val, len) {
        val = String(val);
        len = len || 2;
        while (val.length < len) {
            val = '0' + val;
        }
        return val;
    }
    var formatFlags = {
        D: function (dateObj) {
            return dateObj.getDay();
        },
        DD: function (dateObj) {
            return pad(dateObj.getDay());
        },
        d: function (dateObj) {
            return dateObj.getDate();
        },
        dd: function (dateObj) {
            return pad(dateObj.getDate());
        },
        M: function (dateObj) {
            return dateObj.getMonth() + 1;
        },
        MM: function (dateObj) {
            return pad(dateObj.getMonth() + 1);
        },
        yy: function (dateObj) {
            return String(dateObj.getFullYear()).substr(2);
        },
        yyyy: function (dateObj) {
            return dateObj.getFullYear();
        },
        h: function (dateObj) {
            return dateObj.getHours() % 12 || 12;
        },
        hh: function (dateObj) {
            return pad(dateObj.getHours() % 12 || 12);
        },
        H: function (dateObj) {
            return dateObj.getHours();
        },
        HH: function (dateObj) {
            return pad(dateObj.getHours());
        },
        m: function (dateObj) {
            return dateObj.getMinutes();
        },
        mm: function (dateObj) {
            return pad(dateObj.getMinutes());
        },
        s: function (dateObj) {
            return dateObj.getSeconds();
        },
        ss: function (dateObj) {
            return pad(dateObj.getSeconds());
        },
    };

    /***
     * Format a date
     * @method  format
     * @param   {Date|number} dateObj
     * @param   {string} mask Format of the date, yyyy-MM-dd;
     * @return  {string}  "2017-07-10";
     * @demo    formatDate(new Date(), 'yyyy-MM-dd')
     */
    var formatDate = function (dateObj, mask) {
        if (typeof dateObj === 'number') {
            dateObj = new Date(dateObj);
        }
        if (Object.prototype.toString.call(dateObj) !== '[object Date]' || isNaN(dateObj.getTime())) {
            throw new Error('Invalid Date in fecha.format');
        }
        mask = mask || 'yyyy-MM-dd HH:mm:ss';
        return mask.replace(token, function ($0) {
            return $0 in formatFlags ? formatFlags[$0](dateObj) : $0.slice(1, $0.length - 1);
        });
    };

    /* istanbul ignore next */
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = formatDate;
    } else if (typeof define === 'function' && define.amd) {
        define(function () {
            return formatDate;
        });
    } else {
        main.formatDate = formatDate;
    }
})(this);