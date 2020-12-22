
let arr = [0, "-300px"]
let degree = [180, 0]
counter = 0
counter1 = 0
$("h3").click(function (e) {
    e.preventDefault()
    let degree = [180, 0]

    $(".menu").stop().animate({
        left: arr[counter]
    }, 700)
    counter++
    if (counter == arr.length) {
        counter = 0
    }
    $(".fa-sign-in").css({
        transform: `rotateY(${degree[counter1]}deg)`
    })
    counter1++
    if (counter1 == degree.length) {
        counter1 = 0
    }


})