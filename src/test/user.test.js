const expect = require('chai').expect;
const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);


describe("User", () => {
    var req;
    var apiUrl;
    before(() => {
        req = {
            "firstName": "Rajiv",
            "lastName": "Singh",
            "mobileNo": 8208461440,
            "dateOfBirth": "11/12/1983",
            "password": "1234567"

        };
        apiUrl = "http://localhost:3000";

    });

    describe("User Creation", () => {
        it("should return status 200 after insert", async () => {
            chai
                .request(app)
                .post("/users")
                .send(req)
                .end((err, res) => {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                })
        });
    });
});