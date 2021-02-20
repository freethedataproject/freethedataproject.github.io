require 'json'
require 'airtable'
require 'active_support/all'

@client = Airtable::Client.new("keyUqnHp6DcReMiHW")


items = ["resources", "kitchensink", "hiddenhistories"]

items.each do |item|
    @table = @client.table("appf4fOfsvjSoYWdz", item)
    @records = @table.records(:limit => 100)

    File.open("_data/#{item}.json", "w") do |f|
        data = @records.map { |record| record.attributes }
        f.write(data.to_json)
    end
end
