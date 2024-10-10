import { FlatList, Image, Linking, Pressable, Text, View } from "react-native";
import dumProducts from '~/assets/search.json'


const products = dumProducts.slice(0, 20)


export default function SearchResultScreen() {
    return (
        <View>
            <Text
                className="text-xl"
            >
                search result
            </Text>

            <FlatList
            data={products}
            contentContainerClassName="gap-3 p-3"
            keyExtractor={(item) => item.asin}
            renderItem={({ item }) => (
                <Pressable 
                onPress={() => Linking.openURL(item.url)}
                className="flex-row gap-2 bg-slate-50 p-3"
                >
                    <Image
                    source={{ uri: item.image_url }}
                    className="h-24 w-24"
                    />
                    <Text
                    className="flex-1"
                    numberOfLines={4}
                    >
                        {item.title}
                    </Text>

                    <Text> $ {item.final_price}</Text>
                </Pressable>
            )}
            />
        </View>
    )
}