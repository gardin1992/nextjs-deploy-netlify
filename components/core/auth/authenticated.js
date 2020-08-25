import { useEffect } from 'react'
import { withRouter } from 'next/router'

import cookiesStore from '../../core/helpers/cookie'
import { config } from '../../config'

function Authenticated({ router, children }) {

    useEffect(() => {

        if (!cookiesStore.get(config.TOKEN_KEY))
            router.push('/login');

    }, [])
    return (<>

        {children}
    </>)
}

export default withRouter(Authenticated)