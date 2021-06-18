
import React, { useState, useEffect }　from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import MainTable from '../components/MainTable';
import axios from 'axios';
import PostForm from '../components/PostForm'

const useStyles = makeStyles((theme) => createStyles({
    card: {
        margin: theme.spacing(5),
        padding: theme.spacing(3),
    },
}));

//ヘッダーのコンテンツ用の配列定義
const headerList = ['名前', 'タスク内容', '編集', '完了'];

let rows = [
    {
        name: "モーリー",
        content: "肩トレ",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },{
        name: "ドンキーコング",
        content: "バナナ補給",
        editBtn: <Button color="secondary" variant="contained">編集</Button>,
        deleteBtn: <Button color="primary" variant="contained">完了</Button>,
    },
];

function Home() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        content: ''
    });

    useEffect(() => {
        getPostsData();
    }, []);

    const getPostsData = () => {
        axios
        .get('api/posts')
        .then(response => {
            setPosts(response.data);
            console.log(response.data);
        })
        .catch(() => {
            console.log('通信に失敗しました');
        });
    }

    const createPost = async() => {
        if (formData == '') {
            return;
        }

        await axios
            .post('/api/post/create', {
                name: formData.name,
                content: formData.content
            })
            .then((res) => {
                const tempPost = posts
                tempPost.push(res.data);
                setPosts(tempPost);
                setFormData('');
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const inputChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        formData[key] = value;
        let data = Object.assign({}, formData);
        setFormData(data);
    }

    let rows = [];
    posts.map((post) => {
        rows.push({
            name: post.name,
            content: post.content,
            editBtn: <Button color="secondary" variant="contained">編集</Button>,
            deleteBtn: <Button color="primary" variant="contained">完了</Button>,
        });
    });

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="card">
                        <h1>タスク管理</h1>
                        <Card className={classes.card}>
                            <PostForm data={formData} btnFunc={createPost} inputChange={inputChange}/>
                        </Card>
                        <Card className={classes.card}>
                            {/* テーブル部分の定義 */}
                            <MainTable headerList={headerList} rows={rows} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
