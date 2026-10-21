// ===================== 即時時鐘程式 (script.js) =====================

// 快取 DOM 元素，避免每次更新都重新查詢
const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('dateDisplay');

// 中文星期陣列
const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/**
 * 更新時鐘顯示的函數
 * 取得當前時間，格式化後寫入 DOM
 */
function updateClock() {
    const now = new Date();

    // 時、分、秒（補零至兩位數）
    const hours   = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // 更新時間顯示
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // 日期資料
    const year    = now.getFullYear();
    const month   = now.getMonth() + 1; // 月份從 0 開始，需 +1
    const day     = now.getDate();
    const weekday = weekdays[now.getDay()];

    // 更新日期顯示
    dateElement.textContent = `${year}年${month}月${day}日 ${weekday}`;
}

// 首次立即執行，避免畫面空白
updateClock();

// 每秒更新一次
setInterval(updateClock, 1000);s