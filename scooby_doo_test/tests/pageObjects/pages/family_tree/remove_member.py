'''Remove Member page functionality for the family tree application'''
from utils.random_data import RandomData

class RemoveMember():
    '''Login to family tree'''   
    def __init__(self, page):
        self.page = page
        self.id = self.page.locator("id=id_to_remove")
        self.remove_button = self.page.locator("id=removeMember")
        self.error_message = self.page.get_by_text("Invalid ID")


    def remove_member(self, id_to_remove):
        '''Remove a family member'''
        self.id.fill(str(id_to_remove))
        self.remove_button.click()
