import { Layout, HomeHeader, CustomCard, Text, Spacer, PreviousBookingCard, FeatureListCard } from '../../components';
import { featureList } from '../../constants/featureList';
import { DashbaordStackScreenProp } from '../../routes/type';
import { RouteName } from '../../routes/routeName';
import React from 'react';
import {
    DashboardTopCard,
    DashboardTopInnerRightCard,
    DashboardTopInnerLeftCard,
    CardTopTextContainer,
} from './Dashboard.style';

export type DashboardProps = DashbaordStackScreenProp<RouteName.DASHBOARD>;

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
    const { navigation } = props;
    const _onClickCard = (screenName: string) => navigation.navigate(screenName);
    return (
        <Layout.Base>
            <HomeHeader />
            <CustomCard color='#FED94D'>
                <DashboardTopCard>
                    <DashboardTopInnerLeftCard>
                        <Text variant='body'>1 card Booked</Text>
                        <Spacer size='md' />
                        <Text variant='header'>3</Text>
                        <Text variant='title'>Available Cards</Text>
                    </DashboardTopInnerLeftCard>
                    <DashboardTopInnerRightCard>
                        <Text variant='header'>90</Text>
                        <Text variant='title'>Pending Balance</Text>
                    </DashboardTopInnerRightCard>
                </DashboardTopCard>
            </CustomCard>
            <Spacer size='lg' />
            <CardTopTextContainer>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    Previous Bookings
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </CardTopTextContainer>
            <Spacer size='md' />
            <CustomCard>
                <PreviousBookingCard />
                <PreviousBookingCard />
                <PreviousBookingCard />
            </CustomCard>
            <Spacer size='lg' />
            <CardTopTextContainer>
                <Text variant='title' style={{ color: 'lightgray' }}>
                    More Options
                </Text>
                <Text variant='title' style={{ color: '#000' }}>
                    See all
                </Text>
            </CardTopTextContainer>
            <Spacer size='sm' />
            <FeatureListCard data={featureList} onPress={_onClickCard} />
        </Layout.Base>
    );
};

export default Dashboard;
