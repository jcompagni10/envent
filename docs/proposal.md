# Eventful

## Background and Overview

Events, large or small in scale, have always had to address the problem of
how information is communicated to all attendees. Eventful strives to solve
this problem by providing a mobile application that keeps event attendees
up to date with news, updates, and general scheduling of events.

## Functionality & MVP

This application will be able to:
- [ ] Create new events on the web application which creates the modules on the mobile application
- [ ] Assign specific components for the event(message board, calendar, schedule, news, etc.)
- [ ] Enables guests to access channel of event they are attending and view all modules specified by the event creator

#### Bonus Features
- [ ] Enable private events to use special key to access channel
- [ ] Allow admins to assign moderators
- [ ] Handle ticketing/proof of invitation
- [ ] User auth for mobile app to enable users to post to the message board

## Wireframes
- Initial Splash Page

![initial splash](https://i.imgur.com/3Apx7BS.png)

- Event Landing Page

![event landing](https://i.imgur.com/ucUevmq.png)

- Hamburger Sidebar

![hamburger](https://i.imgur.com/xXCspdv.png)

- Calendar

![calendar](https://i.imgur.com/VieFYuV.png)

- Message Board

![messages](https://i.imgur.com/Dt0mkJz.png)

- Map

![map](https://i.imgur.com/UCdbu9M.png)

- Announcements

![announcements](https://i.imgur.com/Vy9cHsc.png)



## Technologies / Technical Challenges
Backend : Ruby on Rails, PostgreSQL

Frontend : React/Redux, React Native, HTML, CSS, Javascript


#### Challenges
##### Dynamically Creating Applications
Dynamically generating a React Native app based on user input on the web application will prove to be challenging. We have a general idea of how to send the data from the web app to the database and finally to the React Native mobile application. However, it will be interesting to see how to dynamically display the user's navigation and modules based upon their preferences.  

##### Collaborating
Working as a group will provide challenges as members in our group will pick up where others have left off. Looking at other people's code is generally difficult, so acclimating to this will prove to be a learning experience on both ends. This means that each group member must learn to use best practices to write readable code, and for group members to also try to figure out what is going on.

##### New Technologies
With new technologies comes the challenge of reading the relevant documentation to fill in the gaps of understanding. With React Native, the documentation is relatively skimpy compared to other technologies encountered thus far. This will prove to be difficult as we try to figure out various bugs and issues in our code.

## Things Accomplished Over the Weekend
* Solidify base architecture of components
* Create a working proof of concept
* Finish basic React Native tutorial
* Complete user auth for web users
* Create wireframes
* Admins can create event & specify modules
* Nav drawer with navigation to modules for given app
* Connect home landing with event landing
* Pressing link redirects to new component
* AJAX call that finds what components that are needed to be pulled from the backend and load it to the frontend

## Group Members and Work Breakdown
**Julian Portis, Taylor Wong, Edward Bai**

### Day 1
- Admin page enables admin to input basic info (time, location) to event landing page **TW**
- Hamburger menu navigation in mobile app **TW**
- Admin page enables admin to input in schedule items into the schedule **JP, EB**
- Users are able to view the schedule items on the schedule module **JP**

### Day 2
- Admin page enables admin to set up message board **TW**
- Admin can view message board on web app, modify posts **ALL**
- Users are able to post to message board **TW, JP**

### Day 3
- Basic event landing page displays basic information for users **TW**
- Admin can view current event queue chronologically, with basic CRUD features **ALL**
- Users are able to see the event queue from the mobile app **EB**

### Day 4
- Admin page enables admin to create a map page where they can upload a map image **EB**
- Users are able to see the map **EB**
- Admin page enables admin to create announcements **TW, JP**
- Users can view the announcements chronologically within the announcements component **TW, JP**

### Day 5
- E-tickets web and mobile **ALL**
- Map web and mobiles **ALL**

### Day 6
- News module for web and mobile **ALL**
- Flexible styling options **ALL**
- Improve UX **ALL**
