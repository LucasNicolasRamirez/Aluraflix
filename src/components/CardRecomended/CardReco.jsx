import { Typography } from '@mui/material';
import styles from './CardReco.module.css';


function CardReco() {
    return (
        <>
            <section className={styles.cardreco} style={{ backgroundImage: `url("../../img/banner.png")` }} >
                <div className={styles.description} >
                    <Typography variant='h2' sx={{
                        color: '#F5F5F5',
                        padding: '15px',
                        fontWeight: 'bold',
                        fontSize: '48px',
                        border: '1px solid #F5F5F5',
                        boxSizing: 'border-box',
                        borderRadius: '15px',
                        width: 'fit-content',
                        backgroundColor: "#6BD1FF",
                        justifyContent: 'center',
                    }}>
                        FRONT END
                    </Typography>

                    <Typography variant='h4'>
                        Challenge React
                    </Typography>

                    <Typography variant='body1' className={styles.descriptionChallenge}>
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </Typography>
                </div>

                <div className={styles.video} >
                    <iframe  src="https://www.youtube.com/embed/ov7vA5HFe6w?si=gUION_x9n9HfNDGF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
        </>
    )

}

export default CardReco;   