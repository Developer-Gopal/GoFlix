import { useEffect, useState } from "react";

const Card = ({ title }) => {
  const [hasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${title} has been liked ${hasLiked}`);
  }, [hasLiked]);

  return (
    <div
      onClick={() => {
        setCount(count + 1); // this is not an efficient way
      }}
    >
      <p>
      {/* coup */}
        {title} <br /> {count ? count : null} {/* or count || null */}
      </p>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Hello world</h2>
      <Card title="Gopal" />
      <Card title="Sita" />
      <Card title="Star" />
    </>
  );
};
export default App;
