import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import Header from '../Header/Header';
import OfferBox from '../OfferBox/OfferBox';
import ModerateOffer from '../ModerateOffer/ModerateOffer';
import * as actionCreator from '../../actions/actionCreator'


class ModerateOffers extends Component {
    constructor(props) {
         super(props)
       
    }
        
    componentDidMount() {
       this.getData()
       
        }

     getData() {
        this.props.getContests({
            limit: null,
            offset: 0,
        })
        this.props.getUsers()
        this.props.getData()
     }

    componentWillUnmount() {
        this.props.clearContestsList()
    }

  


        needButtons() {
            console.log('button');
        }

        setOfferStatus = (creatorId, offerId, command, objContest) => {
            this.props.clearSetOfferStatusErrorDispatch()
             console.log(creatorId, offerId, command, objContest);
            const obj = {
                command,
                offerId,
                creatorId,
                orderId: objContest.orderId,
                priority: objContest.priority,
                contestId: objContest.id,
                userId: objContest.userId
              };        
             this.props.setOfferStatusDispatch(obj)
                          
        }




    render() { 
        const {contests, users, offersStore, offers} = this.props 
         console.log(offers);
           
            return (
              
                <Fragment>
                    <Header/>
                    
                <div style={{'width': '800px', 'height': '400px', 'backgroundColor': 'lightgray', margin: '0 auto'}}>
                    <ul>
                        { (offers.length && users.length && contests.length) ? offers.map((el) =>  {
                            el.User = users.find((user) => user.id === el.userId)
                            el.contestOffer = contests.find((contest) => contest.id === el.contestId)
                            return <OfferBox 
                            data={el}
                            key={el.id}
                            needButtons={this.needButtons}
                            setOfferStatus={this.setOfferStatus}
                            date={new Date()}
                            contestType={el.contestOffer.contestType}
                            />
                        }) : <p>Loading Offres</p> }
                          
                    </ul>
              
                </div>
                </Fragment>
              
            );
        
        }
}

const mapStateToProps = (state) => ({
    offers: state.contestByIdStore.allOffers,
    offersStore: state.contestByIdStore,
    users: state.userStore.users,
    contests: state.contestsList.contests
    }) 
const mapStateToDispatch = (dispatch) => ({
    getData: () => dispatch(actionCreator.getOffersRequest()),
    getUsers: () =>dispatch(actionCreator.getUsersRequest()),
    getContests: (data) => dispatch(actionCreator.getContestsForCreative(data)),
    setOfferStatusDispatch: (data) => dispatch(actionCreator.setOfferStatus(data)),
    clearContestsList: () => dispatch(actionCreator.clearContestList()),
    clearSetOfferStatusErrorDispatch: () => dispatch(actionCreator.clearSetOfferStatusError()),
    
   })

export default connect(mapStateToProps, mapStateToDispatch)(ModerateOffers);
