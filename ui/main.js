//counter code
var button=document.getElementById('counter');
button.onclick=function(){
    //create the request
    var request=new XMLHttprequest();
    
    request.onreadystatechange=function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //TAKE SOME ACTION
            if (request.status===200){
                var counter = request.responseText;
                var span=document.getElemenetById('count');
                span.innerHTML=counter.toString();
            }
        }
        //NOT DONE YET
    };
    //make the request
    request.open('GET','http://vasor39.imad.hasura-app.io/counter',true);
    request.send(null);
};