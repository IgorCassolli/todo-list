import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
    },
    header: {
        backgroundColor: '#0D0D0D',
        height: 175,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        flex: 1,
        padding: 24,
    },
    form: {
        flexDirection: 'row',
        marginTop: -50,
    },
    input: {
        flex: 1,
        height: 54,
        padding: 16,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        backgroundColor: '#262626',
        marginRight: 4,
        borderRadius: 6
    },
    button:{
        height: 52,
        width: 52,
        borderRadius: 6,
        backgroundColor: '#1E6F9F'
    },
    countList: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 32,
        marginBottom: 20
    },
    numberTasksContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tagTasksCreated: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#4EA8DE'
    },
    tagTasksCompleted: {
        fontFamily: 'Inter_700Bold',
        fontSize: 14,
        color: '#8284FA'
    },
    numberTasks: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333333',
        fontSize: 12,
        fontFamily: 'Inter_700Bold',
        color: '#D9D9D9',
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginLeft: 8,
        borderRadius: 999
    },
    listEmptyView:{
        flex: 1,
        marginTop: 68,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    listEmptyTextBold: {
        fontFamily: 'Inter_700Bold',
        color: '#808080',
        fontSize: 14,
        marginTop: 16
    },
    listEmptyTextRegular: {
        fontFamily: 'Inter_400Regular',
        color: '#808080',
        fontSize: 14,
    }
})