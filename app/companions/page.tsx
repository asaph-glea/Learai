import React from 'react'
import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import {getsubjectsColor} from "@/lib/utils";
import SubjectFilter from "@/components/SubjectFilter";
import SearchInput from "@/components/SearchInput";
const CompanionLibrary = async( {searchParams}: SearchParams) => {

    const filters = await searchParams;
    const subject = filters.subject?  filters.subject : '' ;
    const topic = filters.topic?  filters.topic : '' ;
    const companions = await getAllCompanions({subject, topic});
    console.log(companions);
    return (
        <div>
            <main>
                <section className="flex justify-between gap-4 max-sm:flex-col">
                    <h1>Companion Library</h1>
                    <div className="flex gap-4">
                        <SearchInput />
                        <SubjectFilter/>
                    </div>
                </section>
                <section className="companion-grid">
                    {companions?.map((companion) => (
                        <CompanionCard
                            key ={companion.id}
                            {...companion}
                            color={getsubjectsColor(companion.subject)} />
                    ))}
                </section>
            </main>
        </div> )
}
export default CompanionLibrary;