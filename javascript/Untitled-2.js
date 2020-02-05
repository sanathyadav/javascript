 let result;
 function temp() {
return new Promise((resolve,reject) =>{
    const temp=Math.floor(Math.random() *(300 - 1+1) + 1 );
    setTimeout(()=>{
        if(temp<200){
           result= resolve("its too hot",+temp)
        }
        else{
            result=reject('just right',+temp)
        }
    },250)
    //.then(result => console.log(result))
//.catch(error => console.log(error));
    })
}
temp().then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage) 

  }).catch((Error)=>{
      console.log("error"+error)
  })





     

 