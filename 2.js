var arr= {
    name : "sahil sachdev",
    age: 20
}

var syncLS = {
    setItem : new Promise((resolve) => {
            resolve( setItem("obj" , JSON.stringify(arr)) )
    }),
    getItem : new Promise((resolve) => {
            resolve(getItem("obj"))
    })
    
}
syncLS.setItem
    .then((resolve)=>{console.log(resolve)})
    .catch((reset)=>{console.log(reset)})


syncLS.getItem
    .then((resolve)=>{console.log(resolve)})
    .catch((reset)=>{console.log(reset)})