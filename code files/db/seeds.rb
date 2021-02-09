# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tasks = Task.create([{title: "Test 1", description: "First Task. Set up your Database", 
    category: "CVWO", importance: "Urgent", collaborators: "Charlie"}, 
    {title: "Take 2", description: "Get yourself some water", 
    category: "Self-Care", importance: "OTOT", collaborators: "Mom"} ])