import { testLogin, testLogout } from '../../../pageObjects/commands/login';

async function artilleryScript(page)
{
    await testLogin(page);
    await testLogout(page);
}

export { artilleryScript };
