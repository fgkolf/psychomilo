import React from 'react';
import Helmet from 'react-helmet';
import useSiteTitle from '../../utils/helpers/useSiteTitle';

const CustomHelmet = ({ title }) => <Helmet title={title || useSiteTitle()} />;

export default CustomHelmet;
