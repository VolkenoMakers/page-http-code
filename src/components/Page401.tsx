import React from 'react'
import './Page.css'
import PageErreur from '401.png'
import Ellipse1 from 'ellipse1.png'
import Ellipse2 from 'ellipse2.png'
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
  text =
    'Autorisation obligatoire. Veuillez actualiser cette page et le fichier avec les informations de connexion correctes.'
  image = PageErreur
  return (
    <div className='page-body'>
      <div>
        <img src={Ellipse1} alt='Ellipse1' className={styles.ellipseOne} />
      </div>
      <div className='container-page'>
        <div className='bloc-container'>
          <div>
            <img src={Ellipse2} alt='Ellipse2' className={styles.ellipseTwo} />
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
