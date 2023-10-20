import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getCanvasList } from "../../redux/canvas/canvasAction";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import Pagination from "../pagination/Pagination";
import { useFormState } from "react-hook-form";

function CanvasListBox(props) {
    const dispatch = useDispatch();
    const body = dispatch(getCanvasList());
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isClick, setIsClick] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(3);

    useEffect(()=>{
        const getData = () => {
            body.then((data)=>{
                setData(data.payload)
            })
        }
        getData();
    },[])

    const onClickHandler = (data) => {
        setIsClick(data);
    }

    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;    
    
    console.log("postsPerPage 값 찍어보기",postsPerPage);
    console.log("currentPage 값 찍어보기",currentPage);
    console.log("indexOfLast 값 찍어보기",indexOfLast);
    console.log("indexOfFirst 값 찍어보기",indexOfFirst);

    const currentPosts = (posts) => {
        if(data!=null) {
            let currentPosts = 0;
            console.log("posts 값 찍어보기 : ", posts)
    
            currentPosts = posts.slice(indexOfFirst,indexOfLast)
            console.log("currentPosts 값 찍어보기 : ", currentPosts)
            return currentPosts;
        }
    }


    let result = currentPosts(data);

    if(result&&result.length!=0) {
        return(
            <>
                {result.map(data=>(
                    <ListBox 
                    canvas = {data.id}
                    id = {data.id}
                    isClick = {isClick}
                    onClick={() => {{
                        onClickHandler(data.id);
                        props.setCanvas(data.id)}
                        }}>
                        <Text data={data} key={data.id}>title : {data.canvasTitle}</Text>
                    </ListBox>
                ))}
                <Post posts = {currentPosts(data)}></Post>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts = {data.length}
                    paginate = {setCurrentPage}
                ></Pagination>
            </>)
    } else {
        return(
            <ListBox>
                    <Text>방을 생성해 주세요</Text>
            </ListBox>
        )
    }
}


export default CanvasListBox;

const ListBox = styled.button`
    cursor: pointer;
    display : flex;
    margin : auto;
    margin-top : 50px;    
    border-radius : 20px;
    width : 60vw;
    height : 10vw;
    background-color : #FFFFFF; 
    border : ${({isClick, id}) => 
    isClick===id ? "solid 5px green" : "solid 1px #FFFFFF"
}
`

const Text = styled.div`
    padding : 60px;
    display : flex;
    justify-content : center;
    font-size:50px;
    color : #000000;
    font-family: Ink Free;
`

const Post = styled.div`
    display:flex;
`
