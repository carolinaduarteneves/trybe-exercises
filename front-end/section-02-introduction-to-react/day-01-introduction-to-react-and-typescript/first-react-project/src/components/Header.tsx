import User from "./ User";

function Header() {
  return (
    <header>
      <h1>
        Hi,
        {" "}
        <User />
        </h1>
    </header>
  );
}

export default Header;
