class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :description
      t.string :category
      t.string :importance
      t.date :deadline
      t.text :collaborators

      t.timestamps
    end
  end
end
