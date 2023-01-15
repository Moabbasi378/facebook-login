import image from "../logo.png";

export function Main() {
  return (
    <div className="box">
      <div className="title-box">
        <img src={image} alt="Facebook" />
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="form-box">
        <form action="#">
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">Log In</button>
          <a href="#">Forgotten Password</a>
        </form>
        <hr />
        <div className="create-btn">
          <a>Create New Account</a>
        </div>
      </div>
    </div>
  );
}
