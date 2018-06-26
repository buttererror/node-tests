const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
   let res = utils.add(5, 4);
   expect(res).toBe(9).toBeA('number');
});

it('should square a number', () => {
   let res = utils.square(3);
   expect(res).toBe(9).toBeA('number');
});

it('should includes a user name', () => {
   let user = {age: 26, location: "Alexandria"};
   utils.setName(user, 'Mahmoud Ahmed');
   expect(user).toInclude({firstName: 'Mahmoud'});
   expect(user).toInclude({lastName: "Ahmed"});
   expect(user).toBeA('object');
});

// it('should expect some values', () => {
//    // expect({name: 'mahmoud'}).toNotEqual({name: 'Mahmoud'});
//    // expect([1, 3, 5]).toInclude(5);
//    expect({
//       name: 'Mahmoud',
//       age: 26,
//       location: 'Alexandria'
//    }).toExclude({age: 25});
// });