# Scooby-Doo Family Tree

## Description

This project is a Django/Python website built for testing purposes.  It currently shows the relationships of characters to Scooby-Doo and the Gang.  It also has a project builtin for utilizing PyTest with Playwright.

## Installation

Step by step series of examples and explanations about how to get a development environment running.

```bash
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```

To recreate the database run the following
```bash
rm db.sqlite3
py manage.py migrate
py manage.py loaddata users.json
py manage.py populate_familymodel
```

## Usage

This project is a test project to verify testing platforms.

# Management Commands

Users are able to populate the family model running the following:
```bash
py manage.py populate_familymodel
```

Users are able to clean up media content by running the following (this will remove all unused images that are not populated in the database along with the Not_Found image):
```bash
py manage.py cleanup_media
```

## Tests

Tests located in scooby_doo_test are pytest and playwright.

Tests located in scooby_doo_test_ts are typescript and playwright.

## Contact
Email - bc.robert@gmail.com