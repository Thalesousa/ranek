import styles from './Styles.module.css'
import foto from '../../assets/contato.jpg'
import Head from '../../components/Head'

export default function Contato() {
  return (
    <>
      <Head title="Ranek | Contato" />
      <section className={`${styles.contato} animeLeft`}>
        <img src={foto} alt="Máquina de escrever" />
        <div>
          <h1>Entre em contato.</h1>
          <ul className={styles.dados}>
            <li><a href="mailto:thalestjsb@gmail.com">thalestjsb@gmail.com</a></li>
            <li><a href="tel:+0000000000">00 00000-0000</a></li>
            <li>Rua Ali Perto, 000</li>
          </ul>
        </div>
      </section>
    </>
  )
}
