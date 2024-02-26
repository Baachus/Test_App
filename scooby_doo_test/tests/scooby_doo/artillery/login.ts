import { testLogin } from '../commands/login';

async function artilleryScript(page)
{
    await testLogin(page);
}

export { artilleryScript };
