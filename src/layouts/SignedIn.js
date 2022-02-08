import React from 'react';
import { Dropdown, Image, Menu } from 'semantic-ui-react';

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" />
                <Dropdown pointing="top left" text="Mami">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Cikis yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
        )
}
