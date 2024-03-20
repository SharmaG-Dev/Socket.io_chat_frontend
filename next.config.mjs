/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PROJECT_DEVCHAT_APP_ENV: "development",
        MODE: "production",
        PROJECT_CHATDEV_TOKEN: "devchat-indent",
        PROJECT_CHATDEV_API: "https://socket-io-chat-backend.onrender.com"
    }
};

export default nextConfig;
