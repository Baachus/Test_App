'''Playwright tests on the create new member page for the family tree application'''
import pytest
from playwright.sync_api import Page, expect
from pageObjects.components.family_tree.login_comp import Login
from pageObjects.components.family_tree.header_comp import Header
from pageObjects.pages.family_tree.add_member import AddMember
from pageObjects.pages.family_tree.remove_member import RemoveMember
from pageObjects.pages.family_tree.index import Home

def test_remove_new_member(page: Page):
    '''Test login to remove a new member to the family tree application'''
    login = Login(page)
    header = Header(page)
    add_member = AddMember(page)
    remove_member = RemoveMember(page)
    home = Home(page)

    # Log into the family tree application
    login.login()

    # Add a new member
    header.add_family_link.click()
    new_member = add_member.create_new_member()

    
    index = home.get_index(new_member["name"])

    # Remove this member
    header.remove_family_link.click()
    remove_member.remove_member(index)

    # Verify the new member is not in the family tree
    expect(page.get_by_test_id(f"name_{index}")).to_have_count(0)
    expect(page.get_by_test_id(f"gang_{index}")).to_have_count(0)
    expect(page.get_by_test_id(f"relationship_{index}")).to_have_count(0)
    expect(page.get_by_test_id(f"appearance_{index}")).to_have_count(0)

def test_remove_invalid_member(page: Page):
    '''Test login to remove an invalid member to the family tree application'''
    login = Login(page)
    header = Header(page)
    remove_member = RemoveMember(page)
    home = Home(page)

    # Log into the family tree application
    login.login()

    # Remove this member
    header.remove_family_link.click()
    remove_member.remove_member(100)

    # Verify the new member is not in the family tree
    expect(remove_member.error_message).to_have_text("Invalid ID")