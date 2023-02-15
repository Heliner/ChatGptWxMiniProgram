function TimeCode() {
  var date = new Date();
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//获取日期
function _formatTime(time) {
  var date = time.getFullYear() + '年' + time.getMonth() + '月' + time.getDate() + '日'
  var ftime = time.getHours() + '时' + time.getMinutes() + '分' + time.getSeconds() + '秒'
  return date + ftime;
}
function TimeCodeYmd(){
  var date = new Date();
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  return [year, month, day].map(formatNumber).join('-');
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
module.exports={
  TimeCode,
  TimeCodeYmd
}