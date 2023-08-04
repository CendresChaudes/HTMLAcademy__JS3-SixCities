import { Link } from 'react-router-dom';
import { resetState } from '@/shared/lib';
import { useAppDispatch } from '@/shared/lib';
import { LogoLink } from '@/shared/ui';
import { AppRoute } from '@/const';

type HeaderProps = {
  hasUserMenu?: boolean;
}

export function Header({ hasUserMenu = true }: HeaderProps) {
  const dispatch = useAppDispatch();

  const handleSignOut = () => dispatch(resetState());

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <LogoLink type="header" to={AppRoute.Root} />
          </div>

          {hasUserMenu && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link
                    className="header__nav-link"
                    to={AppRoute.Login}
                    onClick={handleSignOut}
                  >
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
