import axios from "axios";
// const apiClient =axios.create({
//     baseURL : `https://encounter.generalrouter.ir`,
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     }
// })
// export default apiClient

export const ADMIN = {
    email : 'admin@yahoo.com',
    password : '12345678'
} 
export  const packages =[
    {
        id:1,
        title:'package1',
        price:'222',
        offPackage:'22',
        planId:22,
        api_token:23,
        days:15
    },
    {
        id:12,
        title:'package2',
        price:'222',
        offPackage:'22',
        planId:22,
        api_token:323,
        days:14
    },
    {
        id:13,
        title:'package3',
        price:'222',
        offPackage:'22',
        planId:22,
        api_token:33,
        days:13
    },
    {
        id:14,
        title:'package4',
        price:'222',
        offPackage:'22',
        planId:22,
        api_token:60,
        days:12
    }
]
export const singleUser ={
    userCount : 5 ,
    likeCount :3 ,
    matchCount : 34,
    lastMonth : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
}
 export const userData = {
        url: 'https://picsum.photos/200/300?random=1',
        userCount : 5 ,
        likeCount :3 ,
        gender:'male',
     likeGiven:33,
        age:'22',
        matchCount : 34,
        lastMonth : '2020-11-13',
        matchCountLastMonth : 4,
        likeCountLastMonth : 66,
        userActivityAction :[
            {
                user1 :'mike',
                user2:'saeed',
                action : 'like'
            }
        ],
        userCountLastMonth : 51,
        userCountLastTwoMonth : 66,
        matchCountLastTwoMonth : 52,
        PremiumUserCountLastMonth : 87,
        PremiumUserLikeCountLastTwoMonth : 75,
        userCountLastWeek : 33,
        userCountLastTwoWeek :45,
        matchCountLastWeek : 32,
        matchCountLastTwoWeek : 34,
        PremiumUserCountLastWeek : 54,
        PremiumUserLikeCountLastTwoWeek : 54,
        userCountLastDay : 11,
        userCountLastTwoDay : 6,
        matchCountLastDay :4,
        matchCountLastTwoDay : 3,
        PremiumUserCountLastDay:2,
        PremiumUserLikeCountLastTwoDay :5,
 }
export const arrayUserData = [{
id:1,
    userCount : 5 ,
    url: 'https://picsum.photos/200/300?random=1',
    likeCount :3 ,
    matchCount : 34,
    username:'jhon',
    email:'jhon@yahoo.com',
    lastMonth : '2020-11-13',
    premiumFrom : '2020-11-13',
    premiumUntil : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
    userActivityAction :[
        {
            user1 :'mike',
            user2:'saeed',
            action : 'like'
        }
    ],
    userCountLastMonth : 51,
    userCountLastTwoMonth : 66,
    matchCountLastTwoMonth : 52,
    PremiumUserCountLastMonth : 87,
    PremiumUserLikeCountLastTwoMonth : 75,
    userCountLastWeek : 33,
    userCountLastTwoWeek :45,
    matchCountLastWeek : 32,
    matchCountLastTwoWeek : 34,
    PremiumUserCountLastWeek : 54,
    PremiumUserLikeCountLastTwoWeek : 54,
    userCountLastDay : 11,
    userCountLastTwoDay : 6,
    matchCountLastDay :4,
    matchCountLastTwoDay : 3,
    PremiumUserCountLastDay:2,
    PremiumUserLikeCountLastTwoDay :5,
},{
    id:12,
    userCount : 5 ,
    username:'alex',
    email:'alex@yahoo.com',
    url: 'https://picsum.photos/200/300?random=2',
    likeCount :3 ,
    matchCount : 34,
    lastMonth : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
    userActivityAction :[
        {
            user1 :'mike',
            user2:'saeed',
            action : 'like'
        }
    ],
    userCountLastMonth : 51,
    userCountLastTwoMonth : 66,
    matchCountLastTwoMonth : 52,
    PremiumUserCountLastMonth : 87,
    PremiumUserLikeCountLastTwoMonth : 75,
    userCountLastWeek : 33,
    userCountLastTwoWeek :45,
    matchCountLastWeek : 32,
    matchCountLastTwoWeek : 34,
    PremiumUserCountLastWeek : 54,
    PremiumUserLikeCountLastTwoWeek : 54,
    userCountLastDay : 11,
    userCountLastTwoDay : 6,
    matchCountLastDay :4,
    matchCountLastTwoDay : 3,
    PremiumUserCountLastDay:2,
    PremiumUserLikeCountLastTwoDay :5,
},{
    id:16,
    userCount : 5 ,
    url: 'https://picsum.photos/200/300?random=3',
    likeCount :3 ,
    username:'anna',
    email:'anna@yahoo.com',
    matchCount : 34,
    lastMonth : '2020-11-13',
    premiumFrom : '2020-11-13',
    premiumUntil : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
    userActivityAction :[
        {
            user1 :'mike',
            user2:'saeed',
            action : 'like'
        }
    ],
    userCountLastMonth : 51,
    userCountLastTwoMonth : 66,
    matchCountLastTwoMonth : 52,
    PremiumUserCountLastMonth : 87,
    PremiumUserLikeCountLastTwoMonth : 75,
    userCountLastWeek : 33,
    userCountLastTwoWeek :45,
    matchCountLastWeek : 32,
    matchCountLastTwoWeek : 34,
    PremiumUserCountLastWeek : 54,
    PremiumUserLikeCountLastTwoWeek : 54,
    userCountLastDay : 11,
    userCountLastTwoDay : 6,
    matchCountLastDay :4,
    matchCountLastTwoDay : 3,
    PremiumUserCountLastDay:2,
    PremiumUserLikeCountLastTwoDay :5,
},{
    id:77,
    userCount : 5 ,
    url: 'https://picsum.photos/200/300?random=4',
    likeCount :3 ,
    username:'mahdi',
    email:'mahdi@yahoo.com',
    matchCount : 34,
    lastMonth : '2020-11-13',
    premiumFrom : '2020-11-13',
    premiumUntil : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
    userActivityAction :[
        {
            user1 :'mike',
            user2:'saeed',
            action : 'like'
        }
    ],
    userCountLastMonth : 51,
    userCountLastTwoMonth : 66,
    matchCountLastTwoMonth : 52,
    PremiumUserCountLastMonth : 87,
    PremiumUserLikeCountLastTwoMonth : 75,
    userCountLastWeek : 33,
    userCountLastTwoWeek :45,
    matchCountLastWeek : 32,
    matchCountLastTwoWeek : 34,
    PremiumUserCountLastWeek : 54,
    PremiumUserLikeCountLastTwoWeek : 54,
    userCountLastDay : 11,
    userCountLastTwoDay : 6,
    matchCountLastDay :4,
    matchCountLastTwoDay : 3,
    PremiumUserCountLastDay:2,
    PremiumUserLikeCountLastTwoDay :5,
},{
    id:9,
    userCount : 5 ,
    url: 'https://picsum.photos/200/300?random=5',
    likeCount :3 ,
    username:'simba',
    email:'simba@yahoo.com',
    matchCount : 34,
    lastMonth : '2020-11-13',
    premiumFrom : '2020-11-13',
    premiumUntil : '2020-11-13',
    matchCountLastMonth : 4,
    likeCountLastMonth : 66,
    userActivityAction :[
        {
            user1 :'mike',
            user2:'saeed',
            action : 'like'
        }
    ],
    userCountLastMonth : 51,
    userCountLastTwoMonth : 66,
    matchCountLastTwoMonth : 52,
    PremiumUserCountLastMonth : 87,
    PremiumUserLikeCountLastTwoMonth : 75,
    userCountLastWeek : 33,
    userCountLastTwoWeek :45,
    matchCountLastWeek : 32,
    matchCountLastTwoWeek : 34,
    PremiumUserCountLastWeek : 54,
    PremiumUserLikeCountLastTwoWeek : 54,
    userCountLastDay : 11,
    userCountLastTwoDay : 6,
    matchCountLastDay :4,
    matchCountLastTwoDay : 3,
    PremiumUserCountLastDay:2,
    PremiumUserLikeCountLastTwoDay :5,
},]
 export const apiClient =[]