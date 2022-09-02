import "./categories.styles.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats"
    },
    {
      id: 2,
      title: "Jackets"
    },
    {
      id: 3,
      title: "Sneakers"
    },
    {
      id: 4,
      title: "Women"
    },
    {
      id: 5,
      title: "Men"
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          <div className="category-container-body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )

      )}


    </div>
  );
}

export default App;
