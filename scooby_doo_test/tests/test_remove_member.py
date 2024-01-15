'''Playwright tests on the create new member page for the family tree application'''
from playwright.sync_api import Page, expect

def test_remove_new_member(page: Page, setup):
    '''Test login to remove a new member to the family tree application'''
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

    # Remove this member
    header_page.remove_family_link.click()
    remove_member_page.remove_member(index)

    # Verify the new member is not in the family tree
    expect(page.get_by_test_id(f"name_{index}")).to_have_count(0)
    expect(page.get_by_test_id(f"gang_{index}")).to_have_count(0)
    expect(page.get_by_test_id(f"relationship_{index}")).to_have_count(0)


def test_remove_invalid_member(page: Page, setup):
    '''Test login to remove a new member to the family tree application'''
    login_page = setup["login"]
    header_page = setup["header"]
    remove_member_page = setup["remove_member"]

    # Log into the family tree application
    login_page.login()

    # Remove this member
    header_page.remove_family_link.click()
    remove_member_page.remove_member(100)

    # Verify the new member is not in the family tree
    expect(remove_member_page.error_message).to_have_text("Invalid ID")