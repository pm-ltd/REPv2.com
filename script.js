$(document).ready(function () {
    $.get('https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0x221657776846890989a759ba2973e427dff5c9bb&apikey=619FBIKWWUYDA961ASWDATHW13VW5J2P2J', function (data) {
        var num = (data.result / 1000000000000000000);
        var diff = 11000000 - num;
        $('#REPv2').html(num.toFixed(0));
        $('#REP').html(diff.toFixed(0));
        var percent = (num / 11000000);
        var REPv2Per = (percent * 100).toFixed(2) + "%";
        var REP_Per = (100 - percent * 100).toFixed(2) + "%";
        $('#total_per').html("100%");
        $('#REPv2_per').html(REPv2Per);
        $('#REP_per').html(REP_Per);
    })
})
