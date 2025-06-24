"use client";
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import data from "./data.json"
import { ICountry, ILeagueView, ICountryView, ITransfer, ILeagueMatch } from "@/interface"
import { useEffect, useState } from "react";
import { getCountries } from "@/api/countries.api"
import { getFixtures, getFixturesByDate } from "@/api/fixtures.api"
import { getTransfers } from "@/api/transfer.api";
import { getAllLeagues } from "@/api/leagues.api"
import { getMatches } from "@/api/matches.api";

export default function Page() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [fixtures, setFixtures] = useState<number>(0);
  const [popularLeagues, setPopularLeagues] = useState<ILeagueView[]>([]);
  const [internationalLeagues, setInternationalLeagues] = useState<ICountryView | null>(null);
  const [countriesLeagues, setCountriesLeagues] = useState<ICountryView[]>([]);
  const [transfers,setTransfers] = useState<ITransfer[]>([]);
  const [matches,setMatches] = useState<ILeagueMatch[]>([]);
  const [fixturesByDate, setFixturesByDate] = useState<number>(0);
  const handleGetCountries = async () => {
    try {
      const { data } = await getCountries();
      if (data?.response && Array.isArray(data.response)) {
        setCountries(data.response.map((country: ICountry) => {
          return country;
        }))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetFixtures = async () => {
    try {
      const { data } = await getFixtures();
      if (data?.response && Array.isArray(data.response)) {
        setFixtures(data.response.length);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetLeagues = async () => {
    try {
      const { data } = await getAllLeagues();

      if (data) {
        setPopularLeagues(data.popular);
        setInternationalLeagues(data.international[0]);
        setCountriesLeagues(data.countries);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetTransfers = async () => {
    try {
      const { data } = await getTransfers();
      if (data) {
        setTransfers(data.transfers);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetMatches = async () => {
    try {
      const { data } = await getMatches();
      if (data) {
        setMatches(data.leagues);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleGetFixturesByDate = async () => {
    const today = new Date().toISOString().split('T')[0];
    try {
      const { data } = await getFixturesByDate(today);
      if (data?.response && Array.isArray(data.response)) {
        setFixturesByDate(data.response.length);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetCountries();
    handleGetFixtures();
    handleGetLeagues();
    handleGetFixturesByDate();
    handleGetTransfers();
    handleGetMatches();
  }, []);

  return (

    <>
      <SiteHeader title="Inicio" />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards countries={countries} fixtures={fixtures} fixturesByDate={fixturesByDate} />
            <div className="grid grid-cols-2 gap-4">
              <div className="px-8">
              <h1 className="font-bold text-lg">Fichajes</h1>
                <div>
                  
                  <Carousel>
                    <CarouselContent>
                    {
                    transfers.map((transfer, index)=>(
                 
                      <CarouselItem key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div>
                        <img
                                    src={`https://images.fotmob.com/image_resources/playerimages/${transfer.playerId}.png`}
                      
                                   
                                  />
                        </div>
                        <div >
                          <h1 className="font-bold text-sm">{ transfer.name }</h1>
                          <p className="text-sm">
                            {transfer.position.key}
                          </p>
                          <p className="text-sm">
                            <b>Valor: </b>{transfer.marketValue} € 
                          </p>
                          <p className="text-sm" style={{ display: 'flex', alignItems: 'center' }}><b>de: </b><img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${transfer.fromClubId}_xsmall.png`} style={{ width: '20px', height: '20px', marginRight: '8px' }} />{transfer.fromClub}</p>
                          
                          <p className="text-sm" style={{ display: 'flex', alignItems: 'center' }}>
                          <b>para: </b> <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${transfer.toClubId}_xsmall.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />{transfer.toClub} 
                          </p>
                          <p className="text-sm">
                            <b>Venta:</b> {transfer.fee?.value ? transfer.fee.value+" €" : 'Secreto'}
                          </p>
                        </div>
                      </CarouselItem>
                  
                    ))
                  }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <h1 className="font-bold text-lg">Ligas Populares</h1>
                <ul>
                  {popularLeagues.map((league, index) => (
                    <li className="mt-2" key={index} style={{ display: 'flex', alignItems: 'center' }}><img src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`} alt={`${league.name} logo`} style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {league.name}</li>
                  ))}
                </ul>

                <hr />
                <h1 className="font-bold text-lg">Todas las ligas</h1>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger><img src={`https://images.fotmob.com/image_resources/logo/teamlogo/int.png`} alt={`internacional logo`} style={{ width: '20px', height: '20px', marginRight: '8px' }} /> Internacional </AccordionTrigger>
                    <AccordionContent>
                      <ul>
                        {internationalLeagues?.leagues?.map((league, index) => (
                          <li
                            key={index}
                            className="mt-2"
                            style={{ display: 'flex', alignItems: 'center' }}
                          >
                            <img
                              src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`}
                              alt={`${league.name} logo`}
                              style={{ width: '20px', height: '20px', marginRight: '8px' }}
                            />
                            {league.name}
                          </li>
                        ))}
                      </ul>
          
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>


                {
                  countriesLeagues.map((country, index) => (
                    <div key={index}>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger><img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${country.ccode.toLowerCase()}.png`} alt={`internacional logo`} style={{ width: '20px', height: '20px', marginRight: '8px' }} /> {country.name} </AccordionTrigger>
                          <AccordionContent>
                            <ul>
                              {country.leagues?.map((league, index) => (
                                <li
                                  key={index}
                                  className="mt-2"
                                  style={{ display: 'flex', alignItems: 'center' }}
                                >
                                  <img
                                    src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league.id}.png`}
                                    alt={`${league.name} logo`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />
                                  {league.name}
                                </li>
                              ))}
                            </ul>
              
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))
                }





              </div>
              
              <div className="">
              <h1 className="font-bold text-lg">Encuentros de Hoy</h1>
              {
                  matches.map((match, index) => (
                    <div key={index}>
                      
                      <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                          <AccordionTrigger> <img
                                    src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${match.primaryId}.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  /> {match.name} </AccordionTrigger>
                          <AccordionContent >
                            <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              {match.matches.map((single, index2) => (
                                <li
                                  key={index2}
                                  className="mt-2"
                                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                  <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${single.home.id}.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />
                                  {single.home.name}   <b className="mx-2">VS</b> <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${single.away.id}.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />
                                  {single.away.name}
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}
