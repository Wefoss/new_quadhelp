import React, { Component } from "react";
import CONSTANTS from "../../constants";
import Rating from "react-rating";
import { connect } from "react-redux";
import * as actionCreator from '../../actions/actionCreator'
import styles from '../../components/OfferBox/OfferBox.module.sass';
import classNames from 'classnames';
import { confirmAlert } from 'react-confirm-alert';

class ModerateOffer extends Component {
  constructor(props) {
    super(props);
 
  }


 resolveOffer() {
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
        //   onClick: () => this.props.setOfferStatus(props.data.User.id, props.data.id, 'resolve'),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  rejectOffer(){
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
        //   onClick: () => this.props.setOfferStatus(props.data.User.id, props.data.id, 'reject'),
        },
        {
          label: 'No',
        },
      ],
    });
  };

   offerStatus(status)  {
    
    if (status === CONSTANTS.OFFER_STATUS_REJECTED) {
      return <i className={classNames('fas fa-times-circle reject', styles.reject)} />;
    } if (status === CONSTANTS.OFFER_STATUS_WON) {
      return <i className={classNames('fas fa-check-circle resolve', styles.resolve)} />;
    }
    return null;
  };

 

  render() {
    const {data, currentUser, } = this.props
    const {firstName, lastName, email, rating} = currentUser
    
    
        return <div>
               <div className={styles.offerContainer}>
      {this.offerStatus(data.status)}
      <div className={styles.mainInfoContainer}>
        <div className={styles.userInfo}>
          <div className={styles.creativeInfoContainer}>
            <img
              src={currentUser.avatar === 'anon.png' ? CONSTANTS.ANONYM_IMAGE_PATH : `${CONSTANTS.publicURL}${data.avatar}`}
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
                        data.contestType === CONSTANTS.LOGO_CONTEST
                          ? (
                            <img
                              onClick={() => this.props.changeShowImage({ imagePath: data.fileName, isShowOnFull: true })}
                              className={styles.responseLogo}
                              src={`${CONSTANTS.publicURL}${data.fileName}`}
                              alt="logo"
                            />
                          )
                          : <span className={styles.response}>{data.text}</span>
                    }
         
          <Rating
            fractions={2}
            fullSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
            placeholderSymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star.png`} alt="star" />}
            emptySymbol={<img src={`${CONSTANTS.STATIC_IMAGES_PATH}star-outline.png`} alt="star" />}
            // onClick={changeMark}
            placeholderRating={data.mark}
          />
          
        </div>
      
      </div>
      {this.props.needButtons(data.status) && (
      <div className={styles.btnsContainer}>
        <div onClick={this.resolveOffer} className={styles.resolveBtn}>Resolve</div>
        <div onClick={this.rejectOffer} className={styles.rejectBtn}>Reject</div>
      </div>
      )}
    </div>
        </div>;
    }
    
  }

  const mapDispatchToProps = (dispatch) => ({
    
    changeShowImage: (data) => dispatch(actionCreator.changeShowImage(data)),
  });

export default  connect(null, mapDispatchToProps)(ModerateOffer);
