class AddPosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.integer :post_id
      t.text :text
      t.string :link
      t.timestamps
    end
  end
end
