import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SideDiv from './leftDiv';
import RepositoryDiv from './right';
function MainBody() {
    const [data, setData] = useState({});

    useEffect(() => {
        axios("https://api.github.com/users/supreetsingh247").then((response) => {
            setData(response.data);
        }).catch(() => {
            setData({});
        })
    }, []);

    if (Object.keys(data).length) {
        return (
            <div id="main_body">
                <SideDiv info={data}/>
                <RepositoryDiv info={data}/>
            </div>
        );
    } else {
        return (
            <h1 align="center"></h1>
        );
    }
}

export default MainBody;
