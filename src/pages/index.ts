import React from 'react'

const HomePage = React.lazy(() => import('./home/HomePage'))
const AboutPage = React.lazy(() => import('./about/AboutPage'))

export { AboutPage, HomePage }
