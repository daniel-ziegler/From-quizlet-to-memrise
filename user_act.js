$(document).ready(function () {
    var big_data, temp_arr, counter_rf

    function parseArray(arr) {
        return arr.split('\n')
    }

    function setExport(value) {
        var temp_rf, temp_rf_rf
        temp_rf_rf = value.split('\t')
        temp_rf = temp_rf_rf.filter(function (v, k) {
            return k > 0
        })

        $('.export_rf').val($('.export_rf').val() + temp_rf_rf[0] + ',' + temp_rf.join('') + ', ,' + ' ;');
    }

    function showSuggestions(value) {
        var temp_rf, temp1, temp2
        temp_rf = value.indexOf(',')
        temp1 = value.slice(0,temp_rf)
        temp2 = value.slice(temp_rf+1,value.length)
        $('.results').html('')
        $('.results').html(temp1+'<br/><br/>'+'<span class="under">'+temp2+'</span>')
    }

    $('.button1').on('click', function () {
        counter_rf = 0
        big_data = $('.import_rf').val()
        temp_arr = parseArray(big_data)
        showSuggestions(temp_arr[counter_rf])
    })

    $('.button2').on('click', function () {
        setExport(temp_arr[counter_rf])
        counter_rf++
        showSuggestions(temp_arr[counter_rf])

    })
    $('.button3').on('click', function () {
        counter_rf++
        showSuggestions(temp_arr[counter_rf])
    })
})
