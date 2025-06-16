"use client";
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import data from "./data.json"
import { ICountry } from "@/interface"
import {useEffect,useState} from "react";
import {getCountries} from "@/api/countries.api"
import {getFixtures,getFixturesByDate} from "@/api/fixtures.api"
import {getLeagues} from "@/api/leagues.api"

export default function Page() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [fixtures, setFixtures] = useState<number>(0);
  const [leagues, setLeagues] = useState<number>(0);
  const [fixturesByDate, setFixturesByDate] = useState<number>(0);
  const handleGetCountries = async () =>{
    try{
      const {data} = await getCountries();
      if(data?.response && Array.isArray(data.response)){
        setCountries(data.response.map((country:ICountry) => {
          return country;
      }))
      }
    }catch(error){
      console.log(error);
    }
  }

  const handleGetFixtures = async () =>{
    try{
      const {data} = await getFixtures();
      if(data?.response && Array.isArray(data.response)){
        setFixtures(data.response.length);
      }
    }catch(error){
      console.log(error);
    }
  }

  const handleGetLeagues = async () =>{
    try{
      const {data} = await getLeagues();
      if(data?.response && Array.isArray(data.response)){
        setLeagues(data.response.length);
      }
    }catch(error){
      console.log(error);
    }
  }

  const handleGetFixturesByDate = async () =>{
    const today = new Date().toISOString().split('T')[0];
    try{
      const {data} = await getFixturesByDate(today);
      if(data?.response && Array.isArray(data.response)){
        setFixturesByDate(data.response.length);
      }
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    handleGetCountries();
    handleGetFixtures();
    handleGetLeagues();
    handleGetFixturesByDate();
  },[]);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards countries={countries} fixtures={fixtures} leagues={leagues} fixturesByDate={fixturesByDate} />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive countries={countries} />
              </div>
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
