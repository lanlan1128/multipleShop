/**
 * Created by Administrator on 2016/3/22.
 */

/* 商品详情 */
$(function(){
    var dom = {
        $carouselImg : $('#carouselImg'),
        $illustration : $('#illustration'),
        $img_content : $(".img-content")
    };
    var cMaxNum = 5, cMinNum = 1;   // 商品轮播张数限制
    var fMaxNum = 10, fMinNum = 0;   // 商品配图张数限制

    var method = {
        addDom : function(judge){

            var fileName;
            if(judge=="#carouselImg") {
                fileName = "files";
            }else if(judge=="#illustration") {
                fileName = "detailfiles";
            }

            return    '<div class="col-xs-6 col-sm-2 col-lg-2">' +
                '<div class="img-content add-content">'+
                '<input type="file" class="fileInp" name=' + fileName + ' />' +
                '<span class="add">&#43;</span>' +
                '<img src="" alt="" class="img" style="display: none" />'+
                '<span class="cancel" style="display: none;">&#88;</span>'+
                '</div>'+
                '</div>';
        },

        changeFile : function(_this,maxNum,par){
                var imgcontent = $(_this).parents('.img-content'),src,that=_this;


                 // 利用formData对象异步上传图片 但存在兼容性问题
                 var file = $(_this)[0].files[0];
                 var data = new FormData();
                 data.append('files',file);

                 $.ajax({
                 type : 'POST',
                 data : data,
                 processData : false,
                 contentType : false,
                 url : '/uploadFile',
                 dataType: 'json',
                 success : function(data){
                    /* console.log(data);
                     data = JSON.parse(data);*/
                     //data = JSON.stringify(data);
                     if(data.status == 1){
                         src = data.image;
                         $(that).hide();
                         imgcontent.find('.add').hide();
                         imgcontent.find('img').attr({'src':src}).show();
                         imgcontent.find('.cancel').show();
                         imgcontent.find('.imgSrc').val(src);
                         imgcontent.removeClass('add-content');
                         /*input*/
                         var input = $('<input name=' + $(_this).attr("name") + '>');
                         input.attr({'type':'hidden','value':src });
                         imgcontent.append(input);

                         var index = $(par).find('.img-content').length;
                         if(index < maxNum) {
                             imgcontent.parents(par).append(method.addDom());
                             resizeImg(dom.$img_content);
                         }
                         $(_this).remove();
                    }
                 },
                 error:function(data){
                     alert('系统错误！');
                 }
             });

        },

        cancelImg : function(_this,par, maxNum){
            var parent = $(_this).parents('.img-content').parent(),
                perParent = $(_this).parents(par);

            parent.remove();      // 删除图片的父容器

            // 上传到最大张数
            if ( perParent.find('img-content').length == maxNum - 1 ) {
                perParent.find('add-content').remove();
            }

            //  删除图片后小于最大张数
            var index = perParent.find('.add-content').length;
            if(index == 0){
                perParent.append(method.addDom(par));
                resizeImg( dom.$img_content);
            }

        }

    };

    dom.$carouselImg.on('change','.fileInp',function(){
        method.changeFile(this,cMaxNum,'#carouselImg');
    });

    dom.$illustration.on('change','.fileInp',function(){
        method.changeFile(this,fMaxNum,'#illustration');
    });

    dom.$carouselImg.on('click','.cancel',function(){
        method.cancelImg(this,'#carouselImg',cMaxNum);
    });

    dom.$illustration.on('click','.cancel',function(){
        method.cancelImg(this,'#illustration',fMaxNum);
    });

    //建立一個可存取到該file的url
    function getObjectURL(file) {
        var url = null;
        if (window.createObjectURL != undefined) { // basic
            url = window.createObjectURL(file);
        } else if (window.URL != undefined) { // mozilla(firefox)
            url = window.URL.createObjectURL(file);
        } else if (window.webkitURL != undefined) { // webkit or chrome
            url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }

});



