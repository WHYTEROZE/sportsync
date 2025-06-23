"use client"

import * as React from "react"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ILeagueFull } from "@/interface/index" // ✅ ajusta la ruta si es necesario

export const leagueColumns: ColumnDef<ILeagueFull>[] = [
  {
    accessorKey: "league.name",
    header: "League",
    cell: ({ row }) => (
      <div className="flex items-center">
        <img
          src={row.original.league.logo}
          alt={`${row.original.league.name} logo`}
          className="w-6 h-6 mr-2"
        />
        {row.original.league.name}
      </div>
    ),
  
  },
  {
    accessorKey: "league.type",
    header: "Type",
    cell: ({ row }) => row.original.league.type,
  },
  {
    accessorKey: "country.name",
    header: "Country",
    cell: ({ row }) => row.original.country.name,
  },
  {
    id: "seasons",
    header: "Total Seasons",
    cell: ({ row }) => row.original.seasons.length,
  },
  {
    id: "currentSeason",
    header: "Current Season",
    cell: ({ row }) => {
      const current = row.original.seasons.find((s) => s.current)
      return current?.year ?? "—"
    },
  },
]

interface LeagueDataTableProps {
  data: ILeagueFull[]
}

export function LeagueDataTable({ data }: LeagueDataTableProps) {
  const table = useReactTable({
    data,
    columns: leagueColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
