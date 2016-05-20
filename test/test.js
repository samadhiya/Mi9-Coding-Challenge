var supertest = require("supertest");
var should = require("should");

//request json file
var jfile = require('../request.json');

//expected output after getting response should be same as this file
var ffile = require('../filtered.json');
var a = JSON.stringify(ffile);

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://localhost:3300");

describe("Input Valid Json",function(){


  it("should allow valid JSON post",function(done){

    server
      .post("/")
      .set('Accept','application/json')
      .send(jfile)
      .expect(200,done); // THis is HTTP response
  });

  it("should respond with error message for invalid JSON post",function(done){

    server
      .post("/")
      .set('Accept','application/json')
      .send("aa")
      .expect(400,{ error: 'Could not decode request: JSON parsing failed' },done);
  });


  it("should return expected filterd data",function(done){

    server
      .post("/")
      .set('Accept','application/json')
      .send(jfile)
      .end(function(err,res){
        res.status.should.equal(200);
        var b = JSON.stringify(res.body);
        b.should.equal(a);
        done();
      });

  });

});
