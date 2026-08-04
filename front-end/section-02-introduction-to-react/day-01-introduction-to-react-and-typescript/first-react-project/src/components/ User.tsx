const user = {
  name: "Helen",
  lastName: "Brown",
};

function User() {
  return (
    <span>
      {`${user.name} ${user.lastName}`}
    </span>
  );
}

export default User;
