
        

function submitconfirm(){

    let submit=document.getElementsByClassName('contactform')
    confirmation=confirm('Do you really want to submit?')

    if(confirmation){
           
        submit.innerHTML = "<h1>SUBMITTED</h1><style>h1{text-align: center;}"
    }
    else{
        console.log('cancle');
       }
    }