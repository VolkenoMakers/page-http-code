import * as React from 'react'
import styles from './styles.module.css'
import Page401 from '../src/components/Page401'
import Page404 from './components/Page404'
import Page403 from './components/Page403'
import Page500 from './components/Page500'
type Props = {
  text?: string
  image?: string
  typePage: 404 | 500 | 401 | 403
  redirectLink?: string
}

export const HttpCodePage = ({ text, image, typePage, redirectLink }: Props) => {
  if (typePage === 500) {
    return (
      <div className={styles.containerPage}>
        <Page500 text={text} image={image} />
      </div>
    )
  }
  if (typePage === 401) {
    return (
      <div className={styles.containerPage}>
        <Page401 text={text} image={image} />
      </div>
    )
  }
  if (typePage === 403) {
    return (
      <div className={styles.containerPage}>
        <Page403 text={text} image={image} />
      </div>
    )
  }
  if (typePage === 404) {
    return (
      <div className={styles.containerPage}>
        <Page404 text={text} image={image} redirectLink={redirectLink} />
      </div>
    )
  }
  return (
    <div className={styles.containerPage}>
      <h1>Il faut définir un code http pour voir la page</h1>
    </div>
  )
}
