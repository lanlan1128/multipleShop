$(function() {

    var productLists = [
        {
            name : '',
            productPrices: 0,
            wholesalePrices: 0,
            wathcPrices: 0,
            pv: 0,
            wholesaleCount: 0,
            num: 0,
            describes: ''
        }
    ];

    //添加产品列表
    function appendProduct (img, age) {
        var ui = document.getElementById("userinfo");

        //添加新行
        var newRow = ui.insertRow(ui.rows.length);

        //添加新的单元格
        newRow.insertCell(0).innerHTML = username;
        newRow.insertCell(1).innerHTML = age;

    }


    $.ajax({
        type : 'POST',
        url: 'Good/listGood',
        data: '',
        success: function(data){
            for(i=0;i++;i<productInfo.length) {
                productInfo[i] = data[i];
            }
        }
    })

});


