import React, {useEffect, useState} from 'react';
import {userData} from "../services/EventService";
import moment from "moment";
import Loader from "./Loader";

const HomeDashboardBoxes = ({api_token, ActivityFilter}) => {
    const [percentUser, setPercentUser] = useState(Number)
    const [percentMatchUser, setPercentMatchUser] = useState(Number)
    const [percentPremiumUser, setPercentPremiumUser] = useState(Number)

    const [User, setUser] = useState(Number)
    const [MatchUser, setMatchUser] = useState(Number)
    const [PremiumUser, setPremiumUser] = useState(Number)
    const [activityName, setActivityName] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        async function getUsersDetail() {
            try {
                setLoading(false)
                const config = {
                    headers: {
                        Authorization: `Bearer ${api_token}`
                    }
                }
                switch (ActivityFilter) {
                    case 'last month':
                        let lastMonth = moment().startOf('day').subtract(1, 'month').format('YYYY-MM-DD');
                        let lastTwoMonth = moment().startOf('day').subtract(2, 'month').format('YYYY-MM-DD');

                        //user count percent
                        const userCountLastMonth = userData.userCountLastMonth
                        const userCountLastTwoMonth = userData.userCountLastTwoMonth

                        //match user count percent
                        const matchCountLastMonth = userData.matchCountLastMonth
                        const matchCountLastTwoMonth = userData.matchCountLastTwoMonth

                        //like user count percent
                        const PremiumUserCountLastMonth = userData.PremiumUserCountLastMonth
                        const PremiumUserLikeCountLastTwoMonth = userData.PremiumUserLikeCountLastTwoMonth


                        setPercentUser(32)
                        setPercentMatchUser(43)
                        setPercentPremiumUser(66)

                        setUser(33)
                        setMatchUser(matchCountLastMonth.data)
                        setPremiumUser(PremiumUserCountLastMonth.data)
                        setActivityName('than last month')
                        break;
                    case 'this week':
                        let lastWeek = moment().startOf('day').subtract(1, 'week').format('YYYY-MM-DD');
                        let lastTwoWeek = moment().startOf('day').subtract(2, 'week').format('YYYY-MM-DD');

                        //user count percent
                        const userCountLastWeek = userData.userCountLastWeek
                        const userCountLastTwoWeek = userData.userCountLastTwoWeek

                        //match user count percent
                        const matchCountLastWeek = userData.matchCountLastWeek
                        const matchCountLastTwoWeek = userData.matchCountLastTwoWeek

                        //like user count percent
                        const PremiumUserCountLastWeek = userData.PremiumUserCountLastWeek
                        const PremiumUserLikeCountLastTwoWeek =  userData.PremiumUserLikeCountLastTwoWeek


                        setPercentUser(8)
                        setPercentMatchUser(7)
                        setPercentPremiumUser(9)

                        setUser(43)
                        setMatchUser(7)
                        setPremiumUser(5)
                        setActivityName('than last week')
                        break;
                    case 'today':

                        let lastDay = moment().startOf('day').subtract(1, 'day').format('YYYY-MM-DD');
                        let lastTwoDay = moment().startOf('day').subtract(2, 'day').format('YYYY-MM-DD');

                        //user count percent
                        const userCountLastDay = userData.userCountLastDay
                        const userCountLastTwoDay = userData.userCountLastTwoDay

                        //match user count percent
                        const matchCountLastDay = userData.matchCountLastDay
                        const matchCountLastTwoDay = userData.matchCountLastTwoDay

                        //like user count percent
                        const PremiumUserCountLastDay = userData.PremiumUserCountLastDay
                        const PremiumUserLikeCountLastTwoDay = userData.PremiumUserLikeCountLastTwoDay


                        setPercentUser(3)
                        setPercentMatchUser(4)
                        setPercentPremiumUser(44)

                        setUser(75)
                        setMatchUser(5)
                        setPremiumUser(3)
                        setActivityName('than yesterday')
                        break;

                }

                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        }

        getUsersDetail()
    }, [api_token, ActivityFilter,setUser,setLoading,setActivityName, setMatchUser,setLoading,setPremiumUser,setPercentUser,setPercentMatchUser,setPercentPremiumUser])

    return (
        <>
            <div className='home-box flex-wrap flex-xxl-nowrap justify-content-between d-flex'>
                <div className='box mb-3 mb-xxl-0 col-12 col-xxl-4 p-4'>
                    <div className="header-box d-flex align-items-center">
                                        <span className='user-box p-3'>
                                          <img className='users-icon' src="./img/sidebar/fr-users.svg" alt=""/>
                                        </span>
                        <p className='mb-0 font-weight-bold ml-3'>TOTAL USERS</p>
                    </div>
                    {loading ? <Loader/> :
                        <>
                            <div className="numberUser">
                                <p>22</p>
                            </div>

                            <div className="footer-box d-flex">
                               <img className='users-icon mr-2' src="./img/arrow-up.svg" alt=""/>
                                <p className={'percent upPercent'}>%</p>
                                <p> than last month</p>
                            </div>
                        </>

                    }
                </div>

                <div className='box mb-3 mb-xxl-0 col-12 col-xxl-4 p-4'>

                    <div className="header-box d-flex align-items-center">
                                        <span className='match-box '>
                                           <i className='far fa-heart '></i>
                                        </span>
                        <p className='mb-0 ml-3 font-weight-bold'>MATCH USERS</p>
                    </div>
                    {loading ? <Loader/> :
                        <>
                            <div className="numberUser">
                                <p>31</p>
                            </div>

                            <div className="footer-box d-flex">
                                {percentMatchUser > 0 ?
                                    <img className='users-icon mr-2' src="./img/arrow-up.svg" alt=""/> :
                                    <img className='users-icon mr-2' src="./img/arrow-dwon.svg" alt=""/>}
                                <p className={percentMatchUser > 0 ? 'percent upPercent' : 'percent downPercent'}>{isNaN(percentMatchUser) ? 0 : Math.round(percentMatchUser)}%</p>
                                <p> {activityName}</p>
                            </div>
                        </>
                    }
                </div>

                <div className='box mb-3 mb-xxl-0 col-12 col-xxl-4 p-4'>
                    <div className="header-box d-flex align-items-center">
                                        <span className='crown-box p-3'>
                                            <img className='crown-icon' src="./img/sidebar/fr-crown.svg" alt=""/>
                                        </span>
                        <p className='mb-0 ml-3 font-weight-bold'>PREMIUM USERS</p>
                    </div>
                    {loading ? <Loader/> :
                        <>
                            <div className="numberUser">
                                <p>65</p>
                            </div>

                            <div className="footer-box d-flex">
                                {percentPremiumUser > 0 ?
                                    <img className='users-icon mr-2' src="./img/arrow-up.svg" alt=""/> :
                                    <img className='users-icon mr-2' src="./img/arrow-dwon.svg" alt=""/>}
                                <p className={percentPremiumUser > 0 ? 'percent upPercent' : 'percent downPercent'}>{isNaN(percentPremiumUser) ? 0 : Math.round(percentPremiumUser)}%</p>
                                <p>  {activityName}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default HomeDashboardBoxes;