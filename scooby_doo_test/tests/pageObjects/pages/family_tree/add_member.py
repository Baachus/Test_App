'''Add Member page functionality for the family tree application'''
import faker
from utils.random_data import RandomData

class AddMember():
    '''Login to family tree'''   
    def __init__(self, page):
        self.page = page
        self.name = page.locator("#id_name")
        self.gang = page.locator("#id_gang")
        self.relationship = page.locator("#id_relationship")
        self.appearance = page.locator("#id_appearance")
        self.add_button = page.get_by_role("button", name="Add Family Member")


    def create_new_member(self, name=None, gang=None, relationship=None, appearance=None):
        '''Create a new family member'''
        if name is None:
            name = faker.Faker().name()
        if gang is None:
            gang = RandomData().random_gang()
        if relationship is None:
            relationship = RandomData().random_relationship()
        if appearance is None:
            appearance = '{"TV":[{}],"Movie":[{}],"APPEARED":false}'

        # Fill out the form
        self.name.fill(name)
        self.gang.fill(gang)
        self.relationship.fill(relationship)
        self.appearance.fill(appearance)

        # Click the add button
        self.add_button.click()

        # Return new family member
        return {"name": name, "gang": gang, "relationship": relationship, "appearance": appearance}