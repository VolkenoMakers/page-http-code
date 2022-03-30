import React from 'react'
import PageErreur from '500.png'
import ImageDecorationSubtractSecondaire from 'subtract2.png'
import ImageDecorationSubtractPrimaire from 'subtract1.png'
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

const Page500 = ({ text, image }: Props) => {
  text =
    'The server encountered an internal error or misconfiguration and could not complete your request.'
  image = PageErreur
  return (
    <div>
      <div>
        <img
          src={ImageDecorationSubtractSecondaire}
          alt='ImageDecorationSubtractSecondaire'
          className={styles.imageDecorationSubtractSecondaire}
        />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src={ImageDecorationSubtractPrimaire}
              alt='ImageDecorationSubtractPrimaire'
              className={styles.imageDecorationSubtractPrimaire}
            />
          </div>
          <div className='text-center'>
            <img
              src={image || PageErreur}
              alt='Page erreur'
              className={styles.imgPrincipalCinqCent}
            />
          </div>
          <div className={styles.containerTextCinqCent}>
            <p className={styles.textCodeErreurCinqCent}> {text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page500
