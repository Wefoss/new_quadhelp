import React, {useRef} from 'react';
import styles from './HowItWorkPage.module.css'
import Logo from '../../components/Logo';
import CONSTANTS from '../../constants';
import sx from 'classnames'



const HowItWorkPage = () => {
    const toggleOne = useRef()
    const toggleTwo = useRef()
    const onClickBtn = (e) => {
        
     if(e.currentTarget.parentNode === toggleOne.current || toggleTwo.current  ) {
        e.currentTarget.toggleAttribute("closedCurrent")
        
     } 
             
   e.currentTarget.parentNode.childNodes.forEach((el) => {
  console.log('dsdf');
        if(el !== e.currentTarget && el.hasAttribute('closedCurrent')) {
            el.lastChild.classList.add(styles.hiden)
            el.lastChild.classList.remove(styles.some)
            el.lastChild.classList.remove(styles.hideAll)
            el.removeAttribute('closedCurrent')
            
        } else if(el === e.currentTarget && el.hasAttribute('closedCurrent')) {
            el.lastChild.classList.add(styles.some)
            el.lastChild.classList.remove(styles.hiden)
            el.lastChild.classList.remove(styles.hideAll)
        } else {
            el.lastChild.classList.add(styles.hideAll)
            el.lastChild.classList.remove(styles.some)
        }
        
       })
         
     
    }

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
                      <a href='google.com'>Play Video</a>
                    </div>
                    <div className={styles.how_it_works_content_image}>
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8iJmwXzZ97e8sJox-KDXGuYTjPVGF70055Q&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.use_squadhelp}>
            <div className={styles.container}>
                <div className={styles.use_squadhelp_ways}>
                <article className={styles.use_squadhelp_header}>
                <button className={styles.btn_disabled} disabled="disabled">Our Servises</button>
                <h2>3 Ways To Use Squadhelp</h2>
                <p>Squadhelp offers 3 ways to get you a perfect name for your business.</p>
                </article>
                <article className={styles.use_squadhelp_card_desk}>
                    <div className={styles.use_squadhelp_card}>
                    <i className="fa fa-users"></i>
                        <h3>Launch a Contest</h3>
                        <p>Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.</p>
                        <button>Launch a Contest</button>
                    </div>
                    <div className={styles.use_squadhelp_card}>
                    <i class="fa fa-newspaper"></i>
                        <h3>Explore Names For Sale</h3>
                        <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
                        <button>Explore Names For Sale</button>
                    </div>
                    <div className={styles.use_squadhelp_card}>
                    <i class="fa fa-lightbulb"></i>
                        <h3>Agency-level Managed Contests</h3>
                        <p>Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs</p>
                        <button>Learn More</button>
                    </div>
                </article>
                </div>
            </div>
        </section>
        <section className={styles.how_do_naming_context}>
            <div className={styles.container}>
                  <div className={styles.use_squadhelp_ways}>
                    <article className={styles.use_squadhelp_header}>
                    <i class="fa fa-trophy"></i>
                    <h2>3 Ways To Use Squadhelp</h2>
                    </article>
                    <article className={styles.use_squadhelp_ways_content}>
                        <div className={styles.use_squadhelp_ways_content_img}>
                             <img src="https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/a7/35/5e/a7355e01-a542-21f5-a2f2-e17aa404f556/mza_4131701700614588403.jpg/1200x1200bb.jpg" alt="" />
                        </div>
                        <ul className={styles.use_squadhelp_ways_content_info}>
                          <li><p>Fill out your Naming Brief and begin receiving name ideas in minutes</p></li>
                          <li><p>ate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p></li>
                          <li><p>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p></li>
                          <li><p>Pick a Winner. The winner gets paid for their submission</p></li>
                        </ul>
                    </article>
                  </div>
            </div>
        </section>
        <section className={styles.launcing_contest}>
            <div className={styles.container}>
                <div className={styles.launcing_contest_content}>
                    <article className={styles.launcing_contest_content_nav}>
                           <ul>
                            <li><a href="">Launching A Contest</a></li>
                            <li><a href="">Buying From Marketplace</a></li>
                            <li><a href="">Managed Contests</a></li>
                            <li><a href="">For Creatives </a></li>
                           </ul>
                    </article>
                    <article className={styles.launcing_contest_content_info}>
                       <h3>Launching A Contest</h3>
                       <ul ref={toggleOne} className={styles.launcing_contest_content_lists}>
                        <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How long does it take to start receiving submissions?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase .</p> </div>
                        </li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>How long do Naming Contests last?<i class="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p>You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Where are the creatives located?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}> What if I do not like any submissions?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:
If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value).By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale.
If you choose the Gold package or Platinum package and keep the contest as "Not Guaranteed", you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our Refund Policy</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>How math does it cost?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >
                        Our naming competitions start at $299, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our Pricing Page for details</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>I need both a Name and a Logo. Do you offer any discount for multyple contest?<i class="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p>Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>What if I want to keep my business idea private?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Can you serve customers outside the US?<i class="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p >Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Can I see any examples?<i class="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p >Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.</p></div></li>
                            </ul>
                            
                            
                            <h3>Buying From Marketplace</h3>
                            <ul ref={toggleTwo} className={styles.launcing_contest_content_lists}>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>What's included with a Domain Purchase?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >When you purchase a domain from our premium domain marketplace, you will receive the exact match .com URL, a complimentary logo design (along with all source files), as well as a complimentary Trademark report and Audience Testing if you’re interested in validating your name.</p> </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How does the Domain transfer process work?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >Once you purchase a Domain, our transfer specialists will reach out to you (typically on the same business day). In most cases we can transfer the domain to your preferred registrar (such as GoDaddy). Once we confirm the transfer details with you, the transfers are typically initiated to your account within 1 business day.</p> </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>If I purchase a Domain on installments, can I start using it to setup my website?<i class="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >We offer payment plans for many domains in our Marketplace. If you purchase a domain on a payment plan, we hold the domain in an Escrow account until it is fully paid off. However our team can assist you with making any changes to the domains (such as Nameserver changes), so that you can start using the domain right away after making your first installment payment.</p> </div>
                            </li>
                            </ul>
                            
                      
                    </article>
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default HowItWorkPage;
