import React, { useEffect, useState, ReactNode } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ConfirmDelete, NoData } from '@components/index';
import axios, { AxiosError } from 'axios';
import { toast } from "react-toastify";
import IMAGES from '@assets/images/images';
import { CATEGORIES_URLS, BASE_HEADERS } from 'src/constants/END_POINTS';

interface DataType {
  key: string;
  name: string;
  id: number;
  creationDate: string;
  action: ReactNode;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Creation Date',
    dataIndex: 'creationDate',
    key: 'creationDate',
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
  },
];

const CategoryContentSection: React.FC = () => {
  const [categoriesList, setCategoriesList] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [catId, setCatId] = useState(0);
  const [totalItems, setTotalItems] = useState(0)
  const [pageSize] = useState(5);
  const [pageNumber, setPageNumber] = useState(1);

  const showModal = (id: number) => {
    setCatId(id);
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
    }, 2000);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteCategory = async () => {
    try{
      const response = await axios.delete(CATEGORIES_URLS.delete(catId), BASE_HEADERS);
      toast.success(response?.data?.message || 'category deleted successfuly');
      getCategoriesList();
      handleOk();
      console.log(response);
    }catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message);
      }
    }
  }

  const getCategoriesList = async () => {
    try {
      const response = await axios.get(CATEGORIES_URLS.getList(pageSize,pageNumber), BASE_HEADERS);
      response.data?.totalNumberOfRecords && setTotalItems(response?.data?.totalNumberOfRecords);
      setCategoriesList(response.data?.data || []);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategoriesList();
  }, [pageNumber]);

  return (
    <div className='table_bx'>
      {categoriesList.length > 0 ? (
        <Table
          columns={columns}
          pagination={{ pageSize,total: totalItems, onChange(page) {
            console.log(page)
            setPageNumber(page)
          }, }}
          dataSource={
            categoriesList.map((category, index) => ({
              key: index.toString(),
              id: category.id,
              name: category.name,
              creationDate: category.creationDate,
              action: (
                <Space size="middle">
                  <span className='action_icon'>
                    <img src={IMAGES.editIcon} alt='pic' /> Edit
                  </span>
                  <span className='action_icon' onClick={()=>showModal(category.id)}>
                    <img src={IMAGES.deleteIcon} alt='pic' /> Delete
                  </span>
                </Space>
              ),
            }))
          }
        />) : (<NoData />)
      }
      

      <ConfirmDelete 
        isModalOpen={isModalOpen} 
        handleOk={deleteCategory} 
        handleCancel={handleCancel}
        loading={loading}
        deleteItem="category"
      />
    </div>
  );
};

export default CategoryContentSection;
