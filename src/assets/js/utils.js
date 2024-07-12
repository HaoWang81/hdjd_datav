export function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)
}

export function transferDate(dateStr) {
    // var dateStr = "Sat Jul 13 2024 17:55:23 GMT+0800 (中国标准时间)";
    var dateObj = new Date(dateStr);
    return formatDate(dateObj);
}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}