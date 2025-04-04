import Button from "@/shared/ui/button/button";
import styles from "./auth.module.scss";
const Auth = () => {
  return (
    <main className={styles.main}>
      <form action="/">
        <label htmlFor="">login: admin</label>
        <input name="login" type="text" placeholder="login" />
        <label htmlFor="">password: password</label>
        <input name="password" type="password" placeholder="password" />
        <Button>Send</Button>
      </form>
    </main>
  );
};

export default Auth;
