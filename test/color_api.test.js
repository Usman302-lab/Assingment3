// const request = require('request');
// const expect = require('chai').expect;

// describe("Color Api fetching", function(){
//     this.timeout(5000); // set timeout to 5 seconds
//     it("should return product with color 'Red'", function(done){
//         request.get({url:"https://demo.reactstorefront.io/api/p/1?color=Red"}, function(err, res, body){
//             if(err) return done(err); // handle error

//             var obj;
//             try {
//                 obj = JSON.parse(body);
//             } catch (e) {
//                 return done(e); // handle JSON parsing error
//             }
            
//             expect(res.statusCode).to.equal(200);
//             expect(obj.pageData.title).to.equal("Product 1");
//             done();
//         })
//     })
// })
