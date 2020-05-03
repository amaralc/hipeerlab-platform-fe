import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import logo from '~/assets/hipeerlab.ico';

import { Content, Profile } from './styles';

export default function UserHeader() {
  const profile = useSelector((state) => state.user.profile);

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
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                'https://api.adorable.io/avatars/50/abott@adorable.png'
              }
              alt="User Name"
            />
          </Profile>
        </aside>
      </Content>
    </>
  );
}
