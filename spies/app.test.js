const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
   let db = {
      saveUser: expect.createSpy()
   };
   app.__set__('db', db);

   it('should call the spy correctly', () => {
      let spy = expect.createSpy();
      spy('Mahmoud', 25);
      expect(spy).toHaveBeenCalledWith('Mahmoud', 25);
   });

   it('should call saveUser with user object', () => {
      let email = 'example@gmail.com';
      let password = '123';
      app.handleSignUp(email, password);
      expect(db.saveUser).toHaveBeenCalledWith({email, password});
   });

});