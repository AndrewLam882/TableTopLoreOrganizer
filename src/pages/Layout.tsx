import { Outlet, Link } from 'react-router-dom'
import locales from './../localization.json'

function Layout() {
  const strings = locales.pages

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>{strings.home}</Link>
          </li>
          <li>
            <Link to='/characters'>{strings.characters}</Link>
          </li>
          <li>
            <Link to='/locations'>{strings.locations}</Link>
          </li>
          <li>
            <Link to='/nothing-here'>{strings.nothingHere}</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </div>
  )
}

export default Layout
