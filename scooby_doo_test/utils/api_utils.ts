import axios from 'axios';
import qs from 'qs';

export class APIUtility{
    constructor(){}

    async getToken(): Promise<string>{
        // Get Access Token
        const formData = {
            'grant_type': 'password',
            'username': 'admin',
            'password': 'admin'
        };

        const response = await axios({
            method: 'post',
            url: 'https://localhost:5001/connect/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: qs.stringify(formData)
        });

        console.log(response.data);
        return 'token'; // replace with actual token from response
    }
}