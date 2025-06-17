import React from 'react'
import {Button} from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from '@/components/CompanionsList';
import CTA from "@/components/CTA";
import {recentSessions} from "@/constants";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>

        <section className="home-section">
            <CompanionCard
            id="123"
            name="Science"
            topic="Environment"
            subject="Animals"
            duration="25"
            color="#BBCEA8"
            />
            <CompanionCard
            id="124"
            name="Maths"
            topic="Algebra"
            subject="Intergration"
            duration="25"
            color="#FF220C"
            />
            <CompanionCard
            id="125"
            name="English"
            topic="Literature"
            subject="Poem"
            duration="25"
            color="#054A91"
            />
        </section>
        <section className="home-section">
            <CompanionsList
            title = "Recently completed sessions"
            companions = {recentSessions}
            classNames="w-2/3 max-lg:w-full"
            />

            <CTA />
        </section>
    </main>
  )
}

export default Page