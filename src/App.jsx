import { useDispatch, useSelector } from "react-redux";
import News from "./components/News";
import { getNews } from "./redux/actions/actionCreator";

const App = () => {
  const dispatch = useDispatch();
  const latestNews = useSelector(store => store?.news?.latestNews || []);
  const popularNews = useSelector(store => store?.news?.popularNews || []);
  const { latestNewsError, popularNewsError } = useSelector(store => store?.errors || {});

  const handleNews = () => {
    dispatch(getNews());
  }

  return (
    <div>
      <button onClick={handleNews}>Get News</button>
      <News news={latestNews} error={latestNewsError} title="Latest News" />
      <News news={popularNews} error={popularNewsError} title="Popular News" />
    </div>
  );
};

export default App;
