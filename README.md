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


## Tests

Tests located in scooby_doo_test are pytest and playwright.
Tests located in scooby_doo_test_ts are typescript and playwright.

## Contact
Email - bc.robert@gmail.com