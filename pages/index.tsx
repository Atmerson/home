import type {NextPage} from 'next'
import {Container, Box, Heading} from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <Container>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant={"page-title"}>
                        Atmerson Atienza
                    </Heading>
                    <p>(Software Engineer / Graduate Student)</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Home
