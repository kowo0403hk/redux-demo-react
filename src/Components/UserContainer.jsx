import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainer = () => {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return user.loading ? (
    <h2>Loading...</h2>
  ) : user.error ? (
    <h2>{user.error}</h2>
  ) : (
    <div>
      <h2>User List: </h2>
      <div>
        {user.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
      Thank you!
    </div>
  );
};

export default UserContainer;
