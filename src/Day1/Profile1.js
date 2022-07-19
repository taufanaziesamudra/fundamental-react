import React from 'react'
const Profile1 = (props) => {
    return (
        <div>
            Nama: {props.name}
            <br />
            Kegiatan: {props.kegiatan}
            <br />
            hobby: {props.hobby}
        </div>
    )
}

export default Profile1