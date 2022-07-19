import React, { useState } from 'react'
import Profile1 from './Profile1'
// import Profile1 from './Profile1'

const Profile = () => {
    const [state, setState] = useState({
        name: "Taufan Ajie Samudro",
        kegiatan: "Jadi Budak Korporat",
        hobby: "Kadang semangat ngoding dan kadang males ngoding"
    })
    const [isToggle, setToggle] = useState(false)
    return (
        <div>
            <button onClick={() => setToggle(!isToggle)}>Toggle</button>
            {isToggle && <Profile1 name={state.name} kegiatan={state.kegiatan} hobby={state.hobby} />}
        </div>
    )
}

export default Profile