
const context = require.context('@/assets/images/bgImg', true, /\.(png)$/)
const images = context.keys().map((filename) => {
  return context(filename)
})

const setBgImg = function() {
  const randIndex = Math.floor(
    Math.random() * images.length
  )
  return {
    // 获取对应的图片资源并将其设置到`background-image`属性上
    background: `url(${images[randIndex]}) no-repeat center/cover`
  }
}
export default setBgImg
