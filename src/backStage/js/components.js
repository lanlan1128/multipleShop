// 商品分类管理
var $editModal = $('#editModal');
var editModalDom = {
    // 按钮
    $exit : $editModal.find('#exit'),
    $calcel : $editModal.find('#cancel'),
    $sure: $editModal.find('#sure'),
    // 内容
    $name :  $editModal.find('#name'),
    $imgBox : $editModal.find('.imgBox')
}

/* 编辑弹出框的确定按钮 */
editModalDom.$sure.click(function(){

    // 名称不为空
    if($.trim(editModalDom.$name.val()) == '' ){
        showTipModal('请输入类别名称');
        return false;
    }

    // 照片不为空
    if( editModalDom.$imgBox.find('img').size() == 0 ) {
        showTipModal('请上传类别图片');
        return false;
    }
    // 提交数据(添加大类)

    // 关闭弹出框
    $editModal.modal('hide');
    // 清除弹出框数据
    $form = $editModal.find('form');
    emptyFormData($form);

})

$('#addBig, #addSmall').click(function(){
    $form = $editModal.find('form');
    emptyFormData($form);
})

/* 编辑弹出框的取消按钮 */
editModalDom.$exit.click(function(){
    $form = $editModal.find('form');
    emptyFormData($form);
})
editModalDom.$calcel.click(function(){
    $form = $editModal.find('form');
    emptyFormData($form);
})

/* 清除编辑框数据 */
function emptyFormData($form){
    var $resetBtn = $('<button type="reset" style="display: none"></button>');
    $resetBtn.appendTo($form);
    $resetBtn.click();
    $form.find('.imgBox img').remove();
}

/* 弹出提示弹出框 */
function showTipModal(content) {
    $('#tipModal .modal-body p').text(content);
    $('#tipModal').modal();
}

/* 提示弹出框点击确定 */
$('#tipModalSure').click(function(){
    $('#tipModal').modal('hide');
})

/* 大类表格的编辑 */
$('.BigEdit, .SmallEdit').click(function(){
    // 获取表格中的数据
    var name =  $(this).parent().siblings('.name').find("a").text();    /* 类名 */
    var imgSrc =  $(this).parent().siblings('.img').find('img').attr('src')    /* 类图 */

    editModalDom.$name.val(name);

    var $image = $("<img class='image'>");
    $image.attr('src',imgSrc);
    var h=w=$('.imgBox').css('width');
    realImage($image,w,h);
    editModalDom.$imgBox.append($image);

})


/* 登录框关闭 */
$('#loginModal').modal({backdrop: 'static', keyboard: false});

/* 登录表单 */
$('#login_btn').click(function(){
    check();
})

function check() {
    var $userName = $('#userName');
    var $inputPassword = $('#inputPassword');

    if($.trim($userName.val()) == ''){
        $("#loginTip").text('用户名不能为空').show();
        return false;
    }

    if($.trim($inputPassword.val()) == ''){
        $("#loginTip").text('密码不能为空').show();
        return false;
    }

    // 省份验证
    // ....

    $("#loginTip").hide();
    $('#loginModal').modal('hide');
    $('.btnExit').show();
}

function keyCheck(e) {
    var e = e || window.e || arguments.callee.caller.arguments[0]
    if(e && e.keyCode == 13) {   // Enter键
        check();
    }
}










