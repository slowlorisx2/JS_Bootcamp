function hostnameCheck(){
    let i = false;
    do{
        if (i) alert("Enter a valid Email address");
        var userEmail = prompt("Enter your email");
        i = true;
    } 
    while (userEmail.indexOf("@", 0) == -1 || userEmail.indexOf(".", 0) == -1 || userEmail.length < 6);
    
    var start = userEmail.indexOf("@"+ 1);
    var hostname = userEmail.substring(start, userEmail.length);
    
    return alert("Your domain is " + hostname);
}

