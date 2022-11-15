import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => {
<Box>
        <NextLink href="/projects">
            <Link>Projects</Link>
        </NextLink>
    <span>
        &nbsp;
            <ChevronRightIcon />
        &nbsp;
    </span>
    <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
        {children}
    </Heading>
</Box>
}

export const ProjectImage = ({ src, alt}) => (
    <Image 
    borderRadius="lg" 
    w="50px" 
    h="80px"
    src={src} 
    alt={alt}
    mb={4} />
)

export const Meta = ({children}) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)