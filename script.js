// ---Dizi türünde Models objesi---
var models = [
  {
    name: 'Bmw 418d',
    image: 'img/honda.jpg',
    link: 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'
  },
  {
    name: 'Mazda 418d',
    image: 'img/bmw.jpg',
    link: 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'
  },
  {
    name: 'Volvo 418d',
    image: 'img/mazda.jpg',
    link: 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'
  },
  {
    name: 'Mercedes 418d',
    image: 'img/skoda.jpg',
    link: 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'
  },
  {
    name: 'Doğan 418d',
    image: 'img/volvo.jpg',
    link: 'http://www.arabalar.com.tr/bmw/1-serisi/2023/116d-1-5-sport-line'
  }
]

var index = 0
var slaytCounts = models.length - 1
var interval;

var settings = {
  duration: '1000',
  random: false
}
init(settings)

// ----sol ok ile geri hareket---

document
  .querySelector('.fa-arrow-circle-left')
  .addEventListener('click', function () {
    index--
    showSlide(index)
  })
// ---sağ ok ile ileri hareket---
document
  .querySelector('.fa-arrow-circle-right')
  .addEventListener('click', function () {
    index++
    showSlide(index)
  })
// --------------------------------------------------
function init (set) {
  var prev
  interval=setInterval(function () {
    if (set.random) {
      do {
        //do-while kullanarak bir önceki sayının aynısının üretilmesini engelledik
        index = Math.floor(Math.random() * (slaytCounts + 1))
      } while (index == prev)
      prev = index

      console.log(index)
    } else {
      showSlide(index)
      index++
      console.log(index)
    }
    showSlide(index)
  }, settings.duration)
}

//   ---index numarasına göre slayt gösteren fonksiyon---

function showSlide (i) {
  index = i // gelen parametreyi index değerine atamak önemli
  if (index < 0) {
    index = slaytCounts
  }
  if (index > slaytCounts) {
    index = 0
  }

  document.querySelector('.card-title').textContent = models[index].name
  document
    .querySelector('.card-img-top')
    .setAttribute('src', models[index].image)
  document.querySelector('.card-link').setAttribute('href', models[index].link)
}


document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})


document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings)
    })
})