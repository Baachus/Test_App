import { sample } from 'lodash';

class RandomData {
    randomGang(): string {
        const gangs = [
            "Scooby-Doo", 
            "Shaggy Rogers", 
            "Fred Jones", 
            "Daphne Blake", 
            "Velma Dinkley"
        ];
        return sample(gangs) as string;
    }

    randomRelationship(): string {
        const relationships = [
            "Father", 
            "Mother", 
            "Sister", 
            "Brother", 
            "Cousin", 
            "Aunt", 
            "Uncle", 
            "Grandfather", 
            "Grandmother", 
            "Grandson", 
            "Granddaughter", 
            "Great-Grandfather", 
            "Great-Grandmother", 
            "Great-Grandson", 
            "Great-Granddaughter"
        ];
        return sample(relationships) as string;
    }
}

export { RandomData };
