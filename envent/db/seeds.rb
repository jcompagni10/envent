# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create!([
  {
    email: "jcp",
    password: "pass123"
  },
  {
    email: "ejb@gmail.com",
    password: "pass123"
  },
  {
    email: "trw@gmail.com",
    password: "pass123"
  },
  {
    email: "tay",
    password: "password"
  },
])

events = Event.create!([
  {
    name: "OCD House Party",
    tag: "OCD",
    user_id: 1,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5),
    private: false,
    message: 'So You Know When the Keg Arrives',
    img_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    location: 'Eddies Pants'

  },
  { name: "Sick Festival",
    tag: "Coachella",
    user_id: 2,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5)
  },
  { name: "Corporate McCorporate",
    tag: "biznitch",
    user_id: 1,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5)

  },
  { name: "Christmast party",
    tag: "xmas",
    user_id: 2,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

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
    event_id: 1,
    position: 3,
    module: "Ticket",
  },
  {
    event_id: 1,
    position: 3,
    module: "Map",
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
    location: "kitchen",
    title: "mimosas and doses",
    start_time: DateTime.new(2018,2,3,8,30),
    end_time: DateTime.new(2018,2,3,9,0)
  },
  {
    event_id: 1,
    location: "kitchen",
    title: "more mimosas",
    start_time: DateTime.new(2018,2,3,10,0),
    end_time: DateTime.new(2018,2,3,11,15)
  },
  {
    event_id: 1,
    location: "livingroom",
    title: "real party time",
    start_time: DateTime.new(2018,2,3,2,30),
    end_time: DateTime.new(2018,2,3,3,30)
  },
  {
    event_id: 1,
    location: "bathroom",
    title: "the keg arrives",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,12,15)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "sing songs",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "day 3",
    start_time: DateTime.new(2018,2,5,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "more stuff ",
    start_time: DateTime.new(2018,2,4,12,6),
    end_time: DateTime.new(2018,2,4,5,6)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "everyone leaves",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    location: "basement",
    title: "after party",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "after after party",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  }
  ])

news = News.create!([
  {
    event_id: 1,
    title: "37 Dead",
    message: "Lorem Ipsum"
  },
  {
    event_id: 1,
    title: "more news",
    message: "no news is good news"
  },
  {
    event_id: 1,
    title: "fyre fest sux",
    message: "Lorem Ipsum"
  },
  {
    event_id: 1,
    title: "r kelly is dope",
    message: "haters want to hate lovers want to love, I don't want none of the above, I want to piss on you yes I do"
  },
  {
    event_id: 1,
    title: "Event extended",
    message: "Lorem Ipsum"
  },
  {
    event_id: 1,
    title: "Docking at main stage",
    img_url: "https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg",
    message: "Lorem Ipsum much long text to test if long text shows up ok this text goes on and onand onand on. blah"
  }
])


messages = Message.create!([
  {
  event_id: 1,
  author_id: 1,
  body: "docking at main stage"
  },
  {
  event_id: 1,
  author_id: 2,
  body: "tiki lamps for sale"
  },
  {
  event_id: 1,
  author_id: 3,
  body: "clan meeting asap"
  },
  {
  event_id: 2,
  author_id: 4,
  body: "keg is arriving"
  },
  {
  event_id: 2,
  author_id: 1,
  body: "OGC"
  },
])
