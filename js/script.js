// ========== 1. 返回顶部功能 ==========
function goTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ========== 2. 访客数量统计（本地存储持久化） ==========
window.onload = function(){
    // 获取本地访客数，无数据则初始化为0
    let count = localStorage.getItem('visitCount') || 0;
    count++;
    // 存入本地存储
    localStorage.setItem('visitCount',count);
    // 渲染到页面
    document.getElementById('visit-count').innerText = count;
}

// ========== 3. 留言页表单验证【核心必考考点】 ==========
function checkForm(){
    // 获取表单元素值并去除首尾空格
    let username = document.getElementById('username').value.trim();
    let phone = document.getElementById('phone').value.trim();
    let email = document.getElementById('email').value.trim();
    let msg = document.getElementById('msg').value.trim();

    // 1. 昵称验证：非空，2-10位字符
    if(username === ''){
        alert('请输入你的昵称！');
        document.getElementById('username').focus();
        return false;
    }
    if(username.length < 2 || username.length > 10){
        alert('昵称长度必须在2-10个字符之间！');
        document.getElementById('username').focus();
        return false;
    }

    // 2. 手机号验证：11位纯数字正则
    let phoneReg = /^[0-9]{11}$/;
    if(!phoneReg.test(phone)){
        alert('请输入合法的11位手机号码！');
        document.getElementById('phone').focus();
        return false;
    }

    // 3. 邮箱正则验证
    let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(!emailReg.test(email)){
        alert('请输入合法的电子邮箱格式！\n示例：123456@qq.com');
        document.getElementById('email').focus();
        return false;
    }

    // 4. 留言内容验证：非空，不少于10个字
    if(msg === ''){
        alert('请输入留言内容！');
        document.getElementById('msg').focus();
        return false;
    }
    if(msg.length < 10){
        alert('留言内容不能少于10个字符，请补充内容！');
        document.getElementById('msg').focus();
        return false;
    }

    // 所有验证通过
    alert('留言提交成功！感谢你的互动😊');
    return true;
}

// ========== 4. 导航栏滚动变色特效 ==========
window.addEventListener('scroll',function(){
    let nav = document.querySelector('.main-nav');
    if(window.scrollY > 50){
        nav.style.background = '#228B22';
    }else{
        nav.style.background = '#3CB371';
    }
})