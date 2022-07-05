import React from 'react'
import './Page.css'
import PageErreur from '401.png'
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
const Page401 = ({ text, image }: Props) => {
  text = text || 'You do not have permission to access this site.'
  image = image || PageErreur
  return (
    <div className='page-body'>
      <div>
        <img
          src='https://github.com/VolkenoMakers/page-http-code/blob/files/src/components/ellipse1.png?raw=true'
          alt='ImageDecorationEllipsePrimaire'
          className={styles.imageDecorationEllipsePrimaire}
        />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src='https://github.com/VolkenoMakers/page-http-code/blob/files/src/components/ellipse2.png?raw=true'
              alt='ImageDecorationEllipseSecondaire'
              className={styles.imageDecorationEllipseSecondaire}
            />
          </div>
          <div className='text-center'>
            <img
              src={image || PageErreur}
              alt='Page erreur'
              className={styles.imgPrincipal}
            />
          </div>
          <div className={styles.containerText}>
            <p className={styles.textCodeErreur}> {text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page401
