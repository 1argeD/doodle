
//쿠키를 json 형태로
const getAllcookie = () => {
    const cookies = document.cookie.split("; ");
    const cookieList = cookies.map(function (cookie) {
        const cookieRow = cookie.split("=");
        return cookieRow[0];
        });
        return cookieList;
}

//쿠키를 브라우저에 저장하는 함수
const setCookie = (name, value, expires = 1) => {
    let data = new Date();
    data.setTime(data.getTime() + expires * 24 * 3600 * 1000);  
    document.cookie = `${name} = ${value}; expires = ${date.toUTCString()};path=/;`
}

//쿠키 삭제
function deleteCookie(name) {
    setCookie(name, "", {
        "max-age" : -1,
    })
}

export { setCookie, deleteCookie, getAllcookie };