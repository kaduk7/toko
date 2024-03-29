"use client"
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import Add from './action/Add';
import Update from './action/Update';
import Delete from './action/Delete';
import { rupiah } from '@/app/helper';
import * as XLSX from 'xlsx';

const Produk = () => {

  const [databarang, setDatabarang] = useState([])
  const [datakategori, setDatakategori] = useState([])
  const [filterText, setFilterText] = React.useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    reload()
    getkategori()
  },[])

  const reload = async () => {
    try {
      const response = await fetch(`/api/barang`);
      const result = await response.json();
      setDatabarang(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const getkategori = async () => {
    try {
      const response = await fetch(`/api/kategori`);
      const result = await response.json();
      const options = result.map((item: any) => ({ label: item.nama, value: item.id }))
      setDatakategori(options);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleRowsPerPageChange = (newPerPage: number, page: number) => {
    setItemsPerPage(newPerPage);
    setCurrentPage(page);
  };

  const filteredItems = databarang.filter(
    (item: any) => item.namaBarang && item.namaBarang.toLowerCase().includes(filterText.toLowerCase()),
  );

  const columns = [
    {
      name: 'No',
      cell: (row: any, index: number) => <div>{(currentPage - 1) * itemsPerPage + index + 1}</div>,
      sortable: false,
      width: '80px'
    },
    {
      name: 'Nama Barang',
      selector: (row: any) => row.namaBarang,
      sortable: true,
    },
    {
      name: 'Merek',
      selector: (row: any) => row.merek,
    },
    {
      name: 'Harga Jual',
      selector: (row: any) => rupiah(row.hargaJual),
    },
    {
      name: 'Stok',
      selector: (row: any) => row.stok,
    },
    {
      name: 'Action',
      cell: (row: any) => (
        <div className="d-flex">
          <Update barang={row} daftarkategori={datakategori} kategoritb={row.KategoriTb} reload={reload}/>
          <Delete foto={row.foto} barangid={row.id} reload={reload}/>
        </div>
      ),
      width: '150px'
    },

  ];

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'DataBarang');
    XLSX.writeFile(workbook, 'Data Barang.xlsx');
  };


  return (
    <div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-header">
              <h1 className="card-title" style={{ fontFamily: "initial", fontSize: 20 }}>Data Barang</h1>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-9">
                  <Add reload={reload} daftarkategori={datakategori} />
                </div>
                <div className="col-md-3">
                  <div className="input-group mb-3  input-success">
                    <span className="input-group-text border-0"><i className="mdi mdi-magnify"></i></span>
                    <input
                      id="search"
                      type="text"
                      placeholder="Search..."
                      aria-label="Search Input"
                      value={filterText}
                      onChange={(e: any) => setFilterText(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                persistTableHead
                responsive
                paginationPerPage={itemsPerPage}
                paginationTotalRows={filteredItems.length}
                onChangePage={(page) => setCurrentPage(page)}
                onChangeRowsPerPage={handleRowsPerPageChange}
                paginationRowsPerPageOptions={[5, 10, 20]}
                customStyles={{
                  headRow: {
                    style: {
                      backgroundColor: '#53d0b2',
                      fontSize: 15,
                      fontWeight: 'bold',
                      fontFamily: 'initial'
                    },
                  },
                  cells: {
                    style: {
                      fontSize: 15,
                      fontFamily: 'initial',
                    },
                  },
                }}
              />
               {databarang.length > 0 ?
                <div className="row mb-3">
                  <div className="col-md-3">
                    <button type='button' onClick={exportToExcel} className="btn btn-success btn-icon-text">
                      Ekspor ke Excel
                    </button>
                  </div>
                  <div className="col-md-9 d-flex justify-content-end">
                    <li>
                      <button type='button' onClick={exportToExcel} className="btn btn-primary btn-icon-text mx-2">
                        Download Template
                      </button>
                    </li>
                    <li>
                      <button type='button' onClick={exportToExcel} className="btn btn-info btn-icon-text">
                        Import dari Excel
                      </button>
                    </li>
                  </div>

                </div>
                :
                null
              }
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Produk