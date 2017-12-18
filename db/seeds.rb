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
    user_id: 4,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5),
    private: false,
    message: 'So You Know When the Keg Arrives',
    img_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1050&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    location: '637 Larkin St.'

  },
  { name: "Sick Festival",
    tag: "Coachella",
    user_id: 2,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5)
  },
  { name: "Corporate McCorporate",
    tag: "corp",
    user_id: 1,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5)

  },
  { name: "Christmas party",
    tag: "xmas",
    user_id: 2,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

  },
  { name: "Negotiations Helicopter Conference",
    tag: "heli",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

  },
  { name: "Fyre Fest",
    tag: "fyre",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

  },
  { name: "Generic Concert",
    tag: "conc",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

  },
  { name: "Nochella",
    tag: "nope",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5)

  },
  { name: "Vitas",
    tag: "vitas",
    user_id: 4,
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
    title: "mimosas",
    feature_id: "R-Kelly",
    start_time: DateTime.new(2018,2,3,8,30),
    end_time: DateTime.new(2018,2,3,9,0)
  },
  {
    event_id: 1,
    location: "kitchen",
    title: "more mimosas",
    feature_id: "Usher",
    start_time: DateTime.new(2018,2,3,10,0),
    end_time: DateTime.new(2018,2,3,11,15)
  },
  {
    event_id: 1,
    location: "livingroom",
    title: "real party time",
    feature_id: "Julian",
    start_time: DateTime.new(2018,2,3,2,30),
    end_time: DateTime.new(2018,2,3,3,30)
  },
  {
    event_id: 1,
    location: "bathroom",
    title: "the keg arrives",
    feature_id: "Julian",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,12,15)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "sing songs",
    feature_id: "Elvis",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "day 3",
    feature_id: "Kanye",
    start_time: DateTime.new(2018,2,5,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "more stuff ",
    feature_id: "Jeff",
    start_time: DateTime.new(2018,2,4,12,6),
    end_time: DateTime.new(2018,2,4,5,6)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "everyone leaves",
    feature_id: "Julian",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    location: "basement",
    title: "after party",
    feature_id: "T-Pain",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "after after party",
    feature_id: "R-Kelly Impersonator",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  }
  ])

maps = Map.create!([
  {
    event_id: 1, 
    title: "OCD MAP",
  },
  {
    event_id: 2, 
    title: "Sick Festival Map"
  },
  {
    event_id: 3, 
    title: "McCorporate's House"
  },
  {
    event_id: 4,
    title: "Party Map"
  }
])


news = News.create!([
  {
    event_id: 1,
    title: "WELCOME",
    message: "HAVE FUN"
  },
  {
    event_id: 1,
    title: "WELCOME PT. 2",
    message: "Everybody listen to Julian"
  },
  {
    event_id: 1,
    title: "No smoking!",
    message: "That means YOU Taylor"
  },
  {
    event_id: 1,
    title: "Found Phone!",
    message: "Report to Julian!"
  },
  {
    event_id: 1,
    title: "Event extended",
    message: "Lorem Ipsum"
  },
  {
    event_id: 1,
    title: "Dock at main stage",
    img_url: "https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg",
    message: "Lorem Ipsum much long text to test if long text shows up ok this text goes on and onand onand on. blah"
  }
])


messages = Message.create!([
  {
  event_id: 1,
  author_id: 1,
  body: "Docking at main stage"
  },
  {
  event_id: 1,
  author_id: 2,
  body: "Taco truck arrives!"
  },
  {
  event_id: 1,
  author_id: 3,
  body: "Meeting asap"
  },
  {
  event_id: 2,
  author_id: 4,
  body: "Catering arrives"
  },
  {
  event_id: 2,
  author_id: 1,
  body: "Hi!"
  },
])

# event_view = EventView.create!([
#   {
#     event_id: 1,
#     created_at: Time.now - 1.day
#   },
#   {
#     event_id: 1,
#     created_at: Time.now - 1.day
#   },
#   {
#     event_id: 2,
#     created_at: Time.now - 1.day
#   },
# ])

17.times{ EventView.create!(event_id: 1, created_at: Time.now)}
15.times{ EventView.create!(event_id: 1, created_at: Time.now - 1.day)}
14.times{ EventView.create!(event_id: 1, created_at: Time.now - 2.day)}
12.times{ EventView.create!(event_id: 1, created_at: Time.now - 3.day)}
9.times{ EventView.create!(event_id: 1, created_at: Time.now - 4.day)}
7.times{ EventView.create!(event_id: 1, created_at: Time.now - 5.day)}
7.times{ EventView.create!(event_id: 1, created_at: Time.now - 6.day)}
8.times{ EventView.create!(event_id: 1, created_at: Time.now - 7.day)}

