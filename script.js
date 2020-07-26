var imagesArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
imagesArray = imagesArray.sort(randomSort)

var header = document.createElement('header')
header.innerHTML = 'Image Gallery'
header.style.textAlign = 'center'
header.style.height = '80px'
header.style.lineHeight = '80px'
header.style.fontSize = '30px'
document.body.appendChild(header)

var container = document.createElement('div')
container.classList.add('container')

for (var i = 0; i < imagesArray.length; i++) {
  var a = document.createElement('a')
  a.href = 'images/' + imagesArray[i]
  a.target = '_blank'
  var img = document.createElement('img')
  img.src = 'images/' + imagesArray[i]

  a.appendChild(img)
  container.appendChild(a)
}

document.body.appendChild(container)
var footer = document.createElement('footer')
footer.innerHTML = 'Xu Zhou'
footer.style.textAlign = 'center'
footer.style.height = '80px'
footer.style.lineHeight = '80px'
footer.style.fontSize = '30px'
document.body.appendChild(footer)

function randomSort () {
  return Math.random() - 0.5
}
