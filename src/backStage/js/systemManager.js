/**
 * Created by Administrator on 2016/3/22.
 */
$(function(){
    var dom = {
        $imgForm : $('.img-form')
    };

    var method = {

        /*图片显示*/
        setImagePreview: function (file)
        {
            var docObj = file;

            if (docObj.files && docObj.files[0]) {
                //火狐下，直接设img属性
                if (window.navigator.userAgent.indexOf("Chrome")
                    >= 1
                    || window.navigator.userAgent.indexOf("Safari")
                       >= 1) {
                    return window.URL.createObjectURL(docObj.files[0]);
                }
                else {
                    return window.URL.createObjectURL(docObj.files[0]);
                }
            }
        }
    };


    dom.$imgForm.on('click','.selFile',function(){

        $(this).on('change',function(){
            var file = $(this)[0],
                src = method.setImagePreview(file);

            var parents = $(this).parents('.img-form'),
                img = parents.find('img');

            img[0].src = src;
        })


    });


});













