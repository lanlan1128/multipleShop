$(function(){

    /*轮播图比例*/
    $('#carouselContainer').height( $('body').width()*0.3 );

    $('#productDetailSlider').height( $('body').width() );

    /* 轮播图《首页和商品详情》 */
    window.addEventListener('load', function(){

        /* fz 即 FrozenJS 的意思 */
        var slider = new fz.Scroll('.ui-slider', {
            role: 'slider',
            indicator: true,
            autoplay: true,
            interval: 3000,
            autoplay: true
        });

        /* 滑动开始前 */
        slider.on('beforeScrollStart', function(from, to) {
            // from 为当前页，to 为下一页
        })

        /* 滑动结束 */
        slider.on('scrollEnd', function(cruPage) {
            // curPage 当前页
        });

    });




});

/* 点击查看倾销价 */
function watchPrice(){
    var goPayDialog =  $("#goPayDialog").dialog("show");
    goPayDialog.on('dialog:action',function(e){
        if(e.index == 1) {
            window.location.href= "../watchGood/"+$("#id").val();
        }
    })
};


function signUser(){
    var goPayDialog =  $("#goSignDialog").dialog("show");
    goPayDialog.on('dialog:action',function(e){
        if(e.index == 1) {
            window.location.href= "../personSign";
        }
    })
};