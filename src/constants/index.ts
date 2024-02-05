import profile from '../../src/assets/images/profile.jpg'
import toga from '../../src/assets/images/toga.jpg'
import hooli from '../../src/assets/images/hooli.jpeg'
import rp from '../../src/assets/images/rp-logo.png'
import mySql from '../../src/assets/images/mysql-logo.png'
import js from '../../src/assets/images/js-logo.png'
import java from '../../src/assets/images/java-logo.png'
import mui from '../../src/assets/images/mui-logo.webp'
import reactQuery from '../../src/assets/images/react-query.png'
import react from '../../src/assets/images/react-logo.webp'
import typeScript from '../../src/assets/images/typescript.png'
import spring from '../../src/assets/images/spring-logo.png'
import tailwind from '../assets/images/tailwind-logo.png'
import node from '../../src/assets/images/node-logo.png'
import calvsLogo from '../../src/assets/images/calvin-logo.png'

import resume from '../../public/cv_calvs.pdf'
import bit from '../../public/js-bit.png'
import pl from '../../public/pl.pdf'
import dl from '../../public/dl.pdf'
import aws from '../../public/aws.pdf'
import blending from '../../public/blending.pdf'
import gmaps from '../../public/googlemaps.pdf'
import iT from '../../public/it-carrer.jpg'
import journey from '../../public/journey.png'
import jsEs6 from '../../public/js-es6.pdf'
import keeping from '../../public/keeping-htm.pdf'

type logoType = {
    mySql: string
    js: string
    java: string
    mui: string
    reactQuery: string
    react: string
    typeScript: string
    spring: string
    tailwind: string
    node: string
}
export const images = {
    profile,
    calvsLogo,
    toga,
    hooli,
    rp,
    logo: {
        mySql,
        js,
        java,
        mui,
        reactQuery,
        react,
        typeScript,
        spring,
        tailwind,
        node,
    } as logoType,
}
export const logoAsArray = Object.keys(images.logo).map(
    (item) => images.logo[item as keyof logoType]
)
type certs = {
    bit: string
    pl: string
    dl: string
    aws: string
    blending: string
    gmaps: string
    iT: string
    journey: string
    jsEs6: string
    keeping: string
}
export const docs = {
    resume,
    certificates: {
        bit,
        pl,
        dl,
        aws,
        blending,
        gmaps,
        iT,
        journey,
        jsEs6,
        keeping,
    } as certs,
}
export const certificatesArray = Object.keys(docs.certificates).map(
    (key) => docs.certificates[key as keyof certs]
)
