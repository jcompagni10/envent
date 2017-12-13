# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([
  {
    email: "jcp@gmail.com",
    password: "asdf"
  },
  {
    email: "ejb@gmail.com",
    password: "qwerty"
  },
  {
    email: "trw@gmail.com",
    password: "poiuy"
  },
])

events = Event.create!([
  {
    name: "OCD House Party",
    tag: "OCD",
    user_id: 1,
    private: false

  },
  { name: "Sick Festival",
    tag: "Coachella",
    user_id: 2,
    private: false

  },
  { name: "Corporate McCorporate",
    tag: "biznitch",
    user_id: 1,
    private: false

  },
   ])



elements = DisplayElement.create!([
  {
    event_id: 1,
    position: 0,
    module: "Schedule",
  },
  {
    event_id: 1,
    position: 1,
    module: "News",

  },
  {
    event_id: 1,
    position: 3,
    module: "MessageBoard",
  },
  {
    event_id: 2,
    position: 0,
    module: "MessageBoard",

  },
  {
    event_id: 3,
    position: 1,
    module: "Schedule",

  },
  {
    event_id: 3,
    position: 0,
    module: "News",

  },
])

schedule_items = ScheduleItem.create!([
  {
    event_id: 1,
    title: "OCD",
    start_time: DateTime.new(2001,2,3,4,5,6),
    end_time: DateTime.new(2001,2,3,4,5,6)
  },
  {
    event_id: 2,
    title: "Julian's Rager",
    start_time: DateTime.new(2001,2,3,4,5,6),
    end_time: DateTime.new(2001,2,3,4,5,6)
  },
  {
    event_id: 3,
    title: "Taylor's Party",
    start_time: DateTime.new(2001,2,3,4,5,6),
    end_time: DateTime.new(2001,2,3,4,5,6)
  },
  {
    event_id: 1,
    title: "Edward's Bday",
    start_time: DateTime.new(2001,2,3,4,5,6),
    end_time: DateTime.new(2001,2,3,4,5,6)
  }
  ])

news = News.create!([
  {
    event_id: 1,
    title: "37 Dead",
    message: "Lorem Ipsum"
  },
  {
    event_id: 2,
    title: "Event extended",
    message: "Lorem Ipsum"
  },
  {
    event_id: 3,
    title: "Docking at main stage",
    message: "Lorem Ipsum"
  }
])