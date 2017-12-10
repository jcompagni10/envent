# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

events = Event.create!([
  { name: "OCD House Party" },
  { name: "Sick Festival" },
  { name: "Corporate McCorporate" },
   ])

elements = DisplayElement.create!([
  {
    event_id: 1,
    position: 0,
    module: "calender"
  },
  {
    event_id: 1,
    position: 1,
    module: "info"
  },
  {
    event_id: 2,
    position: 0,
    module: "calender"
  },
  {
    event_id: 3,
    position: 1,
    module: "calender"
  },
  {
    event_id: 3,
    position: 0,
    module: "info"
  },
])
