'use client';

import { SiteHeader } from '@/components/site-header';
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import { getMatchDetail } from '@/api/matches.api';
import { getAudio } from '@/api/audio.api';
import { IMatchDetail,IAudio } from '@/interface';
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
                console.log("audio",data);
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
            console.log("matchdetail", matchDetail);
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
                    </div>
                    <div className='p-4'>
                {
                    dataAudio?.urls && dataAudio.urls.length>0 ? (
                       <><b>En Vivo</b> <RadioPlayer src={dataAudio.urls[0]._}/>  </>
                    ) : null
                }
                        <ul>
                            <h1>Eventos</h1>

                            {matchDetail?.header.events?.homeTeamGoals &&
                                Object.keys(matchDetail.header.events.homeTeamGoals).length > 0 ? (
                                Object.entries(matchDetail.header.events.homeTeamGoals).map(([lastName, goals]) =>
                                    goals.map((goal, idx) => (
                                        <div key={`${lastName}-${idx}`}>
                                            <p>⚽ Gol de {goal.player.name} al minuto {goal.time}' - <b>{matchDetail?.header.teams[0].name}</b></p>
                                        </div>
                                    ))
                                )
                            ) : (
                                null
                            )}

                            {matchDetail?.header.events?.awayTeamGoals &&
                                Object.keys(matchDetail.header.events.awayTeamGoals).length > 0 ? (
                                Object.entries(matchDetail.header.events.awayTeamGoals).map(([lastName, goals]) =>
                                    goals.map((goal, idx) => (
                                        <div key={`${lastName}-${idx}`}>
                                            <p>⚽ Gol de {goal.player.name} al minuto {goal.time}' - <b>{matchDetail?.header.teams[1].name}</b></p>
                                        </div>
                                    ))
                                )
                            ) : (
                                null
                            )}

                            <li>

                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </>
    );
}
