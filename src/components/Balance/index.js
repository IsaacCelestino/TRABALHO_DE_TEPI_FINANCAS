import React from "react";
import { View, StyleSheet, Text } from "react-native-web";

import { MotiView } from "moti";

export default function Balance({ saldo, gastos }) {
    return (
        <MotiView style={styles.container}
        from={{
            rotateX: '-100deg',
            opacity: 0,
        }}
        animate={{
            rotateX: '0deg',
            opacity: 1,
        }}
        transition={{
            type: "timing",
            duration: 1000,
            delay: 300
        }}
        >

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>

        </MotiView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        paddingTop: 22,
        paddingBottom: 22,
        borderRadius: 4,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        zIdex: 99,
    },
    content: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    itemTitle: {
        fontSize: 20,
        color: '#black',
        fontWeight: 'bold'
    },
    currencySymbol: {
        color: "#black",
        marginRight: 6,
    }, 
    balance: {
        fontSize: 22,
        color:'#2ecc71'
    },
    expenses: {
        fontSize: 22,
        color:'#e74c3c'
    }
});
