const input = document.querySelector('#search')

function debounce(fn, delay){
    let timer;
    return function(){
        clearInterval(timer)
        timer = setTimeout(fn,delay);
    }
}

input.addEventListener("input", debounce(function(){
    console.log("Chala")
},400));

function throttle(fn,delay){
    let last = 0;
    return function(){
        let now = Date.now()
        if(now - last >= delay){
            last = now
            fn()
        }
    }
}

window.addEventListener("mousemove", throttle(function(){
    console.log("Chala")
},400))
