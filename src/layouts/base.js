/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const BaseLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>
                    Roberto Lopez Professional Portfolio ©2022
                </title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                    key="viewport"
                />

            </Head>
            {children}
        </div>
    );
};

/*
                <link
                    href="https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap"
                    rel="stylesheet"
                />

*/

BaseLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

export default BaseLayout;
