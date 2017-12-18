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
    name: "Envent Festival",
    tag: "Envent2018",
    user_id: 4,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5),
    private: false,
    message: "Celebrating the release of the envent app...",
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394909/unsplash_5252bb51404f8_1_bizffe.jpg",
    location: 'Envent HQ'

  },
  { name: "Stage Coach",
    tag: "coach",
    user_id: 2,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5),
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394908/photo-1501837303764-ada599fdac6c_asqit3.jpg",
  },
  { name: "Corporate Teambuilding",
    tag: "corp",
    user_id: 1,
    private: false,
    start_date: Date.new(2018,2,3),
    end_date: Date.new(2018,2,5),
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394906/photo-1491339526372-c7112c8e37f3_xsq8zu.jpg",

  },
  { name: "Christmas Party",
    tag: "xmas",
    user_id: 2,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5),
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513394905/photo-1493225457124-a3eb161ffa5f_tf51er.jpg",

  },
  { name: "Negotiations Conference",
    tag: "nego",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5),
    img_url: "https://res.cloudinary.com/trwong/image/upload/v1513394903/60147231_gim7mq.jpg",

  },
  { name: "Fyre Fest",
    tag: "fyre",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,2,3),
    end_date: DateTime.new(2018,2,5),
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395305/photo-1501716702726-40703eebd722_fg2dv0.jpg",

  },
  { name: "Vitas",
    tag: "vitas",
    user_id: 4,
    private: false,
    start_date: DateTime.new(2018,12,15),
    end_date: DateTime.new(2018,12,17),
    img_url: "https://res.cloudinary.com/trwong/image/upload/c_scale,w_500/v1513395304/photo-1460723237483-7a6dc9d0b212_r4j5zw.jpg",
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
    title: "Cocktails and Jazz",
    feature_id: "SF Jazz Trio",
    start_time: DateTime.new(2018,2,3,8,30),
    end_time: DateTime.new(2018,2,3,9,0)
  },
  {
    event_id: 1,
    title: "Dinner Time Tunes",
    feature_id: "Ron Swanson and the Boys",
    start_time: DateTime.new(2018,2,3,10,0),
    end_time: DateTime.new(2018,2,3,11,15)
  },
  {
    event_id: 1,
    title: "After Dinner Dance Party pt. 1",
    feature_id: "The Fred Jones Band",
    start_time: DateTime.new(2018,2,3,2,30),
    end_time: DateTime.new(2018,2,3,3,30)
  },
  {
    event_id: 1,
    title: "Jazzercise",
    feature_id: "Mollela",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,12,15)
  },
  {
    event_id: 1,
    location: "Main Ballroom",
    title: "Key Note Addresss",
    feature_id: "Envent CEO",
    start_time: DateTime.new(2018,2,4,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    title: "Final Boogie",
    feature_id: "Baja Boogie Boys",
    start_time: DateTime.new(2018,2,5,12,00),
    end_time: DateTime.new(2018,2,4,2,30)
  },
  {
    event_id: 1,
    title: "Farewell Address",
    feature_id: "Jeff",
    start_time: DateTime.new(2018,2,4,12,6),
    end_time: DateTime.new(2018,2,4,5,6)
  },
  {
    event_id: 1,
    feature_id: "Kid Cudi",
    title: "After Party",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    title: "After after party",
    feature_id: "T-Pain",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  },
  {
    event_id: 1,
    location: "party spot",
    title: "Time To Leave",
    feature_id: "R-Kelly (Impersonator)",
    start_time: DateTime.new(2018,2,4,14,20),
    end_time: DateTime.new(2018,2,4,15,0)
  }
  ])

maps = Map.create!([
  {
    event_id: 1,
    title: "EnventFest Map",
    img_url: "https://sonarhongkong.com/system/attached_images/13254/original/SONAR_MAP_V13.png?1490611140"
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
    message: "Everybody listen to Important Infomation from the CEO"
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
    title: "Event extended for an extra day",
    message: "This Event has been so awesome we're extending it an extra day"
  },
  {
    event_id: 1,
    title: "Come Party at the main stage",
    img_url: "https://d1marr3m5x4iac.cloudfront.net/images/block/I0-001/039/702/572-6.jpeg_/new-years-party-and-performance-72.jpeg",
    message: "Duke Silver Jazz Trio is ROCKING OUT at the main stage! Come join and and dance your butts off"
  }
])


messages = Message.create!([
  {
  event_id: 1,
  author_id: 1,
  body: "Wow this event is awesome!!!"
  },
  {
  event_id: 1,
  author_id: 2,
  body: "I know! This app makes it even better"
  },
  {
  event_id: 1,
  author_id: 3,
  body: "Right!?! Every festival should use an envent app"
  },
  {
  event_id: 2,
  author_id: 4,
  body: "I just found a room full of tacos"
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
