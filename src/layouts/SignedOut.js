import React from 'react';
import { Button, Menu } from 'semantic-ui-react';

export default function SignedOut({signIn}) {
  return (
    <div>

        <Menu.Item>
            <Button primary onClick={signIn}>Giris yap</Button>
            <Button primary style= {{marginLeft:"0.5em"}}>Kayit ol</Button>
        </Menu.Item>

    </div>
    )
}
