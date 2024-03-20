export const prod = {
    MODE: process.env.REACT_APP_ENV,
    TOKEN_KEY: process.env.REACT_APP_HASHMEMO_TOKEN,
    BASE_URL: process.env.PROJECT_CHATDEV_API,
    // FTP_URL: process.env.REACT_APP_FTP_URL || 'https://hashmemo.s3.ap-northeast-1.amazonaws.com/',
    // DEFAULT_HASHTAG_IMG: process.env.REACT_APP_HASHTAG_PROFILE,
    // DEFAULT_PROFILE_IMG: process.env.REACT_APP_USER_PROFILE || 'profileImage/WvvU2PKhzD',
    // DEFAULT_POST_IMG: process.env.REACT_APP_EMPTY_POST_IMG || 'postMedia/Lm5wvQ18PD'
}