import Head from 'next/head'

const Index = (props) => {

    return (<>
        <Head>
            <title>Beautiful, high quality carpets | CarpetCity</title>
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.0-beta.3/default/snipcart.css" />
        </Head>
        <h1>Página Inicial</h1>
    </>)
};

Index.getInitialProps = async () => {
    return {
        products: []
    }
}
export default Index;