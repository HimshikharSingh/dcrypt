import { useParams } from "react-router-dom";

const CoinPage = () => {
  const { coinId } = useParams();

  // Fetch data for the selected coin using coinId

  return (
    <div>
      <h1>{coinId} Page</h1>
      {/* Display data for the selected coin */}
    </div>
  );
};

export default CoinPage;
