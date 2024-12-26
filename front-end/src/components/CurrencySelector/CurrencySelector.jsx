import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constats/currencies";

export function CurrencySelector() {
  return (
    <select className={styles.CurrencySelector}>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
