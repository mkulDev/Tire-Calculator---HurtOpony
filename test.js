const slider = [
  '/assets/images/brands/cultor.jpg',
  '/assets/images/brands/goodride.jpg',
  '/assets/images/brands/hankook.jpg',
  '/assets/images/brands/infinity.jpg',
  '/assets/images/brands/kabat-logo.jpg',
  '/assets/images/brands/matador.jpg.jpg',
  '/assets/images/brands/metzeler.jpg',
  '/assets/images/brands/nankang.jpg',
  '/assets/images/brands/nexen.jpg',
  '/assets/images/brands/pirelli.jpg',
  '/assets/images/wanli.jpg.jpg',
]

const getRandomsBrand = (arr, number) => {
  let newArr = []
  while (newArr.length < number) {
    const index = Math.floor(Math.random() * arr.length)
    if (!newArr.includes(arr[index])) {
      newArr.push(arr[index])
    }
  }
  return newArr
}

console.log(getRandomsBrand(slider, 4))
