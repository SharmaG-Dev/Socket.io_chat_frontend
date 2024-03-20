interface ApisProps {
  LOGIN_API: string;
  SINGUP_API: string;
  ME_API: string;
}

export const Api: ApisProps = {
  LOGIN_API: "/api/auth/log-in",
  SINGUP_API: "/api/auth/create",
  ME_API: "/api/user/me"
};
