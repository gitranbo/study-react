import Link from "next/link";
import classes from "src/components/Header/Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.anchor}>
        <div>Index</div>
      </Link>
      <Link href="/about" className={classes.anchor}>
        <div>About</div>
      </Link>
    </header>
  );
}
