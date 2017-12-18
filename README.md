# Eventful
[Web App Link](www.envent.herokuapp.com)

[Mobile App Link](emulator.thing)
## Summary

Envent is a web application that allows users to create mobile applications for their events. Through Envent, users will be able to convey meaningful information to their guests. Inspired by Attendify, Envent utilizes React/Redux and Rails for the web application and React Native for the mobile application. 

Envent allows users to:

* Create an account 
* Log In / Log Out to both the web application and the mobile application 
* Access events using event tag names 
* Select modules on the web application to display on the mobile application, such as schedule, announcements, basic info, and a message board
* Upload pictures for their event and schedule items 
* Schedule out various events for their event 
* Message other event goers 
* Send and recieve important event updates and announcements

## Overall Structure 

#### Back End
The backend of Event was built using Ruby on Rails with a postgreSQL database, utilizing RESTful API requests. 

#### Front End
The frontend was built using React/Redux for the web application. The mobile application used React Native. 

#### Libraries 
Envent uses:
* React.js
* Redux
* React Native 
* BCrypt
* React-Bootstrap
* Cloudinary 
* Chart.js
* React-Datepicker 
* Moment.js
* React-Beautiful-DragAndDrop
* Style-Loader

## Primary Components 

#### User Authorization 
User authorization is handled using BCrypt. Users are able to sign in to the web application, where they are required to have an account to create events. Users can also optionally create/sign-in via the mobile application prior to joining an event. 

#### Mobile Application Event Generator
Through the web application, users can create applications for their events, customizing the components that they will be using to display on the mobile application. 

#### Scheduler
Event creators can create schedule items and queue them to display to guests via the mobile application. The schedule items display the schedule item image as well as the time at which the event will occur. 


#### Message Board
Guests of the event can socialize using the message board, sending realtime messages that can be viewed by all guests. 

#### Announcements
Event creators can broadcast important messages and alerts to all event guests.

#### Chart
Event creators can get meaningful information through charts of how many users are signed up to attend their event. 

## Screenshots 
* Web App Splash Page
![web splash](https://i.imgur.com/rVKRdiG.png)

* Web App Dashboard
![web dash](https://i.imgur.com/F9tMs48.png)

* Web App Builder
![web appbuilder](https://i.imgur.com/dS1cLgd.png)