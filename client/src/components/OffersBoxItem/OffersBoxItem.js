import React from 'react';
import Rating from 'react-rating';
import CONSTANTS from '../../constants';
import styles from '../OfferBox/OfferBox.module.sass';
import { useSelector } from 'react-redux';

const OffersBoxItem = ({avatar, firstName, lastName, rating, offerStatus, email, contestType, data,
     role, goChat, id, changeMark, rejectOffer, resolveOffer, changeShowImage}) => {

       
        
    return (
        <>
            <div className={styles.offerContainer}>
      {offerStatus(data.status)}
      <div className={styles.mainInfoContainer}>
        <div className={styles.userInfo}>
          <div className={styles.creativeInfoContainer}>
            <img
              src={avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${avatar}`}
              alt="user"
            />
            <div className={styles.nameAndEmail}>
              <span>{`${firstName} ${lastName}`}</span>
              <span>{email}</span>
            </div>
          </div>
          <div className={styles.creativeRating}>
            <span className={styles.userScoreLabel}>Creative Rating </span>
            <Rating
              initialRating={rating}
              fractions={2}
              fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
              placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
              emptySymbol={(
                <img
                  src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`}
                  alt="star-outline"
                />
)}
              readonly
            />
          </div>
        </div>
        <div className={styles.responseConainer}>
          {
                        contestType === CONSTANTS.LOGO_CONTEST
                          ? (
                            <img
                              onClick={() => changeShowImage({ imagePath: data.fileName, isShowOnFull: true })}
                              className={styles.responseLogo}
                              src={`${CONSTANTS.publicURL}${data.fileName}`}
                              alt="logo"
                            />
                          )
                          : <span className={styles.response}>{data.text}</span>
                    }
          {data.User.id !== id  && (
          <Rating
            fractions={2}
            fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
            placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
            emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`} alt="star" />}
            onClick={changeMark}
            placeholderRating={data.mark}
          />
          )}
        </div>
        {(role !== CONSTANTS.CREATOR && goChat) && <i onClick={goChat} className="fas fa-comments" />}
      </div>
      {role === CONSTANTS.MODER && (
      <div className={styles.btnsContainer}>
        <div onClick={resolveOffer} className={styles.resolveBtn}>Resolve</div>
        <div onClick={rejectOffer} className={styles.rejectBtn}>Reject</div>
      </div>
      )}
    </div>
        </>
    );
}

export default OffersBoxItem;
