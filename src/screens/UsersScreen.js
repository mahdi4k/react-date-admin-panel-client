import React, {useEffect, useState} from 'react';
import Sidebar from "../components/Sidebar";
import {Col} from "react-bootstrap";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../css/user-dashboard.scss'
import UserList from "../components/UserList";
import UserPreview from "../components/UserPreview";
import ReactPaginate from 'react-paginate';
import Loader from "../components/Loader";
import {userData,arrayUserData} from "../services/EventService";

import Search from "../components/Search";

const UsersScreen = ({history}) => {
    const [userDetail, setUserDetail] = useState(false)
    const [api_token, setApitoken] = useState('')
    const [loading, setLoading] = useState(true)
    const [offset, setOffset] = useState(0);
    const [userBlockedOffset, setUserBlockedOffset] = useState(0);
    const [Userdata, setUserData] = useState([]);
    const [BlockedUser, setBlockedUser] = useState([]);
    const [AllUserdata, setAllUserData] = useState([]);
    const [perPage] = useState(5);
    const [pageCount, setPageCount] = useState(0)
    const [BlockedUserpageCount, setPageCountBlockedUser] = useState(0)
    const [searchCount, setSearchCount] = useState('')
    const [UserPreviewButtonActionID, setUserPreviewButtonActionID] = useState('')
    const [unblockTabUser,setUnblockTabUser]=useState(false)
    const [blockTabUser,setBlockTabUser]=useState(false)
    // getting unblocked Users
    useEffect(() => {
        if (localStorage.getItem('user_api') === null) {
            history.push('/login')
        }
        const api_token = JSON.parse(localStorage.getItem('user_api'))
        setApitoken(api_token)

        async function getUsersUnblocked() {
            try {

                const config = {
                    headers: {
                        Authorization: `Bearer ${api_token}`
                    }
                }

                const data = arrayUserData
                let userDataEvent = arrayUserData
                setUserData(userDataEvent)
                setAllUserData(userDataEvent)
                setPageCount(Math.ceil(data.length / perPage))
                if (UserPreviewButtonActionID) {
                    setUserData(Userdata.filter(el => el.id !== UserPreviewButtonActionID))
                }
                setLoading(false)

                //setUserActivityAction(UserActivity.data)
            } catch (error) {
                console.log(error)
                // error.response && setMessage(error.response.data.errors)
            }
        }

        getUsersUnblocked()
        console.log(Userdata)
    }, [UserPreviewButtonActionID, history, perPage, setUserData])

    // getting blocked users
    useEffect(() => {

        async function getBlockedUsers() {
            try {

                const config = {
                    headers: {
                        Authorization: `Bearer ${api_token}`
                    }
                }

                const {data} = userData

                setBlockedUser(arrayUserData)
                setPageCountBlockedUser(Math.ceil(data.length / perPage))
                if (UserPreviewButtonActionID) {

                    setBlockedUser(BlockedUser.filter(el => el.id !== UserPreviewButtonActionID))
                }

                //setUserActivityAction(UserActivity.data)
            } catch (error) {
                // console.log(error)
                // error.response && setMessage(error.response.data.errors)
            }
        }

        getBlockedUsers()

    }, [BlockedUser, UserPreviewButtonActionID, api_token, perPage])


    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(Math.ceil(selectedPage * perPage))
    };
    const BlockUserHandlePageClick = (e) => {
        const selectedPage = e.selected;
        setUserBlockedOffset(Math.ceil(selectedPage * perPage))
    };
    const unblockUser = ()=>{
        alert('clocked')
    }
    return (
        <>
            {loading ? <Loader/> :
                <div className='dashboard '>
                    <div className='d-flex'>
                        <Col className='pl-0' md={2}>
                            <Sidebar UserScreen/>
                        </Col>
                        <Col md={7}>
                            <div className="dashboard-users w3-animate-opacity pr-5 pl-5 pt-5 pb-2">

                                <Tabs>
                                    <TabList>
                                        <div className='align-items-center d-flex justify-content-between'>
                                            <div>
                                                <Tab onClick={()=>setUnblockTabUser(!unblockTabUser)} >Users</Tab>
                                                <Tab onClick={()=>setBlockTabUser(!blockTabUser)}>Blocked Users</Tab>
                                            </div>
                                            <li className='list-unstyled search-box'>
                                                <Search
                                                    setUserData={setUserData}
                                                    countPerPage={perPage}
                                                    setSearchCount={setSearchCount}
                                                    AllUserdata={AllUserdata}/>
                                            </li>
                                        </div>
                                    </TabList>

                                    <TabPanel>
                                        {
                                            Userdata.map(el => {

                                                return (
                                                    <UserList key={el.id}
                                                              api_token={api_token}
                                                              premium={el.premiumUntil}
                                                              username={el.username}
                                                              userImage={el.url}
                                                              email={el.email}
                                                              createdAt={el.createdAt}
                                                              userID={el.id}
                                                              blocked={false}
                                                              setUserDetail={setUserDetail}/>

                                                )
                                            })
                                        }
                                        <div className={searchCount > 2 ? 'd-none' : ''}>

                                            <ReactPaginate
                                                pageCount={pageCount}
                                                onPageChange={handlePageClick}
                                                containerClassName={"pagination"}
                                                subContainerClassName={"pages pagination"}
                                                activeClassName={"active"}/>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>

                                        {
                                            BlockedUser.map(el => {

                                                return (
                                                    <UserList key={el._id}
                                                              blocked={true}
                                                              api_token={api_token}
                                                              premium={el.premiumUntil}
                                                              username={el.username}
                                                              email={el.email}
                                                              userImage={el.url}
                                                              createdAt={el.createdAt}
                                                              userID={el._id}
                                                              setUserDetail={setUserDetail}/>

                                                )
                                            })
                                        }


                                        <ReactPaginate
                                            pageCount={BlockedUserpageCount}
                                            onPageChange={BlockUserHandlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}/>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </Col>
                        <Col className='bg-white' md={3}>
                            <div className=' right-side h-100 user-preview p-3'>

                                <UserPreview
                                    userButtonActionID={setUserPreviewButtonActionID}
                                    api_token={api_token}
                                    setUserDetail={setUserDetail}
                                    userDetail={userDetail}/>
                            </div>
                        </Col>
                    </div>

                </div>
            }
        </>


    );
};

export default UsersScreen;
