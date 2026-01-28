import { View, Text, StyleSheet, FlatList} from "react-native";

import SimpleListItem from "../../components/SimpleListItem";

const MOCK_DATA = Array.from({ length: 20}, (_, i) => ({
    id: i+1,
    title: `Elem ${i +1}`,
    subtitle: `Ez az elem a ${i +1} elem rövid leírása`,
    imageUrl: `https://picsum.photos/48?${i +1}`,
}));

export default function SimpleListScreen() {
    return (
        <>
        <View style={styles.contrainer}>
            <Text style={styles.header}>Egy mockuolt lista megjelenítése</Text>
            {/* <SimpleListItem title={"Sanyi"} subtitle={"Peti"} imageUrl={""}/> */}
                <FlatList
                    data={MOCK_DATA}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item}) => {
                    return (
                        <SimpleListItem
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        imageUrl={item.imageUrl}
                    /> )
                    }}
                />
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        paddingTop: 40,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 16,
        marginLeft: 16,
    },
});