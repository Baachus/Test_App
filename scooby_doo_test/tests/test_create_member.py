'''Playwright tests on the create new member page for the family tree application'''
import pytest
from playwright.sync_api import Page, expect
from pageObjects.components.family_tree.login_comp import Login
from pageObjects.components.family_tree.header_comp import Header
from pageObjects.pages.family_tree.add_member import AddMember
from pageObjects.pages.family_tree.remove_member import RemoveMember
from pageObjects.pages.family_tree.index import Home

def test_create_new_member(page: Page):
    '''Test login to create a new member to the family tree application'''
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
    row = home.get_row(index)

    # Verify the new member is in the family tree
    expect(row["name"]).to_contain_text(new_member["name"])
    expect(row["gang"]).to_contain_text(new_member["gang"])
    expect(row["relationship"]).to_contain_text(new_member["relationship"])
    expect(row["appearance"]).to_contain_text(new_member["appearance"])

    # Remove this member
    header.remove_family_link.click()
    remove_member.remove_member(index)
