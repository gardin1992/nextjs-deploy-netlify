import Head from 'next/head'
import { config } from '../../../config'

const Metatag = ({
    title,
    description,
    metatags = [],
}) => {

    return <Head>
        <title>{title} | {config.APP_NAME}</title>
        <meta name="description" content={description} />
        {metatags.map((tag, k) => <meta key={k} {...tag} />)}
    </Head>
}

export default Metatag