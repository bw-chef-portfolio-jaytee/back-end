
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
        name:"Hamburger",
        description:"Best burger on the site!",
        image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
        meal_type:"Lunch",
        ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
        instructions:"cook the beef into humbirger patties, combine all ingredients to make a hamburger",
        chef_id:1
      },
      {
        name:"Peperoni Pizza",
        description:"Homestyle peperoni pizza",
        image_url:"https://unsplash.com/photos/MNtag_eXMKw",
        meal_type:"Dinner",
        ingredients:"Pepperoni, basil, provolone cheese, tomatoe sauce, pizza crust",
        instructions:"preheat the oven at 350 fahrenheit, partially bake crust in oven, spread tomotoe sauce on crust, place toppings",
        chef_id:1
      },
      {
        name:"Pancakes",
        description:"Buttermilk pancakes",
        image_url:"https://unsplash.com/photos/8Nc_oQsc2qQ",
        meal_type:"Breakfast",
        ingredients:"blueberries, water, pancake mix, maple syrup",
        instructions:"mix water with pancake mix, put mix on stove and cook, place blueberries on pancakes after they are complete",
        chef_id:1
      },
      {
        name:"Turkey Sandwich",
        description:"A sandwich that never fails me",
        image_url:"https://unsplash.com/photos/SqYmTDQYMjo",
        meal_type:"Lunch",
        ingredients:"sandwich bread, sliced pepper jack cheese, carved turkey, lettuce, mayo, butter",
        instructions:"spread butter on the ends of your bread and put the bread on the stove, toast bread to your liking, place lettuce turkey and cheese in bread",
        chef_id:2
      },
      {
        name:"Green Ramen",
        description:"An atypical take on ramen",
        image_url:"https://unsplash.com/photos/YRSRQpBfsj4",
        meal_type:"Dinner",
        ingredients:"ramen noodles, avocados, lettuce, tofu, favorite ramen broth",
        instructions:"boil water and place noodles in until they are cooked, cook mushrooms on a stove, prepare soup, place all in a bowl",
        chef_id:2
      },
      {
        name:"French Toast",
        description:"My take on french toast",
        image_url:"https://unsplash.com/photos/wwQ1mJhKAq0",
        meal_type:"Breakfast",
        ingredients:"bread, egg, maple syrup",
        instructions:"crack eggs into a bowl and stir together, dip both ends of your bread into the egg and place on stove, cook the bread until nearly finished, place cheese on top of bread and cook a little longer",
        chef_id:2
      },
      {
        name:"Taco Tuesday",
        description:"A way to spice up your tuesday",
        image_url:"https://unsplash.com/photos/ZQf4jzkpz1k",
        meal_type:"Lunch",
        ingredients:"corn tortillas, chicken, avocados, lettuce",
        instructions:"cook meat, place all food on tortilla",
        chef_id:3
      },
      {
        name:"Curry",
        description:"My favorite dish",
        image_url:"https://unsplash.com/photos/FiOBJNMxtKI",
        meal_type:"Dinner",
        ingredients:"curry mix, water, carrots, potatoes, chicken, rice",
        instructions:"clean rice and place in cooker, cook chicken, start creating curry with mix and water, place chicken carrots and potatoes in curry",
        chef_id:3
      },
      {
        name:"Breakfast classic",
        description:"Anyone can make this!",
        image_url:"https://unsplash.com/photos/An6cTgmC8yk",
        meal_type:"Breakfast",
        ingredients:"bread, egg, sausage, bacon",
        instructions:"crack eggs into a bowl and stir together, put egg on stove to cook, after eggs are done, place sausage on stove then bacon after",
        chef_id:3
      },
      {
        name:"Mac and Cheeseburger",
        description:"The combo you wanted, but not the one you needed",
        image_url:"https://unsplash.com/photos/rUmET8NYXFU",
        meal_type:"Lunch",
        ingredients:"macaroni, cheese, hamgurger meat, hamburger bun",
        instructions:"cook meat, boil macaroni, remove water from macaroni and place cheese in with macaroni, place cooked patty onto bread then completed mac and cheese after",
        chef_id:4
      },
      {
        name:"Chiken Katsu and rice",
        description:"Breaded chicken but superior",
        image_url:"https://unsplash.com/photos/_sfMD-OhFR8",
        meal_type:"Dinner",
        ingredients:"chicken, flour, egg, rice, katsu sauce, panko bread crumbs",
        instructions:"clean rice and place in cooker, cover chicken in flour, cover chicken in egg, cover chicken in panko, place chicken in heated oil to fry, remove chicken when done",
        chef_id:4
      },
      {
        name:"Breakfast done simple",
        description:"quick and easy",
        image_url:"https://unsplash.com/photos/_sfMD-OhFR8",
        meal_type:"Breakfast",
        ingredients:"bread, egg, sausage, bacon",
        instructions:"crack eggs into a bowl and stir together, put egg on stove to cook, after eggs are done, place sausage on stove then bacon after",
        chef_id:4
      },
      
      ]);
    });
};
