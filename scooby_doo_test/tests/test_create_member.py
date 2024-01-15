'''Playwright tests on the create new member page for the family tree application'''
from playwright.sync_api import Page, expect

def test_create_new_member(page: Page, setup):
    '''Test login to create a new member to the family tree application'''
    login_page = setup["login"]
    header_page = setup["header"]
    add_member_page = setup["add_member"]
    remove_member_page = setup["remove_member"]
    home_page = setup["home"]

    # Log into the family tree application
    login_page.login()

    # Add a new member
    header_page.add_family_link.click()
    new_member = add_member_page.create_new_member()

    
    index = home_page.get_index(new_member["name"])
    row = home_page.get_row(index)

    # Verify the new member is in the family tree
    expect(row["name"]).to_contain_text(new_member["name"])
    expect(row["gang"]).to_contain_text(new_member["gang"])
    expect(row["relationship"]).to_contain_text(new_member["relationship"])

    # Remove this member
    header_page.remove_family_link.click()
    remove_member_page.remove_member(index)
