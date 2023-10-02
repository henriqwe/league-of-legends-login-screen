import * as S from './style'

export function Wallpaper() {
  const number = Math.floor(Math.random() * 10)
  const imageURL = `./images/wallpapers/${number}.jpg`
  return <S.Wallpaper imageURL={imageURL} />
}
