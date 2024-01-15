'''Home Page functionality for the family tree application'''

class Home():
    '''Home Page to family tree'''   
    def __init__(self, page):
        self.page = page

    def get_index(self, name):
        '''Get the index of the member in the family tree'''
        id = self.page.get_by_text(name)
        id = id.get_attribute("data-testid").split("_")[1]
        return id
    
    def get_row(self, index):
        '''Return the locators of name, relationship, and gang for the member'''
        # Get the values from the row
        name = self.page.get_by_test_id(f"name_{index}")
        relationship = self.page.get_by_test_id(f"relationship_{index}")
        gang = self.page.get_by_test_id(f"gang_{index}")

        return {"name": name, "gang": gang, "relationship": relationship}