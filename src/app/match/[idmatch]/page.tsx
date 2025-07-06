'use client';

import { SiteHeader } from '@/components/site-header';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { getMatchDetail } from '@/api/matches.api';
import { getAudio } from '@/api/audio.api';
import { IMatchDetail, IAudio } from '@/interface';
import { useMatchClock } from '@/hooks/useMatchClock';
import { RadioPlayer } from '@/components/radio-player';
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

    const idmatch = typeof params?.idmatch === 'string' ? params.idmatch : '';

    const [matchDetail, setMatchDetail] = useState<IMatchDetail | null>(null);
    const [dataAudio, setDataAudio] = useState<IAudio | null>(null);

    const handleGetMatchDetail = async (id: string) => {
        try {
            const { data } = await getMatchDetail(id);
            if (data) {

                setMatchDetail(data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleGetAudio = async (id: string) => {
        try {
            const { data } = await getAudio(id);
            if (data) {
                console.log("audio", data);
                setDataAudio(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (idmatch) {
            const [idM, idLeague] = idmatch.split("-");
            handleGetMatchDetail(idM);
            handleGetAudio(idM);
        }
    }, [idmatch]);
    useEffect(() => {
        if (matchDetail) {
            console.log("matchdetail", matchDetail.content.matchFacts);
        }
    }, [matchDetail]);

    const { clock, phase } = useMatchClock(matchDetail?.header.status.halfs ?? {
        firstHalfStarted: "",
        firstHalfEnded: "",
        secondHalfStarted: "",
        secondHalfEnded: "",
        firstExtraHalfStarted: "",
        secondExtraHalfStarted: "",
        gameEnded: ""
    });


    return (
        <>
            <SiteHeader title={`${matchDetail?.header.teams[0].name ?? 'Cargando'} vs ${matchDetail?.header.teams[1].name ?? 'Cargando'}`} />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="p-4">

                        <p className='flex items-center justify-center gap-4 text-base'>
                            <span className="text-green-600 font-semibold">{phase}</span>
                            <img src={matchDetail?.header.teams[0]?.imageUrl} width="42" alt="Team logo" />
                            <span>{matchDetail?.header.teams[0]?.name} <b>{matchDetail?.header.teams[0]?.score}</b> </span> <b>  </b>
                            <img src={matchDetail?.header.teams[1]?.imageUrl} width="42" alt="Team logo" />
                            <span>{matchDetail?.header.teams[1]?.name} <b>{matchDetail?.header.teams[1]?.score}</b> </span>
                        </p>
                        <p><b>Liga:</b> {matchDetail?.content.matchFacts.infoBox.Tournament.leagueName}</p>
                        <p><b>Ronda:</b> {matchDetail?.content.matchFacts.infoBox.Tournament.round}</p>
                        <p><a href={matchDetail?.content.matchFacts.infoBox.Tournament.link} target='_blank'><b>Ver tabla de posiciones</b> </a></p>
                    </div>
                    <div className='p-4'>
                        {
                            dataAudio?.urls && dataAudio.urls.length > 0 ? (
                                <><b>En Vivo</b> <RadioPlayer src={dataAudio.urls[0]._} />  </>
                            ) : null
                        }

                        <h1>Eventos</h1>
                        {matchDetail?.content.matchFacts.events.events?.map((event, idx) => {
                            // Si el tipo es "Half", renderizarlo diferente y evitar los demás
                            if (event.type === 'Half') {
                                return (
                                    <div key={`${event.reactKey}-${idx}`} className="col-span-full text-center font-semibold text-gray-600 mt-4">
                                        ⏸️ Pitaso para finalizar el partido - Minuto {event.time}
                                    </div>
                                );
                            }

                            // Resto de eventos que no son "Half"
                            return (
                                <div key={`${event.reactKey}-${idx}`} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 border border-gray-300 rounded p-2 mt-2">
                                    <p>
                                        Tipo:{' '}
                                        {event.type === 'Goal'
                                            ? 'Gol ⚽'
                                            : event.type === 'Card'
                                                ? event.card === 'Red'
                                                    ? 'Tarjeta Roja 🟥'
                                                    : 'Tarjeta Amarilla 🟨'
                                                : event.type === 'Substitution'
                                                    ? 'Cambio de jugador 🔄'
                                                    : event.type}
                                    </p>
                                    <p>Minuto: {event.time}</p>
                                    {event.type === 'Substitution' ? (
                                        <div className='flex flex-col gap-2'>
                                            <div className='flex items-center gap-2'>
                                                🟢➡️: {event.swap?.[0]?.name}{' '}
                                                <img
                                                    src={`https://images.fotmob.com/image_resources/playerimages/${event.swap?.[0]?.id}.png`}
                                                    width="60"
                                                    alt="Player logo"
                                                    style={{ display: 'inline', verticalAlign: 'middle' }}
                                                />


                                            </div>
                                            <div className='flex items-center gap-2'>
                                                🔴⬅️: {event.swap?.[1]?.name}{' '}
                                                <img
                                                    src={`https://images.fotmob.com/image_resources/playerimages/${event.swap?.[1]?.id}.png`}
                                                    width="60"
                                                    alt="Player logo"
                                                    style={{ display: 'inline', verticalAlign: 'middle' }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <p>

                                            {event.player?.name}{' '}
                                            <img
                                                src={`https://images.fotmob.com/image_resources/playerimages/${event.player?.id}.png`}
                                                width="60"
                                                alt="Player logo"
                                                style={{ display: 'inline', verticalAlign: 'middle' }}
                                            />
                                        </p>
                                    )}
                                </div>
                            );
                        })}







                    </div>
                    <div className='p-4'>
                        
                    </div>
                </div>
            </div>
        </>
    );
}
