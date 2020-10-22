class CreateReviewComments < ActiveRecord::Migration[6.0]
  def change
    create_table :review_comments do |t|
      t.string :comment
      t.integer :likes
      t.integer :review_id
      t.integer :user_id

      t.timestamps
    end
  end
end
