import React from 'react'
import PageErreur from '404.png'

import Polygon1 from 'polygon1.png'
import Polygon2 from 'polygon2.png'
import styles from '../../src/styles.module.css'
// $(function() {
//     $('a[href*=#]').on('click', function(e) {
//       e.preventDefault();
//       $('html, body').animate({ scrollTop: $((this).attr('href')).offset().top}, 500, 'linear');
//     });
//   });
type Props = {
  text?: string
  image?: string
}

const Page404 = ({ text, image }: Props) => {
  text = 'L’URL demandé n’a pas été trouvé  sur ce serveur'
  image = PageErreur
  return (
    <div>
      <div>
        <img src={Polygon1} alt='Polygon1' className={styles.polygonOne} />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img src={Polygon2} alt='Polygon2' className={styles.polygonTwo} />
          </div>
          <div className='text-center'>
            <img
              src={image || PageErreur}
              alt='Page erreur'
              className={styles.imgPrincipalQuantreCentQuatre}
            />
          </div>
          <div className={styles.containerTextQuantreCentQuatre}>
            <p className={styles.textCodeErreurQuantreCentQuatre}> {text}</p>
            <button className={styles.btnAccueil} type='button'>
              Accueil
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
