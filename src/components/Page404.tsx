import React from 'react'
import PageErreur from '404.png'

import ImageDecorationPolygonPrimaire from 'polygon1.png'
import ImageDecorationPolygonSecondaire from 'polygon2.png'
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
  redirectLink?: string
}

const Page404 = ({ text, image, redirectLink }: Props) => {
  text = 'The requested URL was not found on this server.'
  image = PageErreur
  return (
    <div>
      <div>
        <img
          src={ImageDecorationPolygonPrimaire}
          alt='ImageDecorationPolygonPrimaire'
          className={styles.imageDecorationpolygonPrimaire}
        />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src={ImageDecorationPolygonSecondaire}
              alt='ImageDecorationPolygonSecondaire'
              className={styles.imageDecorationpolygonSecondaire}
            />
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
            <a href={redirectLink} className={styles.btnAccueil}>
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page404
