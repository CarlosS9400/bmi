
    $("a[data-role=tab]").each(function () {
        $(this).on("click", function () {
            $.mobile.changePage($(this).attr("href"), {
                transition: "none",
                changeHash: false

            });
            return false;
        });
        
    });

    $("#btn").on('click', function(){
        
        if($("#kg").val() && $("#meter").val()) {
        
            let bmiNum = 0
            bmiNum = $("#kg").val()/($("#meter").val()*$("#meter").val())

            //console.log(bmiNum)
            $("#bmi").val(bmiNum)
            $("#bmi").slider("refresh")
            
            $("#kg").val("")
            $("#meter").val("")

            setTimeout(function() { alert(`Your BMI: ${parseInt(bmiNum)}  
                                           小於 18.5 屬於體重過輕
                                           18.5 至 24 屬於正常範圍
                                           超過 24 屬於過重`); }, 500);

            
            
  
         } else {
           alert("請輸入你的數據 (Please input your data first) ")
         }
        
    });