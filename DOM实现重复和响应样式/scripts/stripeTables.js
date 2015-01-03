//设置表格隔行变色
function stripeTables (oddStyle) {
  if (!document.getElementsByTagName) return false;
  //获取所有表格
  var tables = document.getElementsByTagName('table');
  //遍历每个表格
  for (var i = 0; i < tables.length; i++) {
    var falg = false;  //设置变色的标签
    //获取表格中每行
    var rows = tables[i].getElementsByTagName('tr');
    //隔行设置颜色
    for (var j = 0; j < rows.length; j++) {
      if (falg == true) {
        // rows[j].className = oddStyle;
        addClass(rows[j], oddStyle);
        falg = false;
      }else{
        falg = true;
      }
    };
  };
}
addLoadEvent(function  () {
  stripeTables('odd');
});


//给元素添加类
function addClass (element,value){
  //如果该元素没有class，直接添加
  if(!element.className){
    element.className = value;
  }else{
    var newClassName = element.className;
    newClassName += " ";
    newClassName += value;
    element.className = newClassName;
  }
}