# API Mini Task

The aim of this mini task is create a tool which allows an employer to submit and review the reports of the sales agents. This is achieved through the use of a web app using interactive forms.

## Requirements

For this project, the following tech stack was used:

* Python 3.8.3

* Angular CLI 10.1.0

* Django 3.0.8

* Django REST Framework 3.11.0

* SQLite3


## Setup

To run the web app locally, follow the following steps.

* Create a Python 3.8 virtualenv and activate it

* Install the dependencies as follows:
```bash
pip install -r requirements.txt
```
 (optional) If npm or angular are not already installed, install the following to get the newest version of npm and the version of angular used in this project.
```bash
npm install npm@latest -g
npm install -g @angular/cli@10.1.0-next.1

```



## Structure

This project is divided into two main folders: 

* backend

* frontend

The backend folder contains all the backend for the web app called app. To run the server, you should go in the backend folder (in which the manage.py file is found) and do as follows:
```bash
python manage.py runserver
```

Now that the server is running, open another terminal and go to the frontend/Angular-app folder and execute the following to run the Angular Live Development Server:
```bash
ng serve
```

 (optional) If the module '@angular-devkit/build-angular/package.json' cannot be found, install it using the following command:
```bash
npm install --save-dev @angular-devkit/build-angular
ng serve

```

Once the Angular server is running, click on the link provided http://localhost:4200/. The web app is now ready to be used.

## Assumptions and observations

In this projects, a few assumptions were made:
* Two people with the same name and birthday will not be saved to the database. This will avoid duplicates of the same sales agent.

* A sales agent who is not registered in the database cannot be assigned to a sales report. Sales agents not working for the company can therefore not be added.

* The input fields with type="month" do not work on browsers like Mozilla Firefox and Safari. Therefore I decided to use to type="date" where the user must choose an arbitrary day.
