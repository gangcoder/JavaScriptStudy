//响应鼠标悬停时改变详实
function highlightRows () {
  if (!document.getElementsByTagName) return false;
    //获取所有表格的行
    var rows = document.getElementsByTagName('tr');
    //为表格行添加响应颜色
    for (var i = 0; i < rows.length; i++) {
      //添加鼠标事件
      rows[i].onmouseover=function() {
        this.style.fontWeight = 'bold';
      }; 
      //撤销鼠标悬停效果
      rows[i].onmouseout =function() {
        this.style.fontWeight = 'normal';
      };
    };
}
addLoadEvent(highlightRows);
