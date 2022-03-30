import React from 'react'
import PageErreur from '403.png'
import ImageDecorationCercleSecondaire from 'cercle1.png'
import ImageDecorationCerclePrimaire from 'cercle2.png'
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

const Page403 = ({ text, image }: Props) => {
  text =
    'Sorry, you do not have the appropriate permission to access the requested content.'
  image = PageErreur
  return (
    <div>
      <div>
        <img
          src={ImageDecorationCercleSecondaire}
          alt='ImageDecorationCercleSecondaire'
          className={styles.imageDecorationCercleSecondaire}
        />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src={ImageDecorationCerclePrimaire}
              alt='ImageDecorationCerclePrimaire'
              className={styles.imageDecorationCerclePrimaire}
            />
          </div>
          <div className='text-center'>
            <img
              src={image || PageErreur}
              alt='Page erreur'
              className={styles.imgPrincipalQuantreCentTrois}
            />
          </div>
          <div className={styles.containerTextQuantreCentTrois}>
            <p className={styles.textCodeErreurQuantreCentTrois}> {text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page403
