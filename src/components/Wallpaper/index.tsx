import * as S from './style'

export function Wallpaper() {
  const number = Math.floor(Math.random() * 10)
  const imageurl = `./images/wallpapers/${number}.jpg`
  return <S.Wallpaper imageurl={imageurl} />
}
