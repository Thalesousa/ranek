import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Head from '../../components/Head';
import styles from './Styles.module.css'

export default function Produto() {
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchProduto() {
      try {
        setLoading(true)
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        const data = await response.json();
        setProduto(data)
      } catch (error) {
        setErro('Um erro ocorreu')
      } finally {
        setLoading(false)
      }
    }
    fetchProduto()
  }, [id])

  if (loading) return <div className='loading'></div>
  if (erro) return <p>{erro}</p>
  if (produto === null) return null
  return (
    <>
      <Head title={`Ranek | ${produto.nome}`} />
      <section className={`${styles.produto} animeLeft`}>
        <div>
          {produto.fotos.map(foto => (
            <img key={foto.src} src={foto.src} alt={foto.titulo} />
          ))}
        </div>
        <div>
          <h1>{produto.nome}</h1>
          <span className={styles.preco}>R$ {produto.preco}</span>
          <p className={styles.descricao}>{produto.descricao}</p>
        </div>
      </section>
    </>
  )
}
