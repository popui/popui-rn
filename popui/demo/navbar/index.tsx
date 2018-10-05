import React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { addNavigationHelpers, createNavigationContainer, createNavigator, SafeAreaView, TabRouter } from 'react-navigation'

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView>
        <SafeAreaView forceInset={{ horizontal: 'always' }}>
            <Text>{banner}</Text>
            <Button
                onPress={() => {
                    navigation.goBack(null)
                }}
                title="Go back"
            />
        </SafeAreaView>
    </ScrollView>
)

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Screen" navigation={navigation}/>
)

const MyNotificationsScreen = ({ navigation }) => (
    <MyNavScreen banner="Notifications Screen" navigation={navigation}/>
)

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Screen" navigation={navigation}/>
)

const CustomTabRouter = TabRouter(
    {
        Home: {
            screen: MyHomeScreen,
            path: '',
        },
        Notifications: {
            screen: MyNotificationsScreen,
            path: 'notifications',
        },
        Settings: {
            screen: MySettingsScreen,
            path: 'settings',
        },
    },
    {
        // Change this to start on a different tab
        initialRouteName: 'Home',
    },
)

const CustomTabBar = ({ navigation }) => {
    const { routes } = navigation.state
    return (
        <SafeAreaView style={styles.tabContainer}>
            {routes.map(route => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(route.routeName)}
                    style={styles.tab}
                    key={route.routeName}
                >
                    <Text>{route.routeName}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    )
}

const CustomTabView = ({ router, navigation }) => {
    const { routes, index } = navigation.state
    const ActiveScreen = router.getComponentForRouteName(routes[index].routeName)
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <CustomTabBar navigation={navigation}/>
            <ActiveScreen
                navigation={addNavigationHelpers({
                    dispatch: navigation.dispatch,
                    state: routes[index],
                })}
                screenProps={{}}
            />
        </SafeAreaView>
    )
}

const CustomTabs = createNavigationContainer(
    createNavigator(CustomTabRouter)(CustomTabView),
)

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 48,
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 4,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
})

export default CustomTabs
