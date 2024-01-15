'''Playwright tests on the login page for the family tree application'''
# import pytest
from playwright.sync_api import Page, expect

def test_login_to_family_tree(setup):
    '''Test login to family tree application'''    
    login_page = setup["login"]
    header_page = setup["header"]

    # Log into the family tree application
    login_page.login()

    # Check that the user is logged in
    expect(header_page.logout_link).to_have_text("Logout")


    # Log out of the family tree application
    header_page.logout()

    # Check that the user is logged out
    expect(login_page.login_button).to_have_text("Login")

def test_invalid_login(page: Page, setup):
    '''Test invalid login to family tree application'''
    login_page = setup["login"]

    # Log into the family tree application
    login_page.login("invalid", "invalid")

    expect(page.get_by_text("Invalid Login Credentials")).to_have_text("Invalid Login Credentials")
