import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Head from '../../components/Head';
import styles from './Styles.module.css'

export default function Produtos() {
  const [produtos, setProdutos] = useState(null)
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        setLoading(true)
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto')
        const data = await response.json()
        setProdutos(data)
      } catch (error) {
        setErro('Um erro ocorreu')
      } finally {
        setLoading(false)
      }
    }
    fetchProdutos()
  }, [])

  if (loading) return <div className='loading'></div>
  if (erro) return <p>{erro}</p>
  if (produtos === null) return null;

  return (
    <>
      <Head title="Ranek"/>
      <section className={`${styles.produtos} animeLeft`}>
        {produtos.map(produto => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        ))}
      </section>
    </>
  )
}
