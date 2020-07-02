class CreateTutos < ActiveRecord::Migration[6.0]
  def change
    create_table :tutos do |t|
      t.string :title
      t.string :url
      t.string :snippet_url
      t.string :publisher
      t.date :publish_date

      t.timestamps
    end
  end
end
