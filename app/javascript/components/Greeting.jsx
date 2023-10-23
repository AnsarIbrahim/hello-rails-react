import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const greetingmsg  = useSelector((state) => state.greetingStore.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (!greetingmsg) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 style={{ color: 'blue', fontSize: '24px' }}>Random Messages: <span style={{ fontWeight: 'bold', color: 'red' }}>{greetingmsg}</span></h1>
    </>
  );
}

export default Greeting;