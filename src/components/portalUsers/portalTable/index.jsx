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
    // const [regionFilter, setRegionFilter] = useState("");
    // const [communeFilter, setCommuneFilter] = useState("");
    // const [filteredRealtors, setFilteredRealtors] = useState([]);


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
            <div className="flex justify-between items-center gap-2 mb-2">
                <div className="grid w-full 2xl:w-full">
                    <label className="font-medium">Buscar</label>
                    <input 
                    type="text"
                    placeholder="Buscar"
                    className=" md:w-44 2xl:w-[30vw] p-2 mb-2 mt-2 border bg-transparent rounded-md" 
                    value={filtered.search}
                    onChange={e => setFiltered(prev => ({ ...prev, search: e.target.value }))}
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-start items-center gap-2 w-full xl:w-[25vw] 2xl:w-[45vw]">
                <div className="grid w-full 2xl:w-full">
                    <label className="font-medium">País</label>
                        <input 
                        disabled
                        id="country"
                        type="text"
                        placeholder="Chile"
                        className=" md:w-44 2xl:w-full p-2 mb-2 mt-2 border bg-transparent rounded-md" 
                        // value={""}
                        // onChange={e => setFiltered(e.target.value)}
                        />
                </div>
                <div className="grid w-full  2xl:w-full">
                    <label className="font-medium" for="region">Región</label>
                        <input 
                        id="region"
                        type="text"
                        placeholder="Metropolitana"
                        className="md:w-44 2xl:w-full p-2 mb-2 mt-2 border bg-transparent rounded-md" 
                        value={filtered.region}
                        onChange={e => setFiltered(prev => ({ ...prev, region: e.target.value }))}
                        />
                </div>
                <div className="grid w-full  2xl:w-full">
                    <label className="font-medium" for="commune">Comuna</label>
                    <input 
                        id="commune"
                        name="commune"
                        placeholder="Huechuraba"
                        className="md:w-44 2xl:w-full p-2 mb-2 mt-2 border bg-transparent rounded-md" 
                        value={filtered.commune}
                        onChange={e => setFiltered(prev => ({ ...prev, commune: e.target.value }))}
                        />
                </div>
            </div>
          <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                    <p>Corredores encontrados:</p>{''}<span>{table.getRowModel().rows.length|| 0 }</span>
                </div>

                <select className="bg-transparent cursor-pointer w-14 lg:w-36 h-10 px-1.5 lg:px-2 my-2 border rounded-md"
                value={table.getState().pagination.pageSize}
                onChange={e => {
                    table.setPageSize(Number(e.target.value))
                }}
                >
                {[5, 10, 15].map(pageSize => (
                    <option className="cursor-pointer after:border-none focus:border-none select:border-none" key={pageSize} value={pageSize}>
                   {pageSize}  por página 
                    </option>
                ))}
                </select>
            </div>

            
            <div className="overflow-x-auto h-full 2xl:h-[72vh]">
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
                        
            <div className="flex flex-row justify-center gap-3 m-2 ">
                <button className="p-2 px-4 rounded-full border  hover:bg-secondary-light hover:text-white duration-200 " onClick={() => table.setPageIndex(0)}>
                    Inicio
                </button>
                <button className="px-3 sm:p-2 sm:px-3 rounded-full border hover:bg-secondary-light hover:text-white duration-200" onClick={() => table.previousPage()}>
                    <FaArrowLeft />
                </button>
                <button className="p-2 px-3 rounded-full border hover:bg-secondary-light hover:text-white duration-200" onClick={() => table.nextPage()}>
                    <FaArrowRight />
                </button>
                <button className="p-2 px-4 rounded-full border hover:bg-secondary-light hover:text-white duration-200"  onClick={() => table.setPageIndex(table.getPageCount()-1)}>
                    Final
                </button>
            </div>
        
        </div>
        </>
      
    )
}

export default TableRealtors;