# Django Tweet App

This is a simple Django project for a Tweet application where users can register, login, create, edit, and delete tweets.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Additional Notes](#additional-notes)

## Requirements

- Python 3.x
- Django 4.x
- pip (Python package installer)
- Virtualenv (optional, but recommended)

## Installation

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/django-tweet-app.git
cd django-tweet-app
```
### Set Up Virtual Environment
```bash
python -m venv env
source env/bin/activate   # On Windows, use `env\Scripts\activate`
```

## Configuration
### Database Setup
By default, this project uses SQLite. To apply the database migrations, run:
```bash
python manage.py migrate

```
### Create Superuser
To create an admin user, run:
```bash
python manage.py createsuperuser

```

## Usage
### Running the Development Server
Start the Django development server:
```bash
python manage.py runserver

```
Open your browser and go to http://127.0.0.1:8000/ to see the application.

### Accessing the Admin Site
Go to http://127.0.0.1:8000/admin/ to access the Django admin site. Log in using the superuser credentials you created earlier.

## Additional Notes
### Project Structure
auth_project/: Contains the project settings and configuration.<br />
tweet/: Contains the application code for managing tweets.<br />
templates/: Contains HTML templates for rendering views.<br />
