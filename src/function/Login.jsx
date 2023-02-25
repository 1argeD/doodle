import React from "react";
import styled from "styled-components";
import KakaoButton from "../components/element/button/KakaoButton";
import KakaoButton from "../components/element/button/KakaoButton";
import LoginBox from "../components/LoginBox"

const KakaoLogin = () => {
    const URI = {
        KAKAO_REST_API: Process.env.REACT_APP_KAKO_REST_API,
    };
    const CLIENT_ID = "";
    const CLIENT_ID2 = "";
    const REDIRECT_URI = "http://localhost:8080";
    const KAKAO_AUTH_URI = "";

    return (
        <a herf={KAKAO_AUTH_URI}>
            <KakaoButton />
        </a>
    );

};

const KakaoButton = styled(KakaoButton)`
    transition: "all 0.3s"
    `
