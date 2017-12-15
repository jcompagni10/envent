# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214181221) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "display_elements", force: :cascade do |t|
    t.integer "event_id"
    t.integer "position"
    t.string "module"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "tag", null: false
    t.integer "user_id", null: false
    t.boolean "private", default: false, null: false
    t.string "password"
    t.string "img_url", default: "http://res.cloudinary.com/trwong/image/upload/c_scale,w_600/v1513275248/teemu-paananen-376238_wkqe62.jpg"
  end

  create_table "featured_people", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "infos", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.string "location"
    t.text "message"
    t.integer "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_infos_on_event_id"
  end

  create_table "maps", force: :cascade do |t|
    t.string "title", null: false
    t.string "img_url", default: "https://res.cloudinary.com/ejbai31/image/upload/v1513139888/45944_sjwpfv.svg", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "event_id", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.integer "event_id"
    t.integer "author_id"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_messages_on_author_id"
    t.index ["event_id"], name: "index_messages_on_event_id"
  end

  create_table "news", force: :cascade do |t|
    t.string "title", null: false
    t.text "message"
    t.string "img_url"
    t.integer "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_news_on_event_id"
  end

  create_table "schedule_items", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "start_time", null: false
    t.datetime "end_time", null: false
    t.integer "feature_id"
    t.string "location"
    t.string "img_url"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "event_id", null: false
    t.index ["event_id"], name: "index_schedule_items_on_event_id"
    t.index ["title"], name: "index_schedule_items_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
