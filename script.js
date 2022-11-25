var login = document.getElementById("login-btn");
var loginBox=document.getElementById("login-box");
var box=document.getElementById("box")
box.style.display  = "none"
login.addEventListener("click",function(){
    var acc= document.getElementById("acc-num").value;
    var pass= document.getElementById("acc-pass").value;

    if(acc=="" ){
        alert("plz input your acccount numbre")
    }

    else if(pass==""){
        alert("plz input your password")
    }
    else{
        loginBox.style.display = "none"
        box.style.display = "block"
    }
})
//Deposite start 
var add=document.querySelector("#add");
add.addEventListener("click",function(){
    var dep = document.getElementById("dep").innerHTML;
    var depvalue = parseFloat(dep);
    var depinp  =document.getElementById("depinp").value;
    var depinpValue = parseFloat(depinp);
    if(depinp==""){
        alert("input your deposite balance")
    }
    else{
        var totalDeposite  = depvalue + depinpValue;
        document.getElementById("dep").innerHTML= totalDeposite.toFixed(2);
    
    
        var balance  = document .getElementById("balance").innerHTML;
        var mainBalance = parseFloat(balance);
        var totalBalance = depinpValue+mainBalance;
        document .getElementById("balance").innerHTML=totalBalance.toFixed(2);
    }


})
//Deposite End

//withdrow start
    var widthraw = document.getElementById("widthraw");
    widthraw.addEventListener("click",function(){

        var wid=document.getElementById("wid").innerHTML;
        var widValue = parseFloat(wid);
        var widinp  = document.getElementById("widinp").value;
        var widinpVAlue = parseFloat(widinp);
        if(widinp==""){
            alert("input your widthrow balance")
        }
        else{
            var totalWidthrow = widValue+widinpVAlue;
            document.getElementById("wid").innerHTML = totalWidthrow;
    
    
            var totalWidthrow = widValue+widinpVAlue;
            document.getElementById("wid").innerHTML = totalWidthrow;
    
    
            var balance  = document .getElementById("balance").innerHTML;
            var mainBalance = parseFloat(balance);
            var totalBalance = mainBalance-widinpVAlue;
        
            document .getElementById("balance").innerHTML=totalBalance.toFixed(2);
        }


        // var totalWidthrow = widValue+widinpVAlue;
        // document.getElementById("wid").innerHTML = totalWidthrow;


        // var totalWidthrow = widValue+widinpVAlue;
        // document.getElementById("wid").innerHTML = totalWidthrow;


        // var balance  = document .getElementById("balance").innerHTML;
        // var mainBalance = parseFloat(balance);
        // var totalBalance = mainBalance-widinpVAlue;
    
        // document .getElementById("balance").innerHTML=totalBalance


        // var balance  = document .getElementById("balance").innerHTML;
        // var mainBalance = parseFloat(balance);
        // var totalBalance = mainBalance-widinpVAlue;

        // document .getElementById("balance").innerHTML=totalBalance


    })
//withdrow start