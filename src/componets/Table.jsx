import React,{useRef, useState,useEffect} from "react";
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { useSort } from "@table-library/react-table-library/sort";
import { getTheme } from "@table-library/react-table-library/baseline";
import Input from "../componets/ui/Input";
import Button from "../componets/ui/Button";
import Container from "../componets/ui/Container";
import { Toaster, toast } from 'sonner'
import gsap from "gsap";
const initialNodes = [
  { id: "1", Fruits: "apple", Qty: 2 },
  { id: "2", Fruits: "banana", Qty: 5 },
  { id: "3", Fruits: "orange", Qty: 3 },
  { id: "4", Fruits: "grapes", Qty: 8 },
  { id: "5", Fruits: "mango", Qty: 7 },
  { id: "6", Fruits: "pineapple", Qty: 1 },
  { id: "7", Fruits: "kiwi", Qty: 4 },
  { id: "8", Fruits: "peach", Qty: 6 },
  { id: "9", Fruits: "strawberry", Qty: 10 },
  { id: "10", Fruits: "blueberry", Qty: 9 },
];

const Table = () => {
  
  const [data, setData] = useState({ nodes: initialNodes });
  const [search, setSearch] = useState("");
  const [newColumnLabel, setNewColumnLabel] = useState("");
  const [newColumnType, setNewColumnType] = useState("text");
  const [searchCol, setsearchCol] = useState("Fruits")

  const [columns, setColumns] =useState([
    {
      label: "Fruits",
      property: "Fruits",
      type: "text",
    },
    {
      label: "Qty",
      property: "Qty",
      type: "number",
    },
  ]);

  const theme = useTheme(getTheme());

  // Handles row updates based on column property
  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          return { ...node, [property]: value };
        } else {
          return node;
        }
      }),
    }));
  };

  
  // To add a new row 
  const addRow = () => {
    const newNode = { id: (data.nodes.length + 1).toString() };
    columns.forEach((column) => {
      newNode[column.property] = column.type === "text" ? "" : 0;
    });

    setData((prevData) => ({
      ...prevData,
      nodes: [...prevData.nodes, newNode],
    }));
    toast.success("Row Added Sucessfully!!")
  };

  //To add a new column 
  const addColumn = () => {
    if (newColumnLabel.trim() !== "") {
      const newColumn = {
        label: newColumnLabel,
        property: newColumnLabel,
        // `col${columns.length + 1}`
        type: newColumnType,
        sort: { sortKey: newColumnType }, 
      };
      setData((prevData) => ({
        ...prevData,
        nodes: prevData.nodes.map((node) => ({
          ...node,
          [newColumn.property]: newColumn.type === "text" ? "" : 0,
        })),
      }));
      setColumns((prevColumns) => [...prevColumns, newColumn]);
      setNewColumnLabel(""); 
      setNewColumnType("text"); 
      toast.success("Column Added Sucessfully!!")
    }
  };

  const handleSearchdata = () => {
    if (searchCol && search.trim() !== "") {
      const filteredNodes = data.nodes.filter((item) => {
        const value = item[searchCol] ? item[searchCol].toString().toLowerCase() : "";
        return value.includes(search.toLowerCase());
      });
      setData((prevData) => ({
        ...prevData,
        nodes: filteredNodes,
      }));
    } else {
      console.log("Please select a column and enter a search term.");
    }
  };
  

  // Define sorting functions for text and number columns
  const sortFns = {
    text: (array, property) =>
      array.sort((a, b) =>
        (a[property] || "").localeCompare(b[property] || "")
      ),
    number: (array, property) =>
      array.sort((a, b) => (a[property] || 0) - (b[property] || 0)),
  };

  // Initialize sorting hook
  const sort = useSort(
    data,
    {
      onChange: () => {},
    },
    {
      sortFns: {
        NAME: (array) => sortFns.text(array, "name"),
      },
    }
  );

  // Dynamic rendering based on column type
  const renderCell = (item, column) => {
    switch (column.type) {
      case "text":
        return (
          <input
            type="text"
            // style={{ width: "100%", border: "none", fontSize: "1rem" ,padding:"2px" }}
            className="w-full border-0 text-sm p-1 focus:border-0 outline-none"
            value={item[column.property] || ""}
            onChange={(event) =>
              handleUpdate(event.target.value, item.id, column.property)
            }
          />
        );
      case "number":
        return (
          <input
            type="number"
            // style={{ width: "100%", border: "none", fontSize: "1rem" }}
              className="w-full border-0 text-sm p-1 focus:border-0 outline-none"
            value={item[column.property] || 0}
            onChange={(event) =>
              handleUpdate(Number(event.target.value), item.id, column.property)
            }
          />
        );
      default:
        return null;
    }
  };

  // Defining the columns
  const COLUMNS = columns.map((column) => ({
    label: column.label,
    sort: { sortKey: column.property.toUpperCase() },
    renderCell: (item) => renderCell(item, column),
  }));

  const ControllerRef=useRef()
  const Tableref=useRef()


  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.to(ControllerRef.current,{
      opacity: 1,
      duration: 2,
      ease: "power3.out",
  })})


  useEffect(() => {
    gsap.to(Tableref.current,{
      duration:1,
      ease: "power1.out",
      x: "0"
    })})

  return (
    <>
      <div 
      ref={ControllerRef}
      className= " opacity-0 w-full h-full my-10 flex flex-col items-center gap-4 justify-center">
        <div className="md:w-[50%] w-full flex flex-col md:flex-row items-center md:gap-0 gap-4 justify-evenly">
        <Input
        label=""
        id="search"
        placeholder="Search"
         type="text"
         value={search} 
         onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex flex-row md:w-[33%] justify-center gap-2 items-center">
          <label className="md:text-lg text-sm" htmlFor="column-name">Column Name:</label>
          <select
            id="column-name"
            value={searchCol}
            onChange={(e) => setsearchCol(e.target.value)}
          >
            {
              COLUMNS.map((item)=>
                (<option key={item.label} value={item.label}>{item.label}</option>)
              )
            }
          </select>
        </div>
        <Button onClick={handleSearchdata}>Search</Button>
        </div>
        <div className="md:w-[50%] w-full flex flex-col md:flex-row items-center md:gap-0 gap-4  justify-evenly">
        <Input
        label=""
         type="text"
         value={newColumnLabel}
         onChange={(e) => setNewColumnLabel(e.target.value)}
         placeholder="Column Label"
        />
        <div className="flex flex-row md:w-[33%] justify-center gap-2 items-center">
          <label className="md:text-lg text-sm" htmlFor="column-type">Column Type:</label>
          <select
            id="column-type"
            value={newColumnType}
            onChange={(e) => setNewColumnType(e.target.value)}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
        </div>
        <Button onClick={addColumn}>Add Column</Button>
        </div>
        <Button onClick={addRow}>Add Row</Button>
      </div>
      <div ref={Tableref} className="translate-x-[-100vh] w-full my-10 flex justify-center items-center">
        <Container>
        <CompactTable columns={COLUMNS} data={data} sort={sort}   theme={theme} />
        </Container>
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default Table;
