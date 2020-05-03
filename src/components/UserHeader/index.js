import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/hipeerlab.ico';

import { Content, Profile } from './styles';

export default function UserHeader() {
  return (
    <>
      <Content>
        <nav>
          <img src={logo} alt="hipeerLab" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>User Name</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="User Name"
            />
          </Profile>
        </aside>
      </Content>
    </>
  );
}
