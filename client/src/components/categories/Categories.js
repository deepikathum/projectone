import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useSelector((state) => state.search.categories);

  return (
    <div>
      <h2>Categories:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
         </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
