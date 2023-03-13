// const answer = false;
// const myPromise = new Promise(function(resolve,reject){
//     if(answer){
//         resolve("ok")
//     }else{
//         reject("Thoi anh bien de")
//     }
// })
// myPromise
//     .then((response)=> response + " de em suy nghi da")
//     .then((result)=> console.log(result))
//     .catch((error)=> console.log(error))

// // console.log(myPromise)

// function addLinkScript(src){
//     return new Promise(function(resolve,reject){
//         let script = document.createElement("script"); //<script></script>
//         script.src = src //<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
//         script.onload = function(){
//             resolve(script);
//         }
//         script.onerror = function(){
//             reject("Loi duong dan");
//         }
//         document.head.append(script)
//     })
// }
// addLinkScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
//     .then((response)=> console.log(response))
//     .catch((error)=> console.log(error))

fetch("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
    .then((response)=>{
        let script = document.createElement("script")
        script.src = response.url
        document.head.append(script)
    })
    .catch((error)=>console.log(error))

fetch("https://reqres.in/api/users")
    .then((response)=> response.json())
    .then(({data})=> console.log(data))