# Eventful

## Background and Overview

Events, large or small in scale, have always had to address the problem of
how information is communicated to all attendees. Eventful strives to solve
this problem by providing a mobile application that keeps event attendees
up to date with news, updates, and general scheduling of events.

## Functionality & MVP

This application will be able to:
- [ ] Create new events
- [ ] Assign specific components for the event(message board, calendar, events, tags etc.)
- [ ] Enables guests to access channel of event they are attending

#### Bonus Features
- [ ] Enable private events to use special key to access channel
- [ ] Allow admins to assign moderators
- [ ] Handle ticketing/proof of invitation

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
Backend : Rails, PostgreSQL

Frontend : React/Redux, React Native


#### Challenges
##### Dynamically Creating Tables
As users create events, they are able to customize the components for their events. We need then for the information that they input via checkboxes to translate to the creation of the tables in the backend.

## Things Accomplished Over the Weekend
* Solidify base architecture of components
* Create a working proof of concept
* Finish basic React Native tutorial
* Create wireframes

#### Weekend
- Connect home landing with event landing
- Nav bar with three empty components
- Pressing link redirects to new component
- AJAX call that finds what components that are needed to be pulled from the backend and load it to the frontend

##### Web:
- user auth
- admins can create event
- dynamically creates DB tables of each modules of event


## Group Members and Work Breakdown
**Julian Portis, Taylor Wong, Edward Bai**

### Day 1
- Admin page enables admin to input basic info (time, location) to event landing page
- Basic event landing page displays basic information for users
- Hamburger menu

### Day 2
- Admin page enables admin to set up message board
- Admin can view page on web app, modify posts
- Users are able to post to message board

### Day 3
- Admin page enables admin to create events with time
- Admin can view current event queue chronologically, with basic CRUD features
- Users are able to see the event queue from the mobile app

### Day 4
- Admin page enables admin to create a map page where they can upload a map image
- Users are able to see the map
- Admin page enables admin to create announcements
- Users can view the announcements chronologically within the announcements component

### Day 5
-

### Day 6
- 
