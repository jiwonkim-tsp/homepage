import { useState, useEffect } from "react";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return <div>로딩</div>;
};

export default Loading;
