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
            match
     
          </div>
        </div>
      </div>
    </>
  );
}
