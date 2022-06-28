import React from 'react';
import styles from './HowItWorkPage.module.css'
import Logo from '../../components/Logo';
import CONSTANTS from '../../constants';



const HowItWorkPage = () => {
    
    return (
        <>
        <section className={styles.header}>
             <div className={styles.container}>
                  <div className={styles.header_content}>
                  <Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`} to='/' alt='blue-logo'/>
                   <div className={styles.header_content_input}><label htmlFor="search"><i className="fa fa-search"></i></label>
                    <input type="text" id='search' name="search"  placeholder='Search over 100,000 names'/>
                   </div>
                    <div className={styles.header_contentMenu}>
                    <a href="Google.com"><i className="fa  fa-user"></i><span >Account</span></a>
                    <a href="Google.com"><i className="fa  fa-phone"></i><span>Contact</span></a>
                    <a href="Google.com"><i className="fa  fa-heart"></i><span>Favorites</span></a>
                    <button>Start Contest</button>
                   </div>
                  </div>
                </div>
            </section>
        <section className={styles.header_nav}>
            <div className={styles.container}>
                <ul className={styles.header_nav_list}>
                    <li>
                        <div className={styles.nav_icon}>
                            <p>names for sale</p>
                        <i id={styles['hoverArrowDown']} className="fa fa-angle-down"></i>
                        <i id={styles['hoverArrowUp']} className="fa  fa-angle-up"></i>
                        </div>
                    <ul className={styles.header_nav_links}>
                        <li><a href="google.com">popular brandables names</a></li>
                        <li><a href="google.com">premium domains for sale</a></li>
                        <li className={styles.header_nav_links_list}> <a href="google.com">short domains</a>
                        <ul>
                            <li><a href="google.com">3 letter domains</a></li>
                            <li><a href="google.com">4 letter domains</a></li>
                            <li><a href="google.com">5 letter domains</a></li>
                        </ul></li>
                        <li><a href="google.com">one word names</a></li>
                        <li><a href="google.com">industry domains</a></li>
                        <li><a href="google.com">locatio based names</a></li>
                        <li><a href="google.com">recommended for you</a></li>
                        <li><a href="google.com">become a seller</a></li>
                    </ul></li>
                    <li>
                    <div className={styles.nav_icon}>
                    <p>naming contents</p>
                        <i id={styles['hoverArrowDown']} className="fa fa-angle-down"></i>
                        <i id={styles['hoverArrowUp']} className="fa  fa-angle-up"></i>
                        </div>
                    <ul className={styles.header_nav_links}>
                        <li><a href="google.com">start a contest</a></li>
                        <li><a href="google.com">how it works</a></li>
                        <li><a href="google.com">contest pricing</a></li>
                        <li><a href="google.com">agency servises</a></li>
                        <li><a href="google.com">our work</a></li>
                        <li><a href="google.com">recent winners</a></li>
                        <li><a href="google.com">active contests</a></li>
                        <li><a href="google.com">become a creative</a></li>
                    </ul></li>
                    <li>
                    <div className={styles.nav_icon}>
                    <p>other services</p>
                        <i id={styles['hoverArrowDown']} className="fa fa-angle-down"></i>
                        <i id={styles['hoverArrowUp']} className="fa  fa-angle-up"></i>
                        </div>
                    <ul className={styles.header_nav_links}>
                        <li><a href="google.com">logos</a></li>
                        <li><a href="google.com">taglines</a></li>
                        <li><a href="google.com">audience testing</a>t</li>
                        <li><a href="google.com">trademark research</a></li>
                        <li><a href="google.com">trademark filing</a></li>
                        <li><a href="google.com">video creation</a></li>
                    </ul></li>
                    <li><p>agency experience</p></li>
                    <li className={styles.upright_border}></li>
                    <li>
                    <div className={styles.nav_icon}>
                    <p>resourses</p>
                        <i id={styles['hoverArrowDown']} className="fa fa-angle-down"></i>
                        <i id={styles['hoverArrowUp']} className="fa  fa-angle-up"></i>
                        </div>
                    <ul className={styles.header_nav_links}>
                        <li><a href="google.com">business name generator</a></li>
                        <li><a href="google.com">business name ideas</a></li>
                        <li><a href="google.com">how to naming your business</a></li>
                        <li><a href="google.com">free trademark checker</a></li>
                        <li><a href="google.com">audience testing</a></li>
                        <li className={styles.header_nav_industryIdeas}><a href="google.com">Industry Name Ideas</a>
                            <ul className={styles.header_nav_links_ideas}>
                                <li><a href="google.com">clothing brand name ideas</a></li>
                                <li><a href="google.com">consulting business name ideas</a></li>
                                <li><a href="google.com">health & wellness business name ideas</a></li>
                                <li><a href="google.com">food brand name ideas</a></li>
                                <li><a href="google.com">beauty business names</a></li>
                                <li><a href="google.com">tech startup name ideas</a></li>
                                <li><a href="google.com">shopping website name ideas</a></li>
                                <li><a href="google.com">real estate business name ideas</a></li>
                                <li><a href="google.com">insurance business name ideas</a></li>
                                <li><a href="google.com">finance business name ideas</a></li>
                           </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
            </div>
        </section>
        <section className={styles.how_it_works}>
            <div className={styles.container}>
                <div className={styles.how_it_works_content}>
                    <div className={styles.how_it_works_content_info}>
                      <button className={styles.btn_disabled} disabled>World`s #1 Naming Platform</button>
                      <h1>How Does Squadhelp Work?</h1>
                      <p>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
                      <button type='video'></button>
                    </div>
                    <div className={styles.how_it_works_content_image}>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default HowItWorkPage;
