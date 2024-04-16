import { useState } from 'react';
import { Button, Modal } from 'antd';
import { IoLogoReact } from 'react-icons/io5';
import { BsArrowRight } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { FaLaravel } from "react-icons/fa";

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string;
        frontend: string;
        backend: string;
        member: number;
        role: string;
        demo: string;
        github: string;
    }
}

const Project = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }

    const dataProject: IProject[] = [
        {
            image: <IoLogoReact
                size={50}
                color={'#2bebfd'}
            />,
            title: "Cv project",
            shortDescription: "A personal CV page",
            detail: {
                description: "The personal portfolio page is converted to Reactjs based on an available template.",
                frontend: "React (Typescript), Vite",
                backend: "",
                member: 1,
                role: "Developer",
                demo: "",
                github: "https://github.com/Deus114/cv-project",
            },

        },
        {
            image: <>
                <IoLogoReact
                    size={50}
                    color={'#2bebfd'}
                /><DiNodejsSmall
                    size={50}
                    color={'#00a80c'}
                /></>,
            title: "Book Store",
            shortDescription: "A website for bookstore",
            detail: {
                description: `Admin: manage books, users, categories,... User: watch books, login, register, add to cart,... (Account demo:
                admin: admin@gmail.com, user: user@gmail.com, password:123456).
                `,
                frontend: "ReactJs.",
                backend: "NodeJs, RESTFULL api.",
                member: 1,
                role: "Developer",
                demo: "https://bookstore-inky-omega.vercel.app/",
                github: "https://github.com/Deus114/book-store-v1_fe",
            },

        },
        {
            image: <FaLaravel
                size={50}
                color={'red'}
            />,
            title: "Mobile Store",
            shortDescription: "A website for phone shop",
            detail: {
                description: `Admin: manage products, users, categories,... User: make oders, login, register, add to cart,... (Account demo:
                admin: admin@gmail.com, user: user1@gmail.com, password:0917880045).
                `,
                frontend: "Boostrap",
                backend: "PHP, Laravel",
                member: 1,
                role: "Developer",
                demo: "https://mobilezstore.000webhostapp.com/",
                github: "https://github.com/Deus114/Mobile_Store",
            },

        },
        {
            image: <>
                <IoLogoReact
                    size={50}
                    color={'#2bebfd'}
                /><DiNodejsSmall
                    size={50}
                    color={'#00a80c'}
                /></>,
            title: "HCMUT SmartPrinting service",
            shortDescription: "The smart printing service for HCMUT's students",
            detail: {
                description: `Design and implement the smart printing service for HCMUT's students as a subject's assignment.
                `,
                frontend: "ReactJs.",
                backend: "NodeJs.",
                member: 7,
                role: "Developer",
                demo: "",
                github: "https://github.com/QuocAnU/Smart-Printing-Service",
            },

        },
    ]

    return (
        <>
            <Modal
                title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""}
                open={isModalOpen}
                onOk={() => handleCloseModal()}
                onCancel={() => handleCloseModal()}
                footer={null}
                maskClosable={false}
            >
                {dataDetail &&
                    <ul>
                        <li>Description: {dataDetail.detail.description}</li>
                        <li>Frontend: {dataDetail.detail.frontend}</li>
                        <li>Backend: {dataDetail.detail.backend}</li>
                        <li>Members: {dataDetail.detail.member}</li>
                        <li>Role: {dataDetail.detail.role}</li>
                        <li>
                            Demo:
                            <a href={dataDetail.detail.demo} target='_blank'>
                                {dataDetail.detail.demo}
                            </a>
                        </li>
                        <li>
                            Github:
                            <a href={dataDetail.detail.github} target='_blank'>
                                {dataDetail.detail.github}
                            </a>
                        </li>
                    </ul>
                }
            </Modal>

            <div className="arlo_tm_section" id="services">
                <div className="arlo_tm_services_wrap">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>Projects</h3>
                            <span>Some projects during my studies</span>
                        </div>
                        <div className="list_wrap">
                            <ul>
                                {dataProject.map((item, index) => {
                                    return (
                                        <li key={`${index}-project`}>
                                            <div
                                                className="inner" title="Xem Chi Tiết"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setDataDetail(item)
                                                    setIsModalOpen(true);
                                                }}>
                                                <div className="icon">
                                                    {item.image}
                                                </div>
                                                <div className="title_service">
                                                    <h3>{item.title}</h3>
                                                </div>
                                                <div className="text">
                                                    <p>{item.shortDescription}</p>
                                                </div>
                                                <div className="view_detail" style={{ padding: "5px 0" }}>
                                                    <span style={{ cursor: "pointer" }}>
                                                        <BsArrowRight />
                                                        &nbsp;
                                                        Xem Chi Tiết
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project