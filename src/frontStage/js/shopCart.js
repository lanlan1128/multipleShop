var thisProduct;
/* 商品删除 */
function delProduct(obj,id){
    var $targetDel = $(this).parents('div').eq(3);
    console.log($targetDel.attr("id"));
    /*    console.log( $targetDel.parent() );*/
    /* 弹窗 */
    var dia=$.dialog({
        content:'确定删除该商品么',
        button:["确认","取消"]
    });

    dia.on("dialog:action",function(e){
        /*确定删除*/
        if(e.index == 0) {
            $targetDel.remove();
            window.location.href="../removeProduct/"+id;
        }
        if( $('.productBox').size() == 0 ) {
            $('#noProductWrapper').removeClass('hide');
            $('#hasProductWrapper').empty();
        }
    });




};

$('.minus').tap(function(){
    $thisProduct = $(this).parents('div').eq(3);
    var id = $thisProduct.attr('id');
    var $num = $(this).siblings('input');         //  当前选择数量
    var min = parseInt( $num.attr('data-min') );
    var num =  parseInt( $num.val() );
    if ( num > min ) {          // 修改数量显示
        $num.val( num-1 );
        num = num-1;

        editPrice($thisProduct,'reduce',id,num);
    }
});

/* 商品数量编辑 */
$('.plus').tap(function(){

    var $thisProduct = $(this).parents('div').eq(3);
    var id = $thisProduct.attr('id');

    /*数量的改变*/
    var $num = $thisProduct.find('input');              // 当前选择数量
    var max = parseInt( $num.attr('data-max') );    // 最大库存
    var num =  parseInt ( $num.val() );
    if( num < max ) {
        $num.val( num+1 );
        num =num+1;

        editPrice($thisProduct,'add',id,num);
    }else {
        /*达到最大库存量信息提示*/
        $.tips({
            content:'已达到最大库存量',
            stayTime:2000,
            type:"success"
        })
    }
});

$('.selectNum input').tap(function() {

    var $thisProduct = $(this).parents('div').eq(3);
    var id = $thisProduct.attr('id');
    var $num = $(this);         //  当前选择数量
    var max = parseInt( $num.attr('data-max') );    // 最大库存
    var min = parseInt( $num.attr('data-min') );
    /*弹框编辑数量*/
    var dia=$.dialog({
        title:'输入商品数量',
        content: "<p>库存量" + max + "</p>" +
        "<input type='text' id='myNum' class='ui-input' />",
        button:["取消","确认"]
    });

    var $myNum = $('#myNum');
    $myNum.focus();
    $myNum.val( $num.val() );

    dia.on("dialog:action",function(e){
        if(e.index == 1 ) {
            var num = $myNum.val();
            if( $myNum.val() == '' ) {
                num = 1;
            }
            if( $myNum.val()<min||$myNum.val()==null){
                num = min;
            }
            $num.val( num );
        }
        editPrice($thisProduct,'edit',id,num);
    });

    /* 弹出框的商品数量填写限制 */
    $('#myNum').keyup(function () {

        var $num = $thisProduct.find('input');              // 当前选择数量
        var max = parseInt( $num.attr('data-max') );    // 最大库存

        var inputdata = $(this).val().replace(/\D/g, '');
        if (inputdata != '' && inputdata < 1) {
            inputdata = 1;
        }
        if (inputdata != '' && inputdata > max) {
            inputdata = max;
        }
        $(this).val(inputdata);
    });


    /*      var max = parseInt( $(this).attr('data-max'));
     if( parseInt( $(this).val() ) > max ) {
     $(this).val(max);
     }
     if( parseInt( $(this).val() ) < 1 ) {
     $(this).val(1);
     }*/

});
/*价格改变*/
function editPrice($thisProduct,type,id,num) {
    $.ajax({
        url: "../editOrderProductNum?id=" + id + "&num=" + num
    });
    var $num = $thisProduct.find('input');                       // 数量
    var $unitPrice = $thisProduct.attr('data-unitPrice') ;      // 单价
    var $price =  $thisProduct.find('.price');                  // 总价

    var unitPrice = parseFloat($unitPrice);
    //var price;
    //if(type == 'add') {
    //    price = ( parseFloat( $price.text().substr(1)) + unitPrice ).toFixed(2);     // 商品的价格
    //}else if(type == 'reduce'){
    //    price = ( parseFloat( $price.text().substr(1) ) - unitPrice ).toFixed(2);     // 商品的价格
    //}else {
    //    price =  ( unitPrice * parseFloat( $num.val() ) ).toFixed(2);     // 商品的价格
    //}
    //
    //$price.html('&#165; ' + price);
    acountPrice();
    /*商品总计改变*/
    acountNum();
}

/*总价的计算*/
/*总价的计算*/
function acountPrice() {

    var totalPrice = 0;
    var price;
    $('.productBox').each(function(index,value){
        var num = parseFloat( $(value).find('input[title="number"]').val() );
        var price = parseFloat( $(value).find('.price').text().substr(1) );
        totalPrice = parseFloat(parseFloat(totalPrice) + parseFloat(num*price)).toFixed(2);
    });

    $('#amount').html('&#165; ' + totalPrice);
}

/*商品总数量的改变*/
function acountNum() {
    var totalNum = 0;
    $('.productNum').each(function(){
        totalNum = totalNum + parseInt( $(this).val());
    });
    $("#num").text(totalNum)
}

var x = 20;
function test(){
    this.x = 2;
    console.log(x) // or console.log(this.x)
}
// 结果为2

var x = 5;
function test(){
    console.log(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m();
// 输出 1

function test() {
    this.x = 2;
}
var o =  new test();
console.log(o)
// 输出 test {x:2}
console.log(o.x)
// 输出 2
o()
// 报错，不能作为函数调用

var x = 0;
function test(){
    console.log(this.x);
}
var o = {};
o.x = 1;
o.m = test;
o.m.apply();
// 输出0  因为当apply()的参数为空时，默认调用全局对象golbal
o.m.apply(o);
// 输出1




function People(name){
    this.name = name;
    this.Introduce = function(){
        console.log('Hello,my name is '+this.name)
    }
}

People.Run() = function(){
    console.log("I can run")
}

People.prototype.Introduce = function(){
    console.log('Hello,my name is '+this.name)
}

var p1 = new People("lanlan");
p1.Introduce();


function baseClass(){
    this.showMsg = function(){
        alert("baseClass::showMsg");
    }
}

function extendClass(){

}

extendClass.prototype = new baseClass();
var instance = new extendClass();
instance.showMsg();