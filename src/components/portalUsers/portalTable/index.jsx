import { useReactTable , flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from "@tanstack/react-table";
import { useState , useEffect} from "react";
import '../../../assets/css/components/table/table.css';
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";


function TableRealtors({
    columnsData, 
    dataRealtor}){

    const [sorting, setSorting] = useState([])
    const [filtered, setFiltered] = useState({ search: "", region: "", commune: "" });
    // const [filtered, setFiltered] = useState("");
    const [regionFilter, setRegionFilter] = useState("");
    const [communeFilter, setCommuneFilter] = useState("");
    const [filteredRealtors, setFilteredRealtors] = useState([]);

    const globalFilterFn = (row, columnId, filterValue) => {
        const { search, region, commune } = filterValue;

        // Filtrado de búsqueda global (si existe)
        const searchMatch = !search || row.original.name.toLowerCase().includes(search.toLowerCase());

        // Filtrado por región
        const regionMatch = !region || (row.original.address?.internalDbState && row.original.address.internalDbState.name.toLowerCase().includes(region.toLowerCase()));

        // Filtrado por comuna
        const communeMatch = !commune || (row.original.address?.internalDbCity && row.original.address.internalDbCity.name.toLowerCase().includes(commune.toLowerCase()));

        return searchMatch && regionMatch && communeMatch;
    };

    const table = useReactTable({
        columns:columnsData,
        data:dataRealtor,
        getPaginationRowModel: getPaginationRowModel(),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        globalFilterFn: globalFilterFn,
        state: {
            sorting,
            globalFilter:filtered,
        },
        onSortingChange:setSorting,
        onGlobalFilterChange: setFiltered,
    });


    return(
        <>
            <div className="tw-flex tw-justify-between tw-items-center tw-gap-2 tw-mb-2">
                <div className="tw-grid tw-w-full 2xl:tw-w-full">
                    <label className="tw-font-medium">Buscar</label>
                    <input 
                    type="text"
                    placeholder="Buscar"
                    className=" md:tw-w-44 2xl:tw-w-[30vw] tw-p-2 tw-mb-2 tw-mt-2 tw-border tw-bg-transparent tw-rounded-md" 
                    value={filtered.search}
                    onChange={e => setFiltered(prev => ({ ...prev, search: e.target.value }))}
                    />
                </div>
            </div>
            <div className="tw-flex tw-flex-col sm:tw-flex-row tw-justify-start tw-items-center tw-gap-2 tw-w-full xl:tw-w-[25vw] 2xl:tw-w-[45vw]">
                <div className="tw-grid tw-w-full 2xl:tw-w-full">
                    <label className="tw-font-medium">País</label>
                        <input 
                        disabled
                        id="country"
                        type="text"
                        placeholder="Chile"
                        className=" md:tw-w-44 2xl:tw-w-full tw-p-2 tw-mb-2 tw-mt-2 tw-border tw-bg-transparent tw-rounded-md" 
                        // value={""}
                        // onChange={e => setFiltered(e.target.value)}
                        />
                </div>
                <div className="tw-grid tw-w-full  2xl:tw-w-full">
                    <label className="tw-font-medium" for="region">Región</label>
                        <input 
                        id="region"
                        type="text"
                        placeholder="Metropolitana"
                        className="md:tw-w-44 2xl:tw-w-full tw-p-2 tw-mb-2 tw-mt-2 tw-border tw-bg-transparent tw-rounded-md" 
                        value={filtered.region}
                        onChange={e => setFiltered(prev => ({ ...prev, region: e.target.value }))}
                        />
                </div>
                <div className="tw-grid tw-w-full  2xl:tw-w-full">
                    <label className="tw-font-medium" for="commune">Comuna</label>
                    <input 
                        id="commune"
                        name="commune"
                        placeholder="Huechuraba"
                        className="md:tw-w-44 2xl:tw-w-full tw-p-2 tw-mb-2 tw-mt-2 tw-border tw-bg-transparent tw-rounded-md" 
                        value={filtered.commune}
                        onChange={e => setFiltered(prev => ({ ...prev, commune: e.target.value }))}
                        />
                </div>
            </div>
          <div>
            <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-flex tw-items-center tw-text-gray-600">
                    <p>Corredores encontrados:</p>{''}<span>{table.getRowModel().rows.length|| 0 }</span>
                </div>

                <select className="tw-bg-transparent tw-cursor-pointer tw-w-14 lg:tw-w-36 tw-h-10 tw-px-1.5 lg:tw-px-2 tw-my-2 tw-border tw-rounded-md"
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}
                >
                {[5, 10, 15].map(pageSize => (
                    <option className="tw-cursor-pointer after:tw-border-none focus:tw-border-none select:tw-border-none" key={pageSize} value={pageSize}>
                   {pageSize}  por página 
                    </option>
                ))}
                </select>
            </div>

            
            <div className="tw-overflow-x-auto tw-h-full 2xl:tw-h-[72vh]">
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
                <tbody>
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
                        
            <div className="tw-flex tw-flex-row tw-justify-center tw-gap-3 tw-m-2 ">
                <button className="tw-p-2 tw-px-4 tw-rounded-full tw-border  hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200 " onClick={() => table.setPageIndex(0)}>
                    Inicio
                </button>
                <button className="tw-px-3 sm:tw-p-2 sm:tw-px-3 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" onClick={() => table.previousPage()}>
                    <FaArrowLeft />
                </button>
                <button className="tw-p-2 tw-px-3 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" onClick={() => table.nextPage()}>
                    <FaArrowRight />
                </button>
                <button className="tw-p-2 tw-px-4 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200"  onClick={() => table.setPageIndex(table.getPageCount()-1)}>
                    Final
                </button>
            </div>
        
        </div>
        </>
      
    )
}

export default TableRealtors;