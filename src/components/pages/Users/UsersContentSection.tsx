import React, { useEffect, useState, ReactNode } from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ConfirmDelete, NoData } from '@components/index';
import axios, { AxiosError } from 'axios';
import { toast } from "react-toastify";
import IMAGES from '@assets/images/images';
import { USERS_URLS, BASE_HEADERS, BASE_IMG_URL } from 'src/constants/END_POINTS';

interface DataType {
    key: string;
    userName: string;
    email: string;
    country: string;
    phoneNumber: number;
    imagePath: string;
    action: ReactNode;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Image',
      dataIndex: 'imagePath',
      key: 'imagePath', 
    },
    {
      title: 'Action',
      key: 'action',
      dataIndex: 'action',
    },
];

const UsersContentSection: React.FC = () => {
    const [usersList, setUsersList] = useState<DataType[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(0);
    const [totalItems, setTotalItems] = useState(0)
    const [pageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(1);

    const showModal = (id) => {
        setUserId(id);
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
    
    const deleteUser = async () => {
        try{
          const response = await axios.delete(USERS_URLS.delete(userId), BASE_HEADERS);
          toast.success(response?.data?.message || 'user deleted successfuly');
          getUsersList();
          handleOk();
          console.log(response);
        }catch (error) {
          if (error instanceof AxiosError) {
            toast.error(error.response?.data?.message || "un expected error");
          }
        }
    }

    const getUsersList = async () => {
        try {
          const response = await axios.get(USERS_URLS.getList(pageSize,pageNumber), BASE_HEADERS);
          response.data?.totalNumberOfRecords && setTotalItems(response?.data?.totalNumberOfRecords)
          setUsersList(response.data?.data || []);
          console.log(response.data.data);
        } catch (error) {
          console.log(error);
        }
    };
    
    useEffect(() => {
        getUsersList();
    }, [pageNumber]);

  return (
    <div className='table_bx'>
        {usersList.length > 0 ? (
        <Table
          columns={columns}
          pagination={{ pageSize,total: totalItems, onChange(page) {
              console.log(page)
              setPageNumber(page)
          }, }}
          dataSource={
            usersList.map((user, index) => ({
                key: index.toString(),
                userName: user.userName,
                email: user.email,
                country: user.country,
                phoneNumber: user.phoneNumber,
                imagePath: user.imagePath ? 
                (<img className='recipe_img' src={`${BASE_IMG_URL}/${user.imagePath}`} alt='pic' />) :
                (<img className='recipe_img' src={IMAGES.deleteImg}  alt='pic'/>),
                action: (
                    <Space size="middle">
                        <span className='action_icon'>
                        <img src={IMAGES.editIcon} alt='pic' /> Edit
                        </span>
                        <span className='action_icon' onClick={()=>showModal(user.id)}>
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
        handleOk={deleteUser} 
        handleCancel={handleCancel}
        loading={loading}
        deleteItem="category"
      />
    </div>
  )
}

export default UsersContentSection