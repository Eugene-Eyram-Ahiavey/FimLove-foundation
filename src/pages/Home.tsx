import { Helmet } from 'react-helmet-async'

import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import OurApproach from '../components/OurApproach'
import ClimaxCTA from '../components/ClimaxCTA'
import ScrollReveal from '../components/ScrollReveal'


export default function Home() {


    return (
        <>
            <Helmet>
                <title>FirmLove Foundation — Spreading Love, Bringing Hope</title>
                <meta name="description" content="FirmLove Foundation is a beacon of hope, dedicated to restoring dignity to the marginalized by providing essential humanitarian aid and educational opportunities." />
            </Helmet>

            {/* Hero & Impact Bridge */}
            <Hero />
            <ImpactStats />

            {/* Our Approach */}
            <OurApproach />


            {/* Mission Statement Scroll Reveal */}
            <ScrollReveal />

            {/* Climax CTA */}
            <ClimaxCTA />
        </>
    )
}
