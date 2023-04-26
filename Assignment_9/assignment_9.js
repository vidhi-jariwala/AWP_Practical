var divide = function(x,y,next){
    if(y===0){
        next(new Error("Can not divide by Zero."));
    }
    else
    {
        next(null,x/y);
    }
}

divide(8,2,function(err,result){
    if(err)
    {
        console.log("8/2=err",err);
    }
    else
    {
        console.log("8/2="+result);
    }
});

divide(8,0,function(err,result){
    if(err)
    {
        console.log("8/0=err",err);
    }
    else
    {
        console.log("8/0="+result);
    }
});

