'''Random data for testing'''
from random import choice

class RandomData():
    '''Random data for testing'''
    def random_relationship(self):
        '''Return a random relationship'''
        relationships = [
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
        ]
        return choice(relationships)

    def random_gang(self):
        '''Return a random member of the Scooby-Gang'''
        gangs = [
            "Scooby-Doo", 
            "Shaggy Rogers", 
            "Fred Jones", 
            "Daphne Blake", 
            "Velma Dinkley"
        ]
        return choice(gangs)
