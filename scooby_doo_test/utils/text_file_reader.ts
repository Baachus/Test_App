import * as fs from 'fs'

export class TextFileReader{
    
    constructor(){}

    static readTextFile(filePath: string) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }

}