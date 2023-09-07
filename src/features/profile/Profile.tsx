import { Layout, DashBoardHeader } from '../../components';
import React from 'react';
import { View } from 'react-native';
import { Images } from '../../resources/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Spacer, Text, ProfileFeatureListCard, Loader } from '../../components';
import { useAuth, useIsLoggedIn } from '../../hooks';
import { ScreenProps } from '../../routes/type';
import { Image } from './Profile.style';
import { RouteName } from '../../routes/routeName';
import { profileCardfeatureList } from '../../constants/featureList';
// import useEncryptedStorage from '../../hooks/useUserData'; // Import your custom hook

export type ProfileProps = ScreenProps<RouteName.PROFILE_DETAILS>;

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
    const { navigation } = props;
    const { logOut, user, userloading } = useIsLoggedIn();

    const { setLoggedOut } = useAuth();

    // useEffect(() => {
    //     const parsedUserData = JSON.parse(loggedInData);
    //     console.log('loginDataWWWWWWWW', JSON.parse(parsedUserData));

    //     // Replace with your actual data key
    // }, []);
    const _onClickFeature = (screenName: string) => {
        if (screenName == RouteName.LOGIN) {
            setLoggedOut();
            logOut();
            // navigation.navigate(RouteName.LOGIN);
        }
        navigation.navigate(screenName);
    };

    if (userloading) return <Loader />;

    // const loggedInData = useEncryptedStorage(SecureStorageKey.USER_DATA);
    return (
        <Layout.Base>
            <DashBoardHeader title='Profile' />
            <Spacer size='md' />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ minWidth: '35%' }}>
                    <Image source={Images.userAvatar} />
                </View>
                <View style={{ minWidth: '55%', justifyContent: 'center' }}>
                    <Text variant='header' style={{ fontSize: 18, textAlign: 'left' }}>
                        {!userloading && user && user.name}
                    </Text>
                    <Spacer size='sm' />
                    <Text variant='title' style={{ fontSize: 12, textAlign: 'left', color: 'gray' }}>
                        {!userloading && user && user.email}
                    </Text>
                </View>
                <View style={{ minWidth: '15%', justifyContent: 'center', alignItems: 'center' }}>
                    <FontAwesome name='edit' color='#C6C7CD' size={20} />
                </View>
            </View>
            <Spacer size='xl' />
            <Text variant='title' style={{ fontSize: 12, textAlign: 'left', color: '#C6C7CD' }}>
                Dashboard
            </Text>
            <Spacer size='md' />
            <ProfileFeatureListCard data={profileCardfeatureList} onPress={_onClickFeature} />
            <Spacer size='md' />
        </Layout.Base>
    );
};

export default Profile;
