'''Header functionality for the family tree application'''
class Header():
    '''Header to family tree'''   
    def __init__(self, page):
        self.page = page

        # Header page elements
        self.header_label = self.page.get_by_role("heading", name="Family Tree")
        self.home_link = self.page.get_by_role("link", name="Home")
        self.add_family_link = self.page.get_by_role("link", name="Add Family Member")
        self.remove_family_link = self.page.get_by_role("link", name="Remove Family Member")
        self.logout_link = self.page.get_by_role("link", name="Logout")

    def logout(self):
        '''Log out of the family tree application'''
        self.logout_link.click()
