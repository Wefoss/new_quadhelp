import React from 'react';
import { connect } from 'react-redux';
import Rating from 'react-rating';
import { withRouter } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import classNames from 'classnames';
import { confirmAlert } from 'react-confirm-alert';
import {
  changeMark,
  clearChangeMarkError,
  goToExpandedDialog,
  changeShowImage,
  // changeModalShow,
} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import styles from './OfferBox.module.sass';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './confirmStyle.css';
import OffersBoxItem from '../OffersBoxItem/OffersBoxItem';

const OfferBox = (props) => {
  const findConversationInfo = () => {
    const { messagesPreview, id } = props;
    const participants = [id, props.data.User.id];
    participants.sort((participant1, participant2) => participant1 - participant2);
    for (let i = 0; i < messagesPreview.length; i++) {
      if (isEqual(participants, messagesPreview[i].participants)) {
        return {
          participants: messagesPreview[i].participants,
          _id: messagesPreview[i]._id,
          blackList: messagesPreview[i].blackList,
          favoriteList: messagesPreview[i].favoriteList,
        };
      }
    }
    return null;
  };

  const resolveOffer = () => {
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.setOfferStatus(props.data.User.id, props.data.id, 'resolve'),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  const rejectOffer = () => {
    confirmAlert({
      title: 'confirm',
      message: 'Are u sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => props.setOfferStatus(props.data.User.id, props.data.id, 'reject'),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  const changeMark = (value) => {
    props.clearError();
    props.changeMark({
      mark: value,
      offerId: props.data.id,
      isFirst: !props.data.mark,
      creatorId: props.data.User.id,
    });
  };

  const offerStatus = (status) => {
    
    if (status === CONSTANTS.OFFER_STATUS_REJECTED) {
      return <i className={classNames('fas fa-times-circle reject', styles.reject)} />;
    } if (status === CONSTANTS.OFFER_STATUS_WON) {
      return <i className={classNames('fas fa-check-circle resolve', styles.resolve)} />;
    }
    return null;
  };

  const needButtons = () => {
    console.log('need button');
  }

  const goChat = () => {
    props.goToExpandedDialog({ interlocutor: props.data.User, conversationData: findConversationInfo() });
  };


  const {
    data, role, id, contestType,
  } = props;
  const {
    avatar, firstName, lastName, email, rating,
  } = props.data.User;


  return (
    <OffersBoxItem  
     
      avatar={avatar}
      data={data}
      role={role}
      id={id}
      contestType={contestType}
      firstName={firstName}
      lastName={lastName}
      email={email}
      rating={rating}
      offerStatus={offerStatus}
      changeMark={changeMark}
      rejectOffer={rejectOffer}
      resolveOffer={resolveOffer}
      needButtons={needButtons}
      changeShowImage={props.changeShowImage}
    />
    
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeMark: (data) => dispatch(changeMark(data)),
  clearError: () => dispatch(clearChangeMarkError()),
  goToExpandedDialog: (data) => dispatch(goToExpandedDialog(data)),
  changeShowImage: (data) => dispatch(changeShowImage(data)),
});

const mapStateToProps = (state) => {
  const { changeMarkError, isShowModal } = state.contestByIdStore;
  const { messagesPreview } = state.chatStore;
  if(state.userStore.data) {
    const {  role, id } = state.userStore.data;
    return {
      changeMarkError, role, id,  messagesPreview, isShowModal,
    };
  }
  
 
 
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OfferBox));
