import { View } from 'react-native';
import { Layout, HomeHeader, CustomCard, Text, Spacer, PreviousBookingCard, FeatureListCard } from '../../components';

import { featureList } from '../../constants/featureList';
import React from 'react';

const Dashboard = () => {
    return (
        <Layout.Base>
            <HomeHeader />
            <CustomCard color='#FED94D'>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text variant='body'>1 card Booked</Text>
                        <Spacer size='md' />
                        <Text variant='header'>3</Text>
                        <Text variant='title'>Available Cards</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <Text variant='header'>90</Text>
                        <Text variant='title'>Pending Balance</Text>
                    </View>
                </View>
            </CustomCard>
            <Spacer size='lg' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    Previous Bookings
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </View>
            <Spacer size='md' />
            <CustomCard>
                <PreviousBookingCard />
                <PreviousBookingCard />
                <PreviousBookingCard />
            </CustomCard>
            <Spacer size='lg' />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    More Options
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </View>
            <Spacer size='sm' />
            <FeatureListCard data={featureList} />
        </Layout.Base>
    );
};

export default Dashboard;
