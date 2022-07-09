import React, {useRef} from 'react';
import styles from './HowItWorkPage.module.css'
import Logo from '../../components/Logo';
import CONSTANTS from '../../constants';


const HowItWorkPage = () => {
    const toggleOne = useRef()
    const toggleTwo = useRef()
    const hamburgerToggle = useRef()
    const onClickBtn = (e) => {
        
     if(e.currentTarget.parentNode === toggleOne.current || toggleTwo.current  ) {
        e.currentTarget.toggleAttribute("closedCurrent")
        
     } 
             
   e.currentTarget.parentNode.childNodes.forEach((el) => {
  
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
    const hamburgerMenu = (e) => {
        hamburgerToggle.current.classList.contains(styles.header_nav_display) ? hamburgerToggle.current.classList.remove(styles.header_nav_display) : hamburgerToggle.current.classList.add(styles.header_nav_display)
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
                   <span onClick={hamburgerMenu} className={styles.header_contentMenu_burger}></span>
                  </div>
                </div>
            </section>
        <section className={styles.header_nav} ref={hamburgerToggle}>
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
                    </ul>
                   </li>
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
                    <li><div className={styles.nav_icon}><p>agency experience</p><p> </p></div></li>
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
                    <i className="fa fa-newspaper"></i>
                        <h3>Explore Names For Sale</h3>
                        <p>Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design</p>
                        <button>Explore Names For Sale</button>
                    </div>
                    <div className={styles.use_squadhelp_card}>
                    <i className="fa fa-lightbulb"></i>
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
                    <i className="fa fa-trophy"></i>
                    <h2>How Do Naming Contests Work?</h2>
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
                            <li><a href="google.com">Launching A Contest</a></li>
                            <li><a href="google.com">Buying From Marketplace</a></li>
                            <li><a href="google.com">Managed Contests</a></li>
                            <li><a href="google.com">For Creatives </a></li>
                           </ul>
                    </article>
                    <article className={styles.launcing_contest_content_info}>
                       <h3>Launching A Contest</h3>
                       <ul ref={toggleOne} className={styles.launcing_contest_content_lists}>
                        <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How long does it take to start receiving submissions?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase .</p> </div>
                        </li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>How long do Naming Contests last?<i className="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p>You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Where are the creatives located?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}> What if I do not like any submissions?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:</p>
                        <ul className={styles.launcing_contest_underneath}>
                          <li>If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value).</li>
                          <li>By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale.</li>
                          <li>If you choose the Gold package or Platinum package and keep the contest as "Not Guaranteed", you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our <a href="google.com">Refund Policy</a> </li>
                       </ul></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>How math does it cost?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >
                        Our naming competitions start at $299, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our <a href="google.com">Pricing Page</a> for details</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>I need both a Name and a Logo. Do you offer any discount for multyple contest?<i className="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p>Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our <a href="google.com">Pricing Page.</a></p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>What if I want to keep my business idea private?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Can you serve customers outside the US?<i className="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p >Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.</p></div></li>
                        <li onClick={(e) => onClickBtn(e)}><span className={styles.launcing_contest_btn}>Can I see any examples?<i className="fa  fa-arrow-right"></i></span><div className={styles.hiden}><p >Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.</p> 
                        <ul className={styles.launcing_contest_underneath}>
                          <li><a href="google.com">Name Examples</a></li>
                          <li><a href="google.com">Tagline Examples</a></li>
                          <li><a href="google.com">Logo Examples</a></li>
                       </ul>
                        </div>
                          </li>
                            </ul>
                            
                             <article className={styles.info_block}>
                             <h3>Buying From Marketplace</h3>
                            <ul ref={toggleTwo} className={styles.launcing_contest_content_lists}>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>What's included with a Domain Purchase?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >When you purchase a domain from our premium domain marketplace, you will receive the exact match .com URL, a complimentary logo design (along with all source files), as well as a complimentary Trademark report and Audience Testing if you’re interested in validating your name.</p> </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How does the Domain transfer process work?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >Once you purchase a Domain, our transfer specialists will reach out to you (typically on the same business day). In most cases we can transfer the domain to your preferred registrar (such as GoDaddy). Once we confirm the transfer details with you, the transfers are typically initiated to your account within 1 business day.</p> </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>If I purchase a Domain on installments, can I start using it to setup my website?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >We offer payment plans for many domains in our Marketplace. If you purchase a domain on a payment plan, we hold the domain in an Escrow account until it is fully paid off. However our team can assist you with making any changes to the domains (such as Nameserver changes), so that you can start using the domain right away after making your first installment payment.</p> </div>
                            </li>
                            </ul>
                             </article>
                          
                            <article className={styles.info_block}>
                            <h3>Managed Contests</h3>
                            <ul ref={toggleTwo} className={styles.launcing_contest_content_lists}>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>What are Managed Contests?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >The 'Managed' option is a fully managed service by Squadhelp Branding experts. It includes a formal brief preparation by Squadhelp team and management of your contest. Managed Contests are a great fit for companies that are looking for an "Agency" like experience and they do not want to manage the contest directly.
                             Our branding team has directly managed hundreds of branding projects and has learned several best practices that lead to successful project outcomes. Our team will apply all best practices towards the management of your branding project.
                             Learn more about our <a href="google.com">Managed Contest Service</a></p></div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>HWhat's a typical timeline for a Managed Contest?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >The overall process takes 12-13 days.</p> 
                            <ul className={styles.launcing_contest_underneath}>
                              <li>The Managed projects start with a project kick-off call with your Branding Consultant. You can schedule this call online immediately after making your payment.</li>
                              <li>After your kick-off call, the Branding consultant will write your project brief and send for your approval within 1 business day</li>
                              <li>Upon your approval, the contest will go live. The branding consultant will help manage your project throughout the brainstorming phase (typically 5 days).</li>
                              <li>Upon the completion of brainstorming phase, the branding consultant will work with you to test the top 6 names from your Shortlist (3-5 Days). In addition, the branding consultant will coordinate the detailed Trademark screening (1-3 days)</li>
                           </ul>
                            </div>
                             </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How much do Managed Contests cost?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p>We offer two levels of Managed Contests. Standard ($1499) and Enterprise ($2999). The Enterprise managed contest includes:</p> 
                            <ul className={styles.launcing_contest_underneath}>
                              <li>(1) a $500 award amount (instead of $300), which will attract our top Creatives and provide more options to choose from;</li>
                              <li>(2) we will ensure a senior member of our branding team is assigned to your project and the branding team will invest about 3X more time in the day-to-day management of your project;</li>
                              <li>(3) you will receive more high-end trademark report and 5X more responses for your audience test.</li>
                              <li>Here is a link to our <a href="google.com">Pricing page</a> with a detailed comparison of the two packages.</li>
                           </ul>
                            </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>Where are the Branding Consultants located?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >All our branding consultants are based in in our Headquarters (Hoffman Estates, IL). Our branding consultants have many years of experience in managing hundreds of branding projects for companies ranging from early stage startups to Fortune 500 corporations.</p> </div>
                            </li>
                            </ul>
                            </article>
                          
                            <article className={styles.info_block}>
                            <h3>For Creatives</h3>
                            <ul ref={toggleTwo} className={styles.launcing_contest_content_lists}>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>Can anyone join your platform?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >We are open to anyone to signup. However, we have an extensive <a href="google.com">"Quality Scoring"</a>  process which ensures that high quality creatives have the ability to continue to participate in the platform. On the other hand, we limit the participation from those creatives who do not consistently receive high ratings.</p></div>
                            </li>
                            
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>Can I start participating immediately upon signing up?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p>When you initially signup, you are assigned few contests to assess your overall quality of submissions. Based upon the quality of your submissions, you will continue to be assigned additional contests. Once you have received enough high ratings on your submissions, your account will be upgraded to "Full Access", so that you can begin participating in all open contests.</p> 
                                </div>
                            </li>
                            <li  onClick={(e) => onClickBtn(e)}><span  className={styles.launcing_contest_btn}>How Do I Get Paid?<i className="fa  fa-arrow-right"></i></span> <div className={styles.hiden}><p >We handle creative payouts via Paypal or Payoneer. Depending upon your country of residence, we may require additional documentation to verify your identity as well as your Tax status.</p> </div>
                            </li>
                            </ul>
                            </article>
                    </article>
                    
                </div>
            </div>
        </section>
        <section className={styles.ready_to_start}>
                <div className={styles.container}>
                    <article className={styles.ready_to_start_content}>
                    <h3>Ready to get started?</h3>
                     <p>Fill out your contest brief and begin receiving custom name suggestions within minutes. </p>
                     <a href='google.com' className={styles.ready_to_start_btn}>Start A Contest</a>
                    </article>
                </div>
        </section>
        <section className={styles.rates_community}>
            <div className={styles.container}>
                <article className={styles.rates_community_content}> 
                <div className={styles.rates_community_content_item}>
                <i className="fa fa-star"></i>
                    <p><span>4.9 out of 5 stars</span> from 25,000+ customers.</p>
                </div>
                <div className={styles.rates_community_content_item}>
                <i className="fa fa-users"></i>
                    <p>Our branding community stands <span>200,000+</span> strong.</p>
                </div>
                <div className={styles.rates_community_content_item}>
                <i className="fa fa-file-code"></i>
                    <p> <span>140+ Industries</span> supported across more than <span>85 countries</span> – and counting.</p>
                </div>
                </article>
            </div>
        </section>
        <section className={styles.feedback}>
            <div className={styles.container}>
                <article className={styles.feedback_content}>
                    <div className={styles.feedback_content_suggestings}>
                          <div>
                          <h4>Pay a Fraction of cost vs hiring an agency</h4>
                          <p>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.</p>
                          </div>
                          <div>
                          <h4>Satisfaction Guarantee</h4>
                          <p>Of course! We have policies in place to ensure that you are satisfied with your experience.<a href="google.com"> Learn more</a></p>
                          </div>
                    </div>
                    <div className={styles.feedback_content_questions}>
                         <h4>Questions?</h4>
                         <p>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                         <button>Schedule Consultation</button>
                          <a href="google.com"><i className="fa  fa-phone"></i>(877) 355-3585 </a>
                         <span>Call us for assistance</span>
                    </div>
                </article>
            </div>
        </section>
        </>
    );
}

export default HowItWorkPage;
