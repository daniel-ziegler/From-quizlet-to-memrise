$(document).ready(function() {
    var big_data, temp_rf, temp_arr, bacon_rf, counter_rf
    function parseArray(arr){
        var temp
        temp = arr.split(';');
        return temp
    }
    function setExport(value){
        var temp_rf, temp_rf_rf
        temp_rf_rf = value.split(',')
        temp_rf = temp_rf_rf.filter(function(v,k){
            return k>0
        })

        $('.export_rf').val($('.export_rf').val() +temp_rf_rf[0]+','+temp_rf.join('')+', ,'+' ;');
    }
    $('.button1').on('click',function(e){
        counter_rf = 0
        big_data = $('.import_rf').val();
        temp_arr = parseArray(big_data)
        bacon_rf = Bacon.fromArray(temp_arr)
        $('.results').html(temp_arr[0]);
    })

    $('.button2').on('click',function(){

        setExport($('.results').html())
        counter_rf++
        temp_rf = temp_arr[counter_rf]
        $('.results').html('');
        $('.results').html(temp_rf);

    })
    $('.button3').on('click',function(){
        counter_rf++
        temp_rf = temp_arr[counter_rf]
        $('.results').html('');
        $('.results').html(temp_rf);
    })
})