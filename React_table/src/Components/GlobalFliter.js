// import React from 'react'

// function GlobalFliter({ filter, setFilter }) {
//     return (
//         <div>
//             Search :
//             <input value={filter || ""} onChange={(e) => setFilter(e.target.value)} />
//         </div>
//     )
// }

// export default GlobalFliter

import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table/dist/react-table.development'


function GlobalFliter({ filter, setFilter }) {
    const [value, setValue] = useState(filter)

    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    })

    return (
        <div>
            Search :
            <input value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }} />
        </div>
    )
}

export default GlobalFliter