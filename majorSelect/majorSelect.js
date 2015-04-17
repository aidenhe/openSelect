$(function(){
    var event = {
        makeCenter : function(){
            $('#choose-box-wrapper').css("display","block");
            $('#choose-box-wrapper').css("position","absolute");
            $('#choose-box-wrapper').css("top", Math.max(0, (($(window).height() - $('#choose-box-wrapper').outerHeight()) / 2) + $(window).scrollTop()) + "px");
            $('#choose-box-wrapper').css("left", Math.max(0, (($(window).width() - $('#choose-box-wrapper').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
        },
        initMajorClass : function(){
            //原先的专业类别列表清空
            $('#choose-a-majorClass').html('');
            for(var i=0;i<majorList.length;i++)
            {
                $('#choose-a-majorClass').append('<a class="majorClass-item" majorClass-id="'+majorList[i].id+'">'+majorList[i].className+'</a>');
            }
            
            //添加专业类别列表项的click事件
            $('.majorClass-item').bind('click', function(){
                    var item=$(this);
                    var majorClass = item.attr('majorClass-id');
                    var choosenItem = item.parent().find('.choosen');
                    if(choosenItem){
                        $(choosenItem).removeClass('choosen');
                    }
                        
                    item.addClass('choosen');
                    //更新专业列表
                    event.initMajor(majorClass);
                }
            );
        },
        initMajor : function(majorClassID){
            //原先的专业列表清空
            $('#choose-a-major').html('');
            var majors = majorList[majorClassID-1].class;
            for(var i=0;i<majors.length;i++)
            {
                $('#choose-a-major').append('<a class="major-item" major-id="'+majors[i].id+'">'+majors[i].name+'</a>');
            }
            //添加专业列表项的click事件
            $('.major-item').bind('click', function(){
                    var item=$(this);
                    var major = item.attr('major-id');
                    //更新选择专业文本框中的值
                    $('#selectMajor').val(item.text());
                    //关闭弹窗
                    $('#choose-box-wrapper').css("display","none");
                }
            );

        },
        selectMajor : function(){
            $('#selectMajor').click(function(){
                //将窗口居中
                event.makeCenter();

                //初始化省份列表
                event.initMajorClass();

                //默认点击第一个专业类别
                $($('.majorClass-item')[0]).trigger('click');

            });
        },
        close : function(){
            $('#close').focus(function(){
                $('#choose-box-wrapper').css("display","none");
            });
        },
        searchMajor : function(){
            $('#searchMajor').focus(function(){
                $(this).val('');
            });
            $('#searchMajor').keyup(function(){
                var searchVal = $(this).val();
                var searchResult = [];
                $.each(majorList, function(i, n){
                        $.each(n['class'], function(k, item){
                        if (item.name.indexOf(searchVal) != -1){
                            searchResult.push(item);
                        }
                    });
                });

                $('#choose-a-major').html('');
                for (var i=0; i < searchResult.length; i++){
                    $('#choose-a-major').append('<a class="major-item" major-id="'+searchResult[i].id+'">'+searchResult[i].name+'</a>');
                }
                //添加专业列表项的click事件
                $('.major-item').bind('click', function(){
                        var item=$(this);
                        var major = item.attr('major-id');
                        //更新选择大学文本框中的值
                        $('#selectMajor').val(item.text());
                        //关闭弹窗
                        $('#choose-box-wrapper').css("display","none");
                    }
                );
            });

        },
        init : function(){
            //初始化选择、关闭
            this.selectMajor();
            this.close();
            this.searchMajor();
        }
    };

    event.init();

});