import { useReactTable , flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from "@tanstack/react-table";
import { useState } from "react";
import '../../assets/css/components/table/table.css';

function TableRealtors({columnsData, dataRealtor}){

    const [sorting, setSorting] = useState([])
    const [filtered, setFiltered] = useState("");

    const table = useReactTable({
        columns:columnsData,
        data:dataRealtor,
        getPaginationRowModel: getPaginationRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),

        state: {
            sorting,
            globalFilter:filtered,
        },
        onSortingChange:setSorting,
        onGlobalFilterChange: setFiltered,
    })

    return(
        <div>
            <div className="tw-flex tw-justify-between tw-items-center">
                <input type="text"
                placeholder="Buscar"
                className="tw-w-32 md:tw-w-44 2xl:tw-w-72 tw-p-2 tw-mb-2 tw-mt-2 tw-border tw-bg-transparent" 
                value={filtered}
                onChange={e => setFiltered(e.target.value)}
                />

                <select className="tw-bg-transparent tw-cursor-pointer tw-w-20 lg:tw-w-36 tw-h-10 tw-px-2 tw-border"
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}
                >
                {[5, 10, 15].map(pageSize => (
                    <option className="tw-cursor-pointer after:tw-border-none focus:tw-border-none select:tw-border-none" key={pageSize} value={pageSize}>
                   {pageSize} por página 
                    </option>
                ))}
                </select>
            </div>

            
            <div className="tw-overflow-x-auto">
            <table>
                <thead>
                    {
                        table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}
                               >
                                {
                                    headerGroup.headers.map(header => (
                                        <th key={header.id}  onClick={header.column.getToggleSortingHandler()}>
                                            
                                            {flexRender(header.column.columnDef.header, header.getContext()) }   
                                            {
                                                {asc: "", desc :""}[header.column.getIsSorted()  ?? null]
                                            }                                          
                                          

                                        </th>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </thead>
                <tbody >
                    {
                       table.getRowModel().rows.map((row) => (
                            <tr key={row.id} >
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                )
                                )}
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>

                </tfoot>
            </table>
            </div>
                        
            <div className="tw-flex tw-flex-row tw-justify-between tw-gap-3 tw-m-2 ">
                <button className="tw-p-2 tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200 " onClick={() => table.setPageIndex(0)}>
                    Primera Página
                </button>
                <button className="tw-p-2 tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" onClick={() => table.previousPage()}>
                    Anterior
                </button>
                <button className="tw-p-2 tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" onClick={() => table.nextPage()}>
                    Siguiente
                </button>
                <button className="tw-p-2 tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200"  onClick={() => table.setPageIndex(table.getPageCount()-1)}>
                    Última Página
                </button>
            </div>
        
        </div>
    )
}

export default TableRealtors;