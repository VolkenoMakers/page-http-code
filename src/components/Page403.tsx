import React from 'react'
import PageErreur from '403.png'
import Cercle1 from 'cercle1.png'
import Cercle2 from 'cercle2.png'
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
  text = 'Désolé vous n’avez pas d’accés!'
  image = PageErreur
  return (
    <div>
      <div>
        <img src={Cercle1} alt='Cercle1' className={styles.cercleTwo} />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img src={Cercle2} alt='Cercle2' className={styles.cercleOne} />
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
