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

describe("DELETE /api/users",function(){
    // tests for IDs that exist
    it.skip("should return a 200 OK", function(){
        return request(server).delete("/api/users/1")
            .then(res=>{
                expect(res.status).toBe(200);
            });
    });
    it.skip("should return a JSON", function(){
        return request(server).delete("/api/users/2")
            .then(res=>{
                expect(res.type).toMatch(/JSON/i);
            });
    });
    it.skip("should return a message in the body", function(){
        return request(server).delete("/api/users/3")
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it.skip(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/users/4")
            .then(res=>{
                expect(res.body.message).toBe("User successfully deleted");
            });
    });
    //tests for a nonexistent ID
    it(`should return status 404 on nonexistent ID`, function(){
        return request(server).delete("/api/users/7")
            .then(res=>{
                expect(res.status).toBe(404);
            });
    });
    it("should return a JSON", function(){
        return request(server).delete("/api/users/7")
            .then(res=>{
                expect(res.type).toMatch(/json/i);
            });
    });
    it("should return a message in the body", function(){
        return request(server).delete("/api/users/7")
            .then(res=>{
                expect(res.body.message).toBeDefined();
            });
    });
    it(`message should say "User successfully deleted"`, function(){
        return request(server).delete("/api/users/7")
            .then(res=>{
                expect(res.body.message).toBe("User does not exist with id 7");
            });
    });
    
});

