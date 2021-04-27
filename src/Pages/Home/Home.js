import React, { useState } from "react";
import {
    CBadge,
    CButton,
    CCard,
    CCardBody,
    CCardHeader,
    CDataTable,
    CCollapse,
    CContainer
} from "@coreui/react";
import { useHistory } from "react-router-dom";

import { usersData } from "./userData";


const HomeScreen = () => {
    const [details, setDetails] = useState([])
    let history = useHistory();

    const toggleDetails = (index) => {
        const position = details.indexOf(index)
        let newDetails = details.slice()
        if (position !== -1) {
            newDetails.splice(position, 1)
        } else {
            newDetails = [...details, index]
        }
        setDetails(newDetails)
    }


    const fields = [
        { label: "Name", key: 'name', _style: { width: '35%' } },
        { label: "Age", key: 'age', _style: { width: '5%' } },
        { label: "Gender", key: 'gender', _style: { width: '10%' } },
        { label: "Date of Birth", key: 'dob', _style: { width: '10%' } },
        { label: "Role", key: 'role', _style: { width: '40%' } },

    ]

    const getBadge = (status) => {
        switch (status) {
            case 'Active': return 'success'
            case 'Inactive': return 'secondary'
            case 'Pending': return 'warning'
            case 'Banned': return 'danger'
            default: return 'primary'
        }
    }
    const handleClick = () => {
        console.log("Logout ");
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("token");
        localStorage.removeItem("time");
        history.push("/");
    }

    return (
        <CContainer fluid>
            <CCard style={{
                padding: '10px'
            }}>
                <CCardHeader>
                    <b>List of Users and Details :- </b>
                    <span style={{ float: "right" }}>
                        <CButton
                            color="primary"
                            className="px-4"
                            onClick={() => handleClick()}
                        >
                            Logout
                        </CButton>
                    </span>
                </CCardHeader>
                < CDataTable
                    items={usersData}
                    fields={fields}
                    columnFilter
                    tableFilter
                    dark
                    striped
                    itemsPerPageSelect
                    itemsPerPage={5}
                    hover
                    sorter
                    pagination
                    scopedSlots={{
                        'status':
                            (item) => (
                                <td>
                                    <CBadge color={getBadge(item.status)}>
                                        {item.status}
                                    </CBadge>
                                </td>
                            ),
                        'show_details':
                            (item, index) => {
                                return (
                                    <td className="py-2">
                                        <CButton
                                            color="primary"
                                            variant="outline"
                                            shape="square"
                                            size="sm"
                                            onClick={() => { toggleDetails(index) }}
                                        >
                                            {details.includes(index) ? 'Hide' : 'Show'}
                                        </CButton>
                                    </td>
                                )
                            },
                        'details':
                            (item, index) => {
                                return (
                                    <CCollapse show={details.includes(index)}>
                                        <CCardBody>
                                            <h4>
                                                {item.username}
                                            </h4>
                                            <p className="text-muted">User since: {item.registered}</p>
                                            <CButton size="sm" color="info">
                                                User Settings
                  </CButton>
                                            <CButton size="sm" color="danger" className="ml-1">
                                                Delete
                  </CButton>
                                        </CCardBody>
                                    </CCollapse>
                                )
                            }
                    }}
                />
            </CCard>
        </CContainer >
    )
}

export default HomeScreen