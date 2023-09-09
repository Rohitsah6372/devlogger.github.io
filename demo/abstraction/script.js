var person = {
  firtname: "Rohit",
  lastname: "Sah",
  email: "rohitsah402@gmail.com",
  type: "admin",
  active: true,
  address: {
    street: "Gurudwara Road, Rourkela",
    zip: "10001",
  },
};

for (var prop in person) {
  console.log(`${prop} = ${person[prop]}`);
}
