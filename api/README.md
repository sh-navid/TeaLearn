# API
## Concepts
- [Auth with sanctum](concepts/SANCTUM.md)
    - [Token Abilities](concepts/SANCTUM_Token_Abilities.md)
- [Auth with passport](concepts/PASSPORT.md)
    - Refresh Token
        >> When an access token expires, a refresh token can be used to get a new access token without entering login credentials again. Refresh token rotation is a technique to secure refresh tokens. When a new access token is requested with the refresh token, a new refresh token is also returned and the old one is invalidated. <sup>[logrocket](https://blog.logrocket.com/persistent-login-in-react-using-refresh-token-rotation/)</sup>
    - Token Expire Date
- OAuth2
    - CLIENT_ID
    - CLIENT_SECRET
- JWT
- RSA

## Examples
- [Captcha API](examples/README.md)
- [Auto Complete](examples/AUTO_COMPLETE.md)
- JQ Ajax Call
- Fetch Call
- [Laravel + ReactJS](projects/LaravelReact/README.md)
