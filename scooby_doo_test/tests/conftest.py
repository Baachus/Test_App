import pytest
from playwright.sync_api import Page, expect
from pageObjects.components.family_tree.login_comp import Login
from pageObjects.components.family_tree.header_comp import Header
from pageObjects.pages.family_tree.add_member import AddMember
from pageObjects.pages.family_tree.remove_member import RemoveMember
from pageObjects.pages.family_tree.index import Home

# conftest.py

@pytest.fixture(scope="function")
def setup(page: Page):
    login_page = Login(page)
    header_page = Header(page)
    add_member_page = AddMember(page)
    remove_member_page = RemoveMember(page)
    home_page = Home(page)
    return {"login": login_page, "header": header_page, "add_member": add_member_page, "remove_member": remove_member_page, "home": home_page}
