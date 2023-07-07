import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sideBar, setSideBar] = useState(false);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className="header">
        <button
          type="submit"
          onClick={ () => setSideBar(!sideBar) }
          data-testid="top-hamburguer"
          className="hameburgerButton"
        >
          <Hamburger easing="ease-in" />
        </button>
        <h2 data-testid="top-title">pucbeerer</h2>
        <div />
      </div>
      {sideBar
        && (
          <div>
            <div className="side-menu-container">
              <div className="itensHamburguer">
                <Link
                  className="linksHamburguer"
                  to="/admin/orders"
                >
                  Pedidos
                </Link>
              </div>
              <div className="itensHamburguer">
                <Link
                  className="linksHamburguer"
                  to="/admin/produtos"
                >
                  Produtos
                </Link>
              </div>
              <div className="itensHamburguer">
                <Link
                  className="linksHamburguer"
                  to="/admin/profile"
                >
                  Meu Perfil
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={ () => logout() }
                  className="buttonLogOut"
                >
                  <Link
                    to="/login"
                    className="linksHamburguer"
                  >
                    Sair
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};

export default Header;
