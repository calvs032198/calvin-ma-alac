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
    profile: '../../src/assets/images/profile.jpg',
    toga: '../../src/assets/images/toga.jpg',
    hooli:'../assets/images/hooli.jpeg',
    logo: {
        mySql: '../../src/assets/images/mysql-logo.png',
        js: '../../src/assets/images/js-logo.png',
        java: '../../src/assets/images/java-logo.png',
        mui: '../../src/assets/images/mui-logo.webp',
        reactQuery: '../../src/assets/images/react-query.png',
        react: '../../src/assets/images/react-logo.webp',
        typeScript: '../../src/assets/images/typescript.png',
        spring: '../../src/assets/images/spring-logo.png',
        tailwind: '../../src/assets/images/Tailwind_CSS_Logo.svg.png',
        node: '../../src/assets/images/node-logo.png',
    } as logoType,
}
export const logoAsArray = Object.keys(images.logo).map(
    (item) => images.logo[item as keyof logoType]
)
export const docs = {
    resume: '../../public/cv_calvs.pdf',
}
