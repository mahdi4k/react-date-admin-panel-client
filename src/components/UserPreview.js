import React, {useEffect, useState} from 'react';
import DeleteModal from "./DeleteModal";
import {userData} from "../services/EventService";
import moment from "moment";
import {toast, ToastContainer} from "react-toastify";
import TimeAgo from 'react-timeago'
import Loader from "./Loader";

const UserPreview = ({userDetail, api_token, userButtonActionID, setUserDetail}) => {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(true)
    const [userInfo, setUserInfo] = useState('')
    const [likeGiven, setLikeGiven] = useState('')
    const [userActivity, setUserActivity] = useState('')
    const [deleteConfirm, setDeleteConfirm] = useState(false)

    useEffect(() => {
        if (userDetail) {
            setLoading(true)

            async function getuserDetails() {
                try {
                    const api_token = JSON.parse(localStorage.getItem('user_api'))
                    const config = {
                        headers: {
                            Authorization: `Bearer ${api_token}`
                        }
                    }

                    const data = userData
                    const LikeGiven = 8
                    const UserActivity =  3
                    setUserInfo(data)
                    setLikeGiven(LikeGiven.data)
                    setUserActivity(UserActivity.data)
                    setLoading(false)


                } catch (error) {
                    // console.log(error)
                    // error.response && setMessage(error.response.data.errors)
                }

            }

            getuserDetails()

        }
    }, [userDetail])

    useEffect(() => {
        if (deleteConfirm) {
            const DeleteUser = async () => {
                try {

                    const config = {
                        headers: {
                            Authorization: `Bearer ${api_token}`
                        }
                    }


                    userButtonActionID(userDetail.id)
                    setUserDetail(false)
                    toast.success("user deleted successfully");

                } catch (error) {
                    console.log(error)

                }

            }
            DeleteUser()
        }



    }, [deleteConfirm, api_token, userDetail, setUserDetail, userButtonActionID])


    const blockUser = async () => {
        try {

            const config = {
                headers: {
                    Authorization: `Bearer ${api_token}`
                }
            }


            userButtonActionID(userDetail.id)
            setUserDetail(false)
            toast.success("user blocked successfully");

        } catch (error) {
            toast.success("something wrong please try again")

        }
    };

    const UnblockUser = async (userID) => {
        try {

            const config = {
                headers: {
                    Authorization: `Bearer ${api_token}`
                }
            }


            userButtonActionID(userID)
            setUserDetail(false)
            toast.success("user unblocked successfully");

        } catch (error) {
            toast.success("something wrong please try again");

        }
    }

    const DeleteBoxShow = () => setShow(true);
    const checkUserDetail = (
        <>
            {(userDetail && loading) ? <Loader/> : (userDetail && !loading) ?
                <div>

                    <div className=' profile-preview p-3'>
                        <h5 className='font-weight-bold'>Profile Preview</h5>
                        <div className='preview-detail flex-column mt-5 align-items-center d-flex'>
                            <div className='mt-3 text-center'>
                                <img src={`${userInfo.url}`} alt=""/>
                                <p className='username mt-3'>
                                    {userInfo.username}
                                </p>
                                <p className='userEmail mb-3 mt-2'>
                                    {userDetail.email}
                                </p>
                            </div>
                            <div className='d-flex flex-column flex-xl-row preview-detail-box'>
                                <div className='box border-right'>
                                    <p className='sex font-weight-bold '>Gender</p>
                                    <p className='font-weight-light text-secondary'> {userInfo.gender}</p>
                                </div>
                                <div className='box border-right'>
                                    <p className='year font-weight-bold'>{userInfo.age}</p>
                                    <p className='font-weight-light text-secondary noWhiteSpace'>Years old</p>
                                </div>
                                <div className='box'>
                                    <p className='like font-weight-bold'>{likeGiven}</p>
                                    <p className='font-weight-light text-secondary noWhiteSpace'>Likes given</p>
                                </div>
                            </div>
                        </div>
                        <div className='userActivity'>
                            <div className="header-section d-flex   justify-content-between">
                                <h4 className='font-weight-bold'>Recent activities</h4>

                            </div>
                            <div className="userActivityList mt-4">

                                                <div key={1}
                                                     className="d-flex justify-content-between mb-4 align-items-center">
                                                    <div className="userActivityItem">
                                                        <img src="./img/sidebar/user.png" alt=""/>
                                                        <p className='ml-2'>
                                                            <span className='mr-2'>alex</span> matched with
                                                            <span className='ml-2'>anna</span>
                                                        </p>
                                                    </div>
                                                    <p className='times'>23 min ago</p>
                                                </div>
                                                <div key={2}
                                                     className="d-flex justify-content-between mb-4 align-items-center">
                                                    <div className="userActivityItem">
                                                        <img src="./img/sidebar/user.png" alt=""/>
                                                        <p className='ml-2'>
                                                            <span className='mr-2'>alex</span> matched with
                                                            <span className='ml-2'>anna</span>
                                                        </p>
                                                    </div>
                                                    <p className='times'>23 min ago</p>
                                                </div>
                                                <div key={3}
                                                     className="d-flex justify-content-between mb-4 align-items-center">
                                                    <div className="userActivityItem">
                                                        <img src="./img/sidebar/user.png" alt=""/>
                                                        <p className='ml-2'>
                                                            <span className='mr-2'>alex</span> matched with
                                                            <span className='ml-2'>anna</span>
                                                        </p>
                                                    </div>
                                                    <p className='times'>23 min ago</p>
                                                </div>

                            </div>
                            <div className='d-flex flex-column flex-xxl-row mt-3 justify-content-between'>
                                {
                                    userDetail.blocked ? <button onClick={() => UnblockUser(userDetail.id)} className='btn btn-userBlock mb-3 mb-xxl-0'>Unblock
                                    </button> : <button onClick={blockUser} className='btn btn-userBlock mb-3 mb-xxl-0'>Block
                                    </button>
                                }
                                <button onClick={DeleteBoxShow} className='btn btn-userDelete'>Delete</button>
                            </div>
                        </div>
                    </div>

                </div>
                :
                <div className='empty-profile-preview position-relative'>
                    <h3 className='font-weight-bold mt-5'>Profile Preview</h3>
                    <div>
                        <p>by clicking on each user its specific information shows up here</p>
                    </div>
                </div>
            }
        </>
    )


    return (
        <>
            {checkUserDetail}

            <ToastContainer/>
            <DeleteModal
                show={show}
                setDeleteConfirm={setDeleteConfirm}
                setShow={setShow}
                headerTitle={'Delete account'}
                subTitle={'Are you sure to permanently delete the account? you can’t undo this action'}
            />
        </>
    );
};

export default UserPreview;
