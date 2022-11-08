import { NavLink } from 'react-router-dom'
import styles from './Styles.module.css'

export default function Header() {
  return (
    <nav className={styles.header}>
      <span>Ranek</span>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>Produtos</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">Contato</NavLink>
        </li>
      </ul>
    </nav>
  )
}
