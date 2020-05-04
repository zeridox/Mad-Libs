$(document).ready(function(){
    

    document.onkeydown = function(e){
        if(e.keyCode==13){
        var sVal= $('#subject-input').val();
        var nVal= $('#noun-input').val();
        var vVal= $('#verb-input').val();
        var adVal=$('#r-adjective').val();
        var cVal=$('#r-clause').val();
        var intVal=$('#int').val();
        var bgColor= $('#color-input').val();
        

        $('*').css('color',bgColor);
        $('#subject').html(sVal);
        $('#noun').html(nVal);
        $('#verb').html(vVal);
        $('#adjective-input').html(adVal);
        $('#clause').html(cVal);

        


        var randomNum= Math.floor(Math.random()*10) +1;
        if(randomNum==1){
            $('#r-adjective').html('Intelligent'+'  ');
            $('#r-clause').html('  '+'is taking over the'+'  ');
            $('#int').html('  '+'by'+'  ');
            generateText();
        }
        if(randomNum==2){
            $('#r-adjective').html('Lovely'+'  ');
            $('#r-clause').html('  '+'is creating'+'  ');
            $('#int').html('  '+'by'+'  ');
            generateText();
        }
        if(randomNum==3){
            $('#r-adjective').html('Curious'+'  ');
            $('#r-clause').html('  '+'will find'+'  ');
            $('#int').html('  '+'by'+'  ');
            generateText();
        }
        if(randomNum==4){
            $('#r-adjective').html('Dauntless'+'  ');
            $('#r-clause').html('  '+'got in trouble'+'  ');
            $('#int').html('  '+'by'+'  ');
            generateText();
        }
        if(randomNum==5){
            $('#r-adjective').html('Crazy'+'  ');
            $('#r-clause').html('  '+'has no'+'  ');
            $('#int').html('  '+'for'+'  ');
            generateText();
        }
        if(randomNum==6){
            $('#r-adjective').html('Humorous'+'  ');
            $('#r-clause').html('  '+'thinks'+'  ');
            $('#int').html('  '+'is'+'  ');
            generateText();
        }
        if(randomNum>6){
            $('#r-adjective').html('My name is'+'  ');
            $('#r-clause').html('  '+'and I know how to'+'  ');
            $('#int').html('  '+'for the sake of'+'  ');
            generateText();
        }

        function generateText(){
            let generate= document.createElement('div');
            let text= $('#first');
            var tapPed= new Date($.now());
            text.append(generate);
            generate.classList.add('container-new');
            generate.append(`${tapPed} logged:${adVal} ${sVal} ${cVal} ${vVal} ${intVal} ${nVal}.`);
            $('#first').css('color',bgColor);
            $('input').css('border',`1px solid ${bgColor}`); 
            $('button').css('border',`1px solid ${bgColor}`);
            var place= $('input').attr('placeholder');
            place.css('color',`1px solid ${bgColor}`);  
        }

        
        
    };
   
}

  });
