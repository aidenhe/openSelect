$(function(){

    var event = {

        init : function(){
            this.select();
            this.close();
        },
        makeCenter : function(){
            $('#choose-box-wrapper').css("display","block");
            $('#choose-box-wrapper').css("position","absolute");
            $('#choose-box-wrapper').css("top", Math.max(0, (($(window).height() - $('#choose-box-wrapper').outerHeight()) / 2) + $(window).scrollTop()) + "px");
            $('#choose-box-wrapper').css("left", Math.max(0, (($(window).width() - $('#choose-box-wrapper').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        },
        initProvince : function(){
            //原先的省份列表清空
            $('#choose-a-province').html('');
            for(var i=0;i<chinaCityList['0'].length;i++)
            {
                $('#choose-a-province').append('<a class="province-item" province-id="'+'0'+'_'+i+'">'+chinaCityList['0'][i]+'</a>');
            }
            //添加省份列表项的click事件
            $('.province-item').bind('click', function(){
                var item=$(this);
                var province = item.attr('province-id');
                var choosenItem = item.parent().find('.choosen');
                if(choosenItem){
                    $(choosenItem).removeClass('choosen');
                }
                    
                item.addClass('choosen');
                //更新市
                event.initCity(province);
            });
            //默认点击第一个省
            $($('.province-item')[0]).trigger('click');
        },
        initCity : function(province){
            $('#choose-a-city').html('');
            for(var i=0;i<chinaCityList[province].length;i++)
            {
                $('#choose-a-city').append('<a class="city-item" city-id="'+province+'_'+i+'">'+chinaCityList[province][i]+'</a>');
            }
            //添加市列表项的click事件
            $('.city-item').bind('click', function(){
                var item=$(this);
                var city = item.attr('city-id');
                var choosenItem = item.parent().find('.choosen');
                if(choosenItem){
                    $(choosenItem).removeClass('choosen');
                }
                    
                item.addClass('choosen');
                //更新市
                event.initTown(city);
            });
            //默认点击第一个市
            $($('.city-item')[0]).trigger('click');
        },
        initTown : function(city){
            $('#choose-a-town').html('');

            for(var i=0;i<chinaCityList[city].length;i++)
            {
                $('#choose-a-town').append('<a class="town-item" town-id="'+city+'_'+i+'">'+chinaCityList[city][i]+'</a>');
            }
            //添加县区列表项的click事件
            $('.town-item').bind('click', function(){
                var item=$(this);
                var city = item.attr('town-id');
                var areaArray = city.split('_');
                $('#province').val(chinaCityList[areaArray[0]][areaArray[1]]);
                $('#city').val(chinaCityList[areaArray[0]+'_'+areaArray[1]][areaArray[2]]);
                $('#town').val(item.text());
                $('#choose-box-wrapper').css("display","none");
            });
        },
        select : function(){
            $('#select').click(function(){
                //将窗口居中
                event.makeCenter();

                //初始化省份列表
                event.initProvince();
            });
        },
        close : function(){
            $('#close').focus(function(){
                $('#choose-box-wrapper').css("display","none");
            });
        }

    };
    event.init();

});