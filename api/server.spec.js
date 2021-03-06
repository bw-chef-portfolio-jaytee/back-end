const request = require('supertest');

const server = require('./server');

let token = '';

describe("server.js",function(){
    describe("environment",function(){
       it("should set environment to testing", function(){
           expect(process.env.DB_ENV).toBe("testing");
       });
    });
});

describe("GET /api/user/recipes",function(){
    it("should return a 200 OK", function(){
        return request(server).get("/api/user/recipes")
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should return a JSON", function(){
        return request(server).get("/api/user/recipes")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return an array", function(){
        return request(server).get("/api/user/recipes")
            .then(res=>{
                expect(res.body instanceof Array).toBe(true);
            });
    });
});

describe("GET /api/user/recipes/:id",function(){
    it("should return a 200 OK", function(){
        return request(server).get("/api/user/recipes/1")
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should return a JSON", function(){
        return request(server).get("/api/user/recipes/1")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return an Object", function(){
        return request(server).get("/api/user/recipes/1")
            .then(res=>{
                expect(res.body instanceof Object).toBe(true);
            });
    });
    //nonexistent id
    it("should return a 200 OK", function(){
        return request(server).get("/api/user/recipes/117")
            .then(res=>{
                expect(res.status).toBe(404);
            });
    });
    it("should return a JSON", function(){
        return request(server).get("/api/user/recipes/117")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return a message saying id doesnt exist", function(){
        return request(server).get("/api/user/recipes/117")
            .then(res=>{
                expect(res.body.message).toBe("No recipe with this id");
            });
    });
});

describe("POST /api/users/register",function(){
    it("should return message stating it needs username and password", function(){
        return request(server).post("/api/user/register")
            .send({username:"T"})
            .then(res=>{
                expect(res.body.message).toBe("missing username and password in request body");
            });
    });
    it("should return message stating username cannot have a space in it", function(){
        return request(server).post("/api/user/register")
            .send({username:"T ", password:"1"})
            .then(res=>{
                expect(res.body.message).toBe("username cannot have a space in it");
            });
    });
    it("should return message stating username must have at least 2 characters in it", function(){
        return request(server).post("/api/user/register")
            .send({username:"T", password:"1"})
            .then(res=>{
                expect(res.body.message).toBe("username must have at least 2 characters");
            });
    });
    it("should return message stating password must have at least 3 characters in it", function(){
        return request(server).post("/api/user/register")
            .send({username:"Tx", password:"1"})
            .then(res=>{
                expect(res.body.message).toBe("password must have at least 3 characters");
            });
    });
    it("should return message stating email is invalid", function(){
        return request(server).post("/api/user/register")
            .send({username:"Tx", password:"117",email:"hi"})
            .then(res=>{
                expect(res.body.message).toBe("you have provided an invalid email.");
            });
    });
    it("should return message stating phone number is invalid", function(){
        return request(server).post("/api/user/register")
            .send({username:"Tx", password:"117",email:"munch2000@gmail.com", phone_number:"9090"})
            .then(res=>{
                expect(res.body.message).toBe("you have provided an invalid phone number.");
            });
    });
    it.skip("should return a 201 OK", function(){
        return request(server).post("/api/user/register")
            .send({username:"TxApexx",password:"zed", email:"munch2000@gmal.com", phone_number:"(559) 361-0031"})
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it.skip("should return message stating username already exists", function(){
        return request(server).post("/api/user/register")
            .send({username:"TxApexx",password:"zed", email:"munch2000@gmal.com", phone_number:"(559) 361-0031"})
            .then(res=>{
                expect(res.body.message).toBe("username alreacy exists. choose another username");
            });
    });
    it.skip("should message stating register was successful", function(){
        return request(server).post("/api/user/register")
            .send({username:"Bowserbot",password:"leona"})
            .then(res=>{
                expect(res.body.message).toBe("Chef created sucessfully!");
            });
    });
});

describe("POST /api/users/login",function(){
    it("should return message stating it needs username and password", function(){
        return request(server).post("/api/user/login")
            .send({username:"T"})
            .then(res=>{
                expect(res.body.message).toBe("missing username and password in request body");
            });
    });
    it("should return message invalid credentials on bad username and password", function(){
        return request(server).post("/api/user/login")
            .send({username:"T", password:"1"})
            .then(res=>{
                expect(res.body.message).toBe("Invalid Credentials");
            });
    });
    it("should return message invalid credentials on bad password", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"1"})
            .then(res=>{
                expect(res.body.message).toBe("Invalid Credentials");
            });
    });
    it("should return a 200 OK", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"zed"})
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should return a JSON", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"zed"})
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return a message in the body", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"zed"})
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it("should return a welcome message", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"zed"})
            .then(res=>{
                expect(res.body.message).toBe("Welcome loremenius");
            });
    });
    it("should return a token in the body", function(){
        return request(server).post("/api/user/login")
            .send({username:"Loremenius", password:"zed"})
            .then(res=>{
                token = res.body.token;
                console.log(token);
                expect(res.body.token).toBeDefined();
            });
    });
    
});

describe("GET /api/chef/recipes",function(){
    it("should return a 200 OK", function(){
        return request(server).get("/api/chef/recipes")
            .set('Authorization', token)
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it("should return a JSON", function(){
        return request(server).get("/api/chef/recipes")
            .set('Authorization', token)
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return an array", function(){
        return request(server).get("/api/chef/recipes")
            .set('Authorization', token)
            .then(res=>{
                expect(res.body instanceof Array).toBe(true);
            });
    });
});

describe("DELETE /api/recipes",function(){
    // tests for IDs that exist
    it.skip("should return a 200 OK", function(){
        return request(server).delete("/api/chef/recipes/117")
            .set('Authorization', token)
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it.skip("should return a JSON", function(){
        return request(server).delete("/api/chef/recipes/2")
            .set('Authorization', token)
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it.skip("should return a message in the body", function(){
        return request(server).delete("/api/chef/recipes/3")
            .set('Authorization', token)
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it.skip(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/chef/recipes/4")
            .set('Authorization', token)
            .then(res=>{
                expect(res.body.message).toBe("User successfully deleted");
            });
    });
    //tests for a nonexistent ID
    it(`should return status 404 on nonexistent ID`, function(){
        return request(server).delete("/api/chef/recipes/7")
            .set('Authorization', token)
            .then(res=>{
                expect(res.status).toBe(404);
            });
    });
    it("should return a JSON", function(){
        return request(server).delete("/api/chef/recipes/17")
            .set('Authorization', token)
            .then(res=>{
                expect(res.type).toMatch(/json/i);
            });
    });
    it("should return a message in the body", function(){
        return request(server).delete("/api/chef/recipes/17")
            .set('Authorization', token)
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/chef/recipes/17")
            .set('Authorization', token)
            .then(res=>{
                expect(res.body.message).toBe("Recipe not found");
            });
    });
    
});

describe("POST /api/chef/recipes",function(){
    it("should return message stating it needs all recipe data points", function(){
        return request(server).post("/api/chef/recipes")
            .set('Authorization', token)
            .send({username:"T"})
            .then(res=>{
                expect(res.body.message).toBe("missing name, description, image_url, meal_type, ingredients, and instructions in request body");
            });
    });
    
    it("should return a 201 OK", function(){
        return request(server).post("/api/chef/recipes")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it("should return a JSON", function(){
        return request(server).post("/api/chef/recipes")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return message saying post was successful", function(){
        return request(server).post("/api/chef/recipes")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.body.message).toBe("Recipe successfully created");
            });
    });
    
});

describe("PUT /api/chef/recipes/:id",function(){
    it("should return message stating it needs all recipe data points", function(){
        return request(server).put("/api/chef/recipes/1")
            .set('Authorization', token)
            .send({username:"T"})
            .then(res=>{
                expect(res.body.message).toBe("missing name, description, image_url, meal_type, ingredients, and instructions in request body");
            });
    });
    
    it("should return a 201 OK", function(){
        return request(server).put("/api/chef/recipes/1")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it("should return a JSON", function(){
        return request(server).put("/api/chef/recipes/1")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it("should return message saying it was successful", function(){
        return request(server).put("/api/chef/recipes/1")
            .set('Authorization', token)
            .send({
                name:"Hamburger",
                description:"Best burger on the site!",
                image_url:"https://unsplash.com/photos/1Shk_PkNkNw",
                meal_type:"Lunch",
                ingredients:"hamburger beef, tomatoe, provolone cheese, lettuce, hamburger buns",
                instructions:"cook the beef into humbirger patties. combine all ingredients to make a hamburger"
            })
            .then(res=>{
                expect(res.body.message).toBe("Recipe successfully edited");
            });
    });
    
});

describe("PUT /api/chef/update",function(){
    it("should return message stating it needs username", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({password:"T"})
            .then(res=>{
                expect(res.body.message).toBe("missing username in request body");
            });
    });
    it("should return message stating username cannot have a space in it", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({username:"T "})
            .then(res=>{
                expect(res.body.message).toBe("username cannot have a space in it");
            });
    });
    it("should return message stating username must have at least 2 characters in it", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({username:"T"})
            .then(res=>{
                expect(res.body.message).toBe("username must have at least 2 characters");
            });
    });
    it("should return message stating email is invalid", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({username:"Tx",email:"hi"})
            .then(res=>{
                expect(res.body.message).toBe("you have provided an invalid email.");
            });
    });
    it("should return message stating phone number is invalid", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({username:"Tx", email:"munch2000@gmail.com", phone_number:"9090"})
            .then(res=>{
                expect(res.body.message).toBe("you have provided an invalid phone number.");
            });
    });
    it("should return a 201 OK", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({
                username:"loremenius",
                phone_number:"(559) 361-0031",
                email:"munch2000@gmail.com",
                location:"USA"
            })
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it("should return message stating username already exists", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({
            username:"driftwud",
            phone_number:"(559) 361-0031",
            email:"munch2000@gmail.com",
            location:"USA"
        })
            .then(res=>{
                expect(res.body.message).toBe("username alreacy exists. choose another username");
            });
    });
    it("should message stating register was successful", function(){
        return request(server).put("/api/chef/update")
            .set('Authorization', token)
            .send({
                username:"loremenius",
                phone_number:"(559) 361-0031",
                email:"munch2000@gmail.com",
                location:"USA"
            })
            .then(res=>{
                expect(res.body.message).toBe("Chef successfully edited");
            });
    });
});


