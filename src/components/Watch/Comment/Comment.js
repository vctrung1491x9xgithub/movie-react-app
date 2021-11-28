
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { CommentContent, CommentWrapper, Content, Info, Time, CommentControl, CommentInput, Control, Button } from './Comment.styles';


const Comment = ({ id }) => {
    const [currentComment, setCurrentComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const onSubmitForm = (e) => {
        e.preventDefault();
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const dateFormat = `${hour}:${minute} ${day}/${month}/${year}`;
        let comment = 
            {
                id: uuidv4(),
                idMovie: id,
                content: currentComment,
                time: dateFormat
            }
        let newComment = [...commentList];
        newComment.push(comment);
        setCommentList(newComment);
        setCurrentComment("");
        localStorage.setItem('comment', JSON.stringify(newComment)); 
    }
    useEffect(() => {
        if (localStorage && localStorage.getItem('comment')) {
            setCommentList(JSON.parse(localStorage.getItem('comment')));
        }
    }, []);

    const renderComment = () => {
        if (commentList.length > 0) {
            let xhtml = null;
            let commentOfMovie = commentList.filter(x => x.idMovie === id);
            xhtml = commentOfMovie?.map(x => {
                return (
                    <CommentContent key={x.id}>
                        <Info>
                        Incognito
                        </Info>
                        <Content>
                            {x.content}
                        </Content>
                        <Time>
                            {x.time}
                        </Time>
                    </CommentContent>
                )
            })
            return xhtml;
        }
    }
    return (
        <CommentWrapper>
            <p>Comment</p>
            <CommentControl onSubmit={(e) => onSubmitForm(e)}>
                <CommentInput
                    placeholder="Enter your comment"
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                />
                <Control>
                    <Button type="submit" >Send</Button>
                </Control>
            </CommentControl>
            {
                renderComment()
            }

        </CommentWrapper>
    )
}

export default Comment
