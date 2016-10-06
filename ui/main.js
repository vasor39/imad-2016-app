//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create the request
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
        //NOT DONE YET
    };
    //make the request
    request.open('GET','http://vasor39.imad.hasura-app.io/counter',true);
    request.send(null);
};


var submit=document.getElementById('submit_btn');
submit.onclick=function(){
    var request=new XMLHttpRequest();
    
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){  //successful response with 200
                var names=request.responseText;
                names=JSON.parse(names);
                var list='';
                for (var i=0; i<names.length;i++){
                    list+= '<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById('nameList');
                ul.innerHTML=list;
            }
        }
        //NOT DONE YET
    };
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    //make the request
    request.open('GET','http://vasor39.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};