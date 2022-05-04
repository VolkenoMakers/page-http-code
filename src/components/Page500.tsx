import React from 'react'
import PageErreur from '500.png'
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
    text ||
    'The server encountered an internal error or misconfiguration and could not complete your request.'
  image = image || PageErreur
  return (
    <div>
      <div>
        <img
          src='https://github.com/VolkenoMakers/page-http-code/blob/files/src/components/subtract2.png?raw=true'
          alt='ImageDecorationSubtractSecondaire'
          className={styles.imageDecorationSubtractSecondaire}
        />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src='https://github.com/VolkenoMakers/page-http-code/blob/files/src/components/subtract1.png?raw=true'
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
