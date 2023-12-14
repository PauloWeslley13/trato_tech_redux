import { useNavigate } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { useCategories } from '@/hooks/useCategories'

import Clock from '@/assets/inicial.png'
import styles from './styles.module.scss'

export const Home = () => {
  const navigate = useNavigate()
  const { CATEGORIES, category } = useCategories()

  console.log(category)
  console.log(CATEGORIES)

  const HeadingProps = {
    title: 'Classificados Tech',
    description: 'Compre diversos tipos de produtos no melhor site do Brasil!',
    image: Clock,
  }

  return (
    <div>
      <Header props={HeadingProps}>
        <TitleWithImage
          props={HeadingProps}
          style={{ paddingBottom: '25rem' }}
        />
      </Header>

      <div className={styles.categories}>
        <div className={styles['categories-title']}>
          <h1>Categorias</h1>
        </div>

        <div className={styles['categories-container']}>
          {CATEGORIES.map(item => (
            <div key={item.id} onClick={() => navigate(`/category/${item.id}`)}>
              <img src={item.thumbnail} alt={item.name} />
              <h1>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
