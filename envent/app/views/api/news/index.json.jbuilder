json.by_id do
  @news.each do |new|
    json.set! new.id do
      json.partial! 'api/news/news', news: new
    end
  end
end

arr = @news
        .sort_by { |new| new.created_at }
        .reverse
        .map { |new| new.id }

json.all_ids arr