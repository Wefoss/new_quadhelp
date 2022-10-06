import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import Header from '../Header/Header';
import OfferBox from '../OfferBox/OfferBox';
import ModerateOffer from '../ModerateOffer/ModerateOffer';
import * as actionCreator from '../../actions/actionCreator'


class ModerateOffers extends Component {
    constructor(props) {
         super(props)
         this.state = {
            reduildUsers: [],
            stateOffers: []
         }
    }
    
    
    componentDidMount() {
        this.props.getUsers()
        this.props.getData()
          }

          componentDidUpdate(prevProps, prevState) {
            if(prevProps !== this.props) {
             this.somemethpod(this.props.users)
             this.addOffersToState(this.props.offers)
            }
           }
           
           addOffersToState(items) {
            this.setState({stateOffers: items})
           }

           somemethpod(data) { 
        const users = data.reduce((acc, el) => {
             acc[el.id] = el
               return acc  
         }, {})
       this.setState({reduildUsers: users})
        }

        needButtons() {
            console.log('button');
        }
        setOfferStatus(userId, offerId, condition) {
            console.log(userId, offerId, condition);
        }


    render() { 
      const {reduildUsers, stateOffers} = this.state
      
            return (
              
                <Fragment>
                    <Header/>
                    
                <div style={{'width': '800px', 'height': '400px', 'backgroundColor': 'lightgray', margin: '0 auto'}}>
                    <ul>
                        { this.state.reduildUsers && stateOffers.map((el) =>  {
                               el.User = reduildUsers[el.userId]
                            return <OfferBox 
                            data={el}
                            key={el.id}
                            needButtons={this.needButtons}
                            setOfferStatus={this.setOfferStatus}
                            date={new Date()}
                            contestType={el.contestType}
                            />
                        })}
                          
                    </ul>
              
                </div>
                </Fragment>
              
            );
        
        }
}

const mapStateToProps = (state) => ({
    offers: state.contestByIdStore.allOffers,
    users: state.userStore.users,
    contestById: state.contestByIdStore
}) 
const mapStateToDispatch = (dispatch) => ({
    getData: () => dispatch(actionCreator.getOffersRequest()),
    getUsers: () =>dispatch(actionCreator.getUsersRequest())
   })

export default connect(mapStateToProps, mapStateToDispatch)(ModerateOffers);
