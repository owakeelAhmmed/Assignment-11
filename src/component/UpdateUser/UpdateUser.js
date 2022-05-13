import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        
        fetch(`http://localhost:4000/user/${id}`)
        .then(response => response.json())
        .then(data => console.log(data))
    }, []);

    return (
        <div className="up-cont ">
            <h1 className='mt-5'>hello user: { user.name }</h1>
        </div>
    );
};

export default UpdateUser;