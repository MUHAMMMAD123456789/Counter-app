let count = 0;

document.querySelector(".minus_btn").onclick = function(){
    count -= 1;
    document.querySelector(".num").innerHTML = count;
}

document.querySelector(".reset_btn").onclick = function(){
    count = 0;
    document.querySelector(".num").innerHTML = count;
}

document.querySelector(".plus_btn").onclick = function(){
    count += 1;
    document.querySelector(".num").innerHTML = count;
}


document.querySelector(".random_class").onclick = function(){
    count = Math.floor(Math.random() * 101);
    document.querySelector(".num").innerHTML = count;
}