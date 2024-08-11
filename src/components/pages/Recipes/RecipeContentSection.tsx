import React, { useEffect, useState, ReactNode } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ConfirmDelete, NoData } from '@components/index';
import axios, { AxiosError } from 'axios';
import { toast } from "react-toastify";
import IMAGES from '@assets/images/images';
import { RECIPES_URLS, BASE_HEADERS, BASE_IMG_URL } from 'src/constants/END_POINTS';

interface DataType {
    key: string;
    name: string;
    price: string;
    description: string;
    tag: string;
    imagePath: string;
    action: ReactNode;
}
const columns2: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Image',
      dataIndex: 'imagePath',
      key: 'imagePath', 
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Description',
      key: 'description',
      dataIndex: 'description',
    },
    {
        title: 'Tag',
        key: 'tag',
        dataIndex: 'tag',
      },
      {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
      },
  ];

const RecipeContentSection: React.FC = () => {
    const [recipesList, setRecipesList] = useState<DataType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [recipeId, setRecipeId] = useState(0);
    const [totalItems, setTotalItems] = useState(0)
    const [pageSize] = useState(2);
    const [pageNumber, setPageNumber] = useState(1);

    const showModal = (id) => {
        setRecipeId(id);
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
          const response = await axios.delete(RECIPES_URLS.delete(recipeId), BASE_HEADERS);
          toast.success(response?.data?.message || 'category deleted successfuly');
          getRecipesList();
          handleOk();
          console.log(response);
        }catch (error) {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data?.message);
          }
        }
      }
    const getRecipesList = async () => {
        try {
          const response = await axios.get(RECIPES_URLS.getList(pageSize,pageNumber), BASE_HEADERS);
          response.data?.totalNumberOfRecords && setTotalItems(response?.data?.totalNumberOfRecords);
          setRecipesList(response.data?.data || []);
          console.log(response.data.data);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getRecipesList();
      }, [pageNumber]);

  return (
    <div className='table_bx'>
      {recipesList.length > 0 ? (
        <Table
          columns={columns2}
          pagination={{ pageSize,total: totalItems, onChange(page) {
            console.log(page)
            setPageNumber(page)
          }, }}
          dataSource={
            recipesList.map((recipe, index) => ({
                key: index.toString(),
                name: recipe.name,
                imagePath: recipe.imagePath ? 
                (<img className='recipe_img' src={`${BASE_IMG_URL}/${recipe.imagePath}`} alt='pic' />) :
                (<img className='recipe_img' src={IMAGES.deleteImg}  alt='pic'/>),
                price: recipe.price,
                description: recipe.description,
                tag: recipe.tag.name,
                action: (
                        <Space size="middle">
                          <span className='action_icon'>
                            <img src={IMAGES.editIcon} alt='pic' /> Edit
                          </span>
                          <span className='action_icon' onClick={()=>showModal(recipe.id)}>
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
  )
}

export default RecipeContentSection