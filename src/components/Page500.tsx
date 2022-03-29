import React from 'react'
import PageErreur from '500.png'
import Subtract1 from 'subtract2.png'
import Subtract2 from 'subtract1.png'
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
    'Le serveur a rencontré une erreur interne ou une mauvaise configuration et n’a pas pu répondre à votre demande '
  image = PageErreur
  return (
    <div>
      <div>
        <img src={Subtract1} alt='Subtract1' className={styles.subtractTwo} />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img
              src={Subtract2}
              alt='Subtract2'
              className={styles.subtractOne}
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
