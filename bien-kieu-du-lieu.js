
//bài chuyển đổi độ C sang độ F
function chuyendoi() {
    let C=document.getElementById('doC').value;
   let F= parseInt(C)*9/5 + 32
    document.getElementById('doF').value=F
}


//tính chu vi hình tròn
function chuvi() {
    let R=document.getElementById('bR').value;
    let ChuVi=(parseInt(R)*2)*3.14
    let Dientich=(parseInt(R)*parseInt(R))*3.14
    document.getElementById("CV").value=ChuVi
    document.getElementById("dv").value=Dientich
}


//chuyển đổi tiền tệ
function doitien() {
    let st1=document.getElementById('viet').value;
    let st2=document.getElementById('do').value;

    let cd2=parseInt(st1)*23000
.
    document.write('do').value=cd2
    document.write('viet').value=cd1
}