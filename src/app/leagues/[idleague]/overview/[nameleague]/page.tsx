'use client';

import { SiteHeader } from '@/components/site-header';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { getLeagueById } from '@/api/leagues.api';
import { IInfoLeague } from '@/interface';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [league, setLeague] = useState<IInfoLeague | null>(null);

  // Aquí protegemos contra valores nulos
  const idleague = typeof params?.idleague === 'string' ? params.idleague : '';
  const nameleague = typeof params?.nameleague === 'string' ? params.nameleague : '';

  const handleGetLeague = async (id: number) => {
    try {
      const { data } = await getLeagueById(id);
      if (data) {
        setLeague(data);

      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (idleague && nameleague) {
      const fetchData = async () => {
        setLoading(true);
        try {
          handleGetLeague(Number(idleague));
        } catch (err) {
          console.error('Error al consultar la API:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [idleague, nameleague]);
  useEffect(() => {
    if (league) {
      //console.log("League data has been updated:", league.table[0].data);
      // Aquí puedes agregar cualquier lógica adicional que necesites cuando los datos de la liga cambien
    }
  }, [league]);

  if (!idleague || !nameleague) return <p>Cargando parámetros...</p>;
  if (loading) return <p>Consultando API...</p>;

  return (
    <>
      <SiteHeader title={league?.details.name ?? 'cargando ...'} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col  p-4">
            <div className='flex flex-row items-center'>
              <img
                src={`https://images.fotmob.com/image_resources/logo/leaguelogo/${league?.details.id}.png`}
                alt=""
                width="42"
                height="42"
              />
              <h1 className='ml-2 font-bold'>{league?.details.name}</h1>
            </div>
            <div>
              <p><b>País:</b> {league?.details.country} - <b>Season:</b> {league?.details.selectedSeason}</p>
            </div>
            <div className='pt-5'>
              <hr />
              <h1 className='font-bold'>Tabla de posiciones</h1>
              <Table>

                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">#</TableHead>
                    <TableHead>Equipo</TableHead>
                    <TableHead>J</TableHead>
                    <TableHead>G</TableHead>
                    <TableHead>E</TableHead>
                    <TableHead>P</TableHead>
                    <TableHead>+/-</TableHead>
                    <TableHead>DG</TableHead>
                    <TableHead>PTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>

                  {

                    league?.table[0]?.data.table?.all.map((stats, index) => (
                      <TableRow key={stats.id}>
                        <TableCell className="font-medium">{stats.idx}</TableCell>
                        <TableCell className="font-medium flex flex-row"><img src={`https://images.fotmob.com/image_resources/logo/teamlogo/${stats.id}_xsmall.png`} width="20px" className='mr-1' />  {stats.name}</TableCell>
                        <TableCell>{stats.played}</TableCell>
                        <TableCell>{stats.wins}</TableCell>
                        <TableCell>{stats.draws}</TableCell>
                        <TableCell>{stats.losses}</TableCell>
                        <TableCell>{stats.scoresStr}</TableCell>
                        <TableCell>{stats.goalConDiff}</TableCell>
                        <TableCell>{stats.pts}</TableCell>
                      </TableRow>


                    ))
                  }

                </TableBody>
              </Table>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className='col-span-1'>
                <h1 className="font-bold text-lg">Fichajes</h1>
                <div className="ml-8" style={{ width: '200px' }}>

                  <Carousel>
                    <CarouselContent>
                      {league?.transfers?.data
                        ?.filter(
                          (transfer) =>
                            transfer &&
                            transfer.playerId &&
                            transfer.name &&
                            transfer.position &&
                            transfer.position.key
                        )
                        .map((transfer) => (
                          <CarouselItem
                            key={transfer.playerId}
                            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                          >
                            <div>
                              <img
                                src={`https://images.fotmob.com/image_resources/playerimages/${transfer.playerId}.png`}
                                alt={transfer.name}
                              />
                            </div>
                            <div>
                              <h1 className="font-bold text-sm">{transfer.name}</h1>
                              <p className="text-sm">{transfer.position.key}</p>
                              <p className="text-sm">
                                <b>Valor: </b>
                                {transfer.marketValue} €
                              </p>
                              <p className="text-sm" style={{ display: 'flex', alignItems: 'center' }}>
                                <b>de: </b>
                                <img
                                  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${transfer.fromClubId}_xsmall.png`}
                                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  alt={transfer.fromClub}
                                />
                                {transfer.fromClub}
                              </p>
                              <p className="text-sm" style={{ display: 'flex', alignItems: 'center' }}>
                                <b>para: </b>
                                <img
                                  src={`https://images.fotmob.com/image_resources/logo/teamlogo/${transfer.toClubId}_xsmall.png`}
                                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  alt={transfer.toClub}
                                />
                                {transfer.toClub}
                              </p>
                              <p className="text-sm">
                                <b>Venta:</b>{' '}
                                {transfer.fee?.value ? `${transfer.fee.value} €` : 'Secreto'}
                              </p>
                            </div>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
              <div className='col-span-2'>
                <h1 className="font-bold text-lg">Partidos</h1>
                <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                              {league?.matches.allMatches.map((single, index2) => (
                                <li
                                  key={index2}
                                  className="my-4 border-2 border-dashed p-2 w-full"
                                >
                                  <h1 className="text-center font-bold"> {new Date(single.status.utcTime).toLocaleString('es-ES', { timeZone: 'UTC', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</h1>
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${single.home.id}.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />
                                  {single.home.name}   <b className="mx-2">VS</b> <img
                                    src={`https://images.fotmob.com/image_resources/logo/teamlogo/${single.away.id}.png`}
                                    style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                  />
                                  {single.away.name}
                                  </div>
                                  
                                </li>
                              ))}
                            </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
