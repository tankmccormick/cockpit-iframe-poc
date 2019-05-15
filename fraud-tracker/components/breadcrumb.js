import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class BreadcrumbList extends React.Component {
    render() {
        return (
            <Breadcrumb tag="nav" listTag="div">
                {this.props.items.map((item, i) => {
                    if (item.active) {
                        return (
                            <BreadcrumbItem key={i} active>
                                <span>{item.text}</span>
                            </BreadcrumbItem>
                        );
                    } else {
                        return (
                            <BreadcrumbItem key={i}>
                                <NavLink to={item.url}>{item.text}</NavLink>
                            </BreadcrumbItem>
                        );
                    }
                })}
            </Breadcrumb>
        );
    }
}