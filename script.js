lu1 = document.getElementsByClassName('1')
lu2 = document.getElementsByClassName('2')
lu3 = document.getElementsByClassName('3')
lu4 = document.getElementsByClassName('4')
lu5 = document.getElementsByClassName('5')
lu6 = document.getElementsByClassName('6')
lu7 = document.getElementsByClassName('7')

lu1.addEventListener('click', function () {
    window.location.href='LU1.html'
    lu1.classList.add('active')
    lu2.classList.remove('active')
    lu3.classList.remove('active')
    lu4.classList.remove('active')
    lu5.classList.remove('active')
    lu6.classList.remove('active')
    lu7.classList.remove('active')
})
lu2.addEventListener('click', function () {
    window.location.href='LU2.html'
    lu2.classList.add('active')
    lu1.classList.remove('active')
    lu3.classList.remove('active')
    lu4.classList.remove('active')
    lu5.classList.remove('active')
    lu6.classList.remove('active')
    lu7.classList.remove('active')
})
lu3.addEventListener('click', function () {
    window.location.href='LU2.html'
    lu3.classList.add('active')
    lu2.classList.remove('active')
    lu1.classList.remove('active')
    lu4.classList.remove('active')
    lu5.classList.remove('active')
    lu6.classList.remove('active')
    lu7.classList.remove('active')
})
lu4.addEventListener('click', function () {
    window.location.href='LU4.html'
    lu4.classList.add('active')
    lu2.classList.remove('active')
    lu3.classList.remove('active')
    lu1.classList.remove('active')
    lu5.classList.remove('active')
    lu6.classList.remove('active')
    lu7.classList.remove('active')
})
lu5.addEventListener('click', function () {
    window.location.href='LU5.html'
    lu5.classList.add('active')
    lu2.classList.remove('active')
    lu3.classList.remove('active')
    lu4.classList.remove('active')
    lu1.classList.remove('active')
    lu6.classList.remove('active')
    lu7.classList.remove('active')
})
lu6.addEventListener('click', function () {
    window.location.href='LU6.html'
    lu6.classList.add('active')
    lu2.classList.remove('active')
    lu3.classList.remove('active')
    lu4.classList.remove('active')
    lu5.classList.remove('active')
    lu1.classList.remove('active')
    lu7.classList.remove('active')
})
lu7.addEventListener('click', function () {
    window.location.href='LU7.html'
    lu7.classList.add('active')
    lu2.classList.remove('active')
    lu3.classList.remove('active')
    lu4.classList.remove('active')
    lu5.classList.remove('active')
    lu6.classList.remove('active')
    lu1.classList.remove('active')
})