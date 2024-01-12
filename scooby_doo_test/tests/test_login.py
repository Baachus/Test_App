'''Playwright tests on the login page for the family tree application'''
# import pytest
from playwright.sync_api import Page, expect
from pageObjects.components.family_tree.login_comp import Login
from pageObjects.components.family_tree.header_comp import Header


def test_login_to_family_tree(page: Page):
    '''Test login to family tree application'''    
    login = Login(page)
    header = Header(page)

    # Log into the family tree application
    login.login()

    # Check that the user is logged in
    expect(header.logout_link).to_have_text("Logout")


    # Log out of the family tree application
    header.logout()

    # Check that the user is logged out
    expect(login.login_button).to_have_text("Login")

def test_invalid_login(page: Page):
    '''Test invalid login to family tree application'''
    login = Login(page)

    # Log into the family tree application
    login.login("invalid", "invalid")

    expect(page.get_by_text("Invalid Login Credentials")).to_have_text("Invalid Login Credentials")
