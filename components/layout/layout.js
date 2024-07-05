import styles from "layout.module.css";

function layout({children}) {
  return (
    <>
      <header>
        <h2>Ashkan Car Project</h2>
        <p>Choose and buy your car here !</p>
      </header>
      {children}
      <footer>Designed & Developed by Ashkan Jay with Love</footer>
    </>
  );
}

export default layout;
