import logo_snap from './logo-snap.svg'
import logo_menu from './icon-menu.svg'
export const HeaderMobile = () => {
  return (
    <div>
      <img src={logo_snap} alt="logo"></img>
      <button>{logo_menu}</button>
    </div>
  )
}