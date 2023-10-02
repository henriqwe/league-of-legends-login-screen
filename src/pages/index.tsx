import { LoginSection } from '@/components/LoginSection'
import { Wallpaper } from '@/components/Wallpaper'

export function Login() {
  return (
    <div
      style={{
        display: 'flex',
        padding: '5rem 10rem',
        height: '100vh',
        width: '100vw'
      }}
    >
      <LoginSection />
      <Wallpaper />
    </div>
  )
}
