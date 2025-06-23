"use client";
import { LeagueDataTable } from "@/components/league-table"
import { SiteHeader } from "@/components/site-header"
import { useEffect, useState } from "react";
import { getLeagues } from "@/api/leagues.api"
import { ILeagueFull } from "@/interface/index";

export default function Page() {
  const [leagues, setLeagues] = useState<ILeagueFull[]>([]);

  const handleGetLeagues = async () => {
    try {
      const { data } = await getLeagues();
      if (data?.response && Array.isArray(data.response)) {
        setLeagues(data.response);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetLeagues();
  }, []);

  return (

    <>
      <SiteHeader title="Ligas" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <LeagueDataTable data={leagues} />
          </div>
        </div>
      </div>
    </>

  )
}
