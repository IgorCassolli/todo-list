import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {  
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: '#262626',
        padding: 12,
        borderRadius: 8,
        marginBottom: 8
    },
    itemDescription: {
        flex: 1,
        color: '#D9D9D9',
        paddingHorizontal: 8,
        paddingVertical: 12,
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
    },
    itemDescriptionDone: {
        flex: 1,
        color: '#808080',
        paddingHorizontal: 8,
        paddingVertical: 12,
        textDecorationLine: 'line-through',
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
    }
    
})