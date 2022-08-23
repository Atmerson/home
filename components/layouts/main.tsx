import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from "../navbar";
import {useRouter} from "next/router";

const Main = ({children}: any) =>
{
    const router = useRouter()
    return(
        <Box as = "main" pb={8}>
            <Head>
                <meta name={"viewport"} content="width=device-width, initial-scale=1"/>
                <title>Atmerson Atienza - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW={"container.md"} pb={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main