import './About.css'


export default function About() {



    return(

        <div className='about-main'>
            
            <h2 className="about-us">ABOUT US!</h2>


            <div className="about-text">
                <p>We are a company that sells PCs, mouses and keyboards. We always try to give you the best quality products of the market with a low price.</p>
                <p>If you have any doubts about our products, you can contact us via social media!</p>
            </div>



            <div className="social-media-mobile media-about">
                <a href="https://m.facebook.com/profile.php?id=4"><i className="fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/cbum/?hl=es-la"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com/maritobaracus"><i className="fab fa-twitter"></i></a>
                <a href="https://wa.me/5492615162079"><i className="fab fa-whatsapp"></i></a>
            </div>
        </div>
    )
}