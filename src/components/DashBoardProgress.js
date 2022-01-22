import React, {useEffect, useState} from 'react';
import {CircularProgressbarWithChildren, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ChangingProgressProvider from "./ChangingProgressProvider";
import {userData} from "../services/EventService";
import moment from "moment";

const DashBoardProgress = ({api_token}) => {

    const [percentProgress,setPercentProgress] = useState(Number)

    useEffect(()=>{

        try {

            async function progressPercent() {

                const config = {
                    headers: {
                        Authorization: `Bearer ${api_token}`
                    }
                }
                let lastMonth = moment().startOf('day').subtract(1, 'month').format('YYYY-MM-DD');

                const matchCountLastMonth = userData.matchCountLastMonth
                const likeCountLastMonth = userData.likeCountLastMonth
                 
                setPercentProgress((matchCountLastMonth.data  * 100) / likeCountLastMonth.data  )
            }

            progressPercent()

        }catch (e) {

        }

    },[api_token])

const percentage = Math.round(percentProgress) ;
return (
    <div className='custom-progressbar'>

        <ChangingProgressProvider values={[0, percentage]}>

            {percentage => (

                <CircularProgressbarWithChildren
                    value={33}
                    text={`${33}%`}
                    counterClockwise={true}
                    styles={buildStyles({
                        pathColor: `#04C694`,
                        textColor: '#131313',
                        trailColor: '#6A5DF5',

                    })}


                >
                    <p className='mt-5 pt-2 text-secondary'>Match meter</p>
                </CircularProgressbarWithChildren>

            )}

        </ChangingProgressProvider>
    </div>
);
}
;

export default DashBoardProgress;