
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
        name:"Hamburger",
        description:"Best burger on the site!",
        image_url:"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        meal_type:"Lunch",
        ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
        instructions:"cook the beef into humbirger patties, combine all ingredients to make a hamburger",
        chef_id:1
      },
      {
        name:"Peperoni Pizza",
        description:"Homestyle peperoni pizza",
        image_url:"https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        meal_type:"Dinner",
        ingredients:"Pepperoni, basil, provolone cheese, tomatoe sauce, pizza crust",
        instructions:"preheat the oven at 350 fahrenheit, partially bake crust in oven, spread tomotoe sauce on crust, place toppings",
        chef_id:1
      },
      {
        name:"Pancakes",
        description:"Buttermilk pancakes",
        image_url:"https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        meal_type:"Breakfast",
        ingredients:"blueberries, water, pancake mix, maple syrup",
        instructions:"mix water with pancake mix, put mix on stove and cook, place blueberries on pancakes after they are complete",
        chef_id:1
      },
      {
        name:"Turkey Sandwich",
        description:"A sandwich that never fails me",
        image_url:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
        meal_type:"Lunch",
        ingredients:"sandwich bread, sliced pepper jack cheese, carved turkey, lettuce, mayo, butter",
        instructions:"spread butter on the ends of your bread and put the bread on the stove, toast bread to your liking, place lettuce turkey and cheese in bread",
        chef_id:2
      },
      {
        name:"Green Ramen",
        description:"An atypical take on ramen",
        image_url:"https://images.unsplash.com/photo-1547928576-a4a33237cbc3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        meal_type:"Dinner",
        ingredients:"ramen noodles, avocados, lettuce, tofu, favorite ramen broth",
        instructions:"boil water and place noodles in until they are cooked, cook mushrooms on a stove, prepare soup, place all in a bowl",
        chef_id:2
      },
      {
        name:"French Toast",
        description:"My take on french toast",
        image_url:"https://images.unsplash.com/photo-1565032373823-15ce96f7330c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        meal_type:"Breakfast",
        ingredients:"bread, egg, maple syrup",
        instructions:"crack eggs into a bowl and stir together, dip both ends of your bread into the egg and place on stove, cook the bread until nearly finished, place cheese on top of bread and cook a little longer",
        chef_id:2
      },
      {
        name:"Taco Tuesday",
        description:"A way to spice up your tuesday",
        image_url:"https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        meal_type:"Lunch",
        ingredients:"corn tortillas, chicken, avocados, lettuce",
        instructions:"cook meat, place all food on tortilla",
        chef_id:3
      },
      {
        name:"Curry",
        description:"My favorite dish",
        image_url:"https://images.unsplash.com/photo-1540716908819-502544f3e963?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        meal_type:"Dinner",
        ingredients:"curry mix, water, carrots, potatoes, chicken, rice",
        instructions:"clean rice and place in cooker, cook chicken, start creating curry with mix and water, place chicken carrots and potatoes in curry",
        chef_id:3
      },
      {
        name:"Breakfast classic",
        description:"Anyone can make this!",
        image_url:"https://images.unsplash.com/photo-1542276867-c7f5032e1835?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=938&q=80",
        meal_type:"Breakfast",
        ingredients:"bread, egg, sausage, bacon",
        instructions:"crack eggs into a bowl and stir together, put egg on stove to cook, after eggs are done, place sausage on stove then bacon after",
        chef_id:3
      },
      {
        name:"Mac and Cheeseburger",
        description:"The combo you wanted, but not the one you needed",
        image_url:"https://images.unsplash.com/photo-1549759593-29b53c6e4717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1667&q=80",
        meal_type:"Lunch",
        ingredients:"macaroni, cheese, hamgurger meat, hamburger bun",
        instructions:"cook meat, boil macaroni, remove water from macaroni and place cheese in with macaroni, place cooked patty onto bread then completed mac and cheese after",
        chef_id:4
      },
      {
        name:"Chiken Katsu and rice",
        description:"Breaded chicken but superior",
        image_url:"https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        meal_type:"Dinner",
        ingredients:"chicken, flour, egg, rice, katsu sauce, panko bread crumbs",
        instructions:"clean rice and place in cooker, cover chicken in flour, cover chicken in egg, cover chicken in panko, place chicken in heated oil to fry, remove chicken when done",
        chef_id:4
      },
      {
        name:"Breakfast done simple",
        description:"quick and easy",
        image_url:"https://images.unsplash.com/photo-1533920379810-6bedac961555?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
        meal_type:"Breakfast",
        ingredients:"bread, egg, sausage, bacon",
        instructions:"crack eggs into a bowl and stir together, put egg on stove to cook, after eggs are done, place sausage on stove then bacon after",
        chef_id:4
      },
      
      ]);
    });
};
