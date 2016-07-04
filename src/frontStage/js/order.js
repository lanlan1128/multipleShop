// 订单状态页面url解析
switch(window.location.pathname.split("/").pop())  {  // 条件根据具体情况设定
        /*待付款*/
        case "url":
            $daifukuan = $('#daifukuan');
            setActive($daifukuan);
            break;
        /*待发货*/
        case "url":
            $daifahuo = $('#daifahuo');
            setActive($daifahuo);
            break;
        /*待收货*/
        case "url":
            $daishouhuo = $('#daishouhuo');
            setActive($daishouhuo);
            break;
        /*已完成*/
        case "url":
            $yiwancheng = $('#yiwancheng');
            setActive($yiwancheng);
            break;
        /*待评价*/
        case "url":
            $daipingjia = $('#daipingjia');
            setActive($daipingjia);
            break;
        /*退款中*/
        case "url":
            $tuikuanzhong = $('#tuikuanzhong');
            setActive($tuikuanzhong);
            break;
        /*已关闭*/
        case "url":
            $yiguanbi = $('#yiguanbi');
            setActive($yiguanbi);
            break;
}


function setActive(objID){      
    objID.addClass("productBtn");
}