import { testLogin, testLogout } from '../../../pageObjects/commands/login';
import { createMember } from '../../../pageObjects/commands/create_member';

// Import pages
import { IndexPage } from '../../../pageObjects/pages/index';
import { LoginPage } from '../../../pageObjects/pages/login';
import { AddMemberPage } from '../../../pageObjects/pages/add_member';
import { RemoveMemberPage } from '../../../pageObjects/pages/remove_member';

// Import components
import { HeaderComp } from '../../../pageObjects/components/header';

async function artilleryScript(page)
{
    // await createMember(page, LoginPage, IndexPage, AddMemberPage, RemoveMemberPage, HeaderComp);
    await testLogin(page);
    await testLogout(page);
}

export { artilleryScript };
