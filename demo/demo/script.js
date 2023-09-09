
const fetchData = async () => {
  const response = await fetch(
    `https://api.burgerking.de/api/o2uvrPdUY57J5WwYs6NtzZ2Knk7TnAUY/v2/de/de/products/`
  );

  const data = await response.json();
  data.map((item) => {
    console.log(item);
  });
};

fetchData();
