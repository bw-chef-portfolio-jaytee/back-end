const request = require('supertest');

const server = require('./server');

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
    it.skip("should return a 201 OK", function(){
        return request(server).post("/api/user/register")
            .send({username:"TxApexx",password:"zed", email:"munch2000@gmal.com"})
            .then(res=>{
                expect(res.status).toBe(201);
            });
    });
    it.skip("should return message stating username already exists", function(){
        return request(server).post("/api/user/register")
            .send({username:"TxApexx",password:"zed", email:"munch2000@gmal.com"})
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

describe("DELETE /api/recipes",function(){
    // tests for IDs that exist
    it.skip("should return a 200 OK", function(){
        return request(server).delete("/api/chef/recipes/1")
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it.skip("should return a JSON", function(){
        return request(server).delete("/api/chef/recipes/2")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it.skip("should return a message in the body", function(){
        return request(server).delete("/api/chef/recipes/3")
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it.skip(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/chef/recipes/4")
            .then(res=>{
                expect(res.body.message).toBe("User successfully deleted");
            });
    });
    //tests for a nonexistent ID
    it(`should return status 404 on nonexistent ID`, function(){
        return request(server).delete("/api/chef/recipes/7")
            .then(res=>{
                expect(res.status).toBe(404);
            });
    });
    it("should return a JSON", function(){
        return request(server).delete("/api/chef/recipes/17")
            .then(res=>{
                expect(res.type).toMatch(/json/i);
            });
    });
    it("should return a message in the body", function(){
        return request(server).delete("/api/chef/recipes/17")
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/chef/recipes/17")
            .then(res=>{
                expect(res.body.message).toBe("Recipe not found");
            });
    });
    
});

