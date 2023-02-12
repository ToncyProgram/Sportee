import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Modal, Dimensions, ActivityIndicator } from 'react-native';
import axios from "axios";
import { useState, useEffect } from "react";

export default function Games() {

    const [showModal, setShowModal] = useState(false);

    const ModalOpen = (bool) => {
        setShowModal(bool);
    }

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);


    const getArticle = () => {

        setLoading(true);
        axios
            .get(
                'https://videogames-news2.p.rapidapi.com/videogames_news/recent',

                {
                    headers: {
                        "X-RapidAPI-Key": "2ad67fad14msheb8ccc4da215c47p1aec2cjsn3f4320721ff0",
                        "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com"
                    }
                }
            )
            .then((response) => {
                let data = response.data;
                setResult(data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getArticle();
    }, []);

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size={"large"} />}
            {result && result.length > 0 && (

                <ScrollView>
                    {result.map((element, index) => (

                        <View
                            key={index}>
                            {
                                <View style={styles.section}>
                                    <TouchableOpacity
                                        onPress={() => ModalOpen(true)}
                                    >
                                        <View style={styles.center}>
                                            <Text style={styles.title}>{element.title}</Text>
                                            <Text style={styles.date}>{element.date}</Text>
                                            <Image
                                                source={{ uri: element.image }}
                                                style={styles.image}
                                            />
                                        </View>

                                    </TouchableOpacity>
                                    <Modal
                                        transparent={true}
                                        animationType="fade"
                                        visible={showModal}
                                        nRequestClose={() => ModalOpen(false)}
                                    >
                                        <TouchableOpacity
                                            disabled={true}
                                            style={styles.containerModal}
                                        >
                                            <View style={styles.sectionModal}>
                                                <View>
                                                    <View style={styles.center}>
                                                        <Text style={styles.title}>{element.title}</Text>

                                                        <Text style={styles.date}>{element.date}</Text>

                                                        <Image
                                                            source={{ uri: element.image }}
                                                            style={styles.image}
                                                        />

                                                        <Text style={styles.description}>{element.description}</Text>
                                                        <TouchableOpacity
                                                            onPress={() => ModalOpen(false)}

                                                        >
                                                            <Image
                                                                style={styles.imageExit}
                                                                source={require("../assets/images/icons/cross.png")}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </Modal>
                                </View>

                            }
                        </View>

                    ))}
                </ScrollView>

            )
            }
        </View >

    );
};


const WIDTH = Dimensions.get("window").width;
const HEIGHT = 500;

const styles = StyleSheet.create({
    wrapper: {},

    container: {
        backgroundColor: "#430b63",
        flex: 1,
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    sectionModal: {
        height: HEIGHT,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: "#9650e9",
        borderRadius: 10
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 10,
    },
    title: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "4%",
        fontWeight: "bold",
        color: "white"
    },
    date: {
        color: "white",
        marginBottom: "3%",
        marginTop: "3%",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",

    },
    section: {
        backgroundColor: "white",
        backgroundColor: "#430b63",
        paddingBottom: 70

    },
    description: {
        color: "white",
        margin: 10
    },
    imageExit: {
        width: 50,
        height: 50,
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
    },

});



{/*<View style={styles.container}>
            <ScrollView >
                <View>
                    <TouchableOpacity
                        onPress={() => ModalOpen(true)}
                    >
                        <View style={styles.section}>
                            <View style={styles.center}>
                                <Text style={styles.title}>FAKE NEWS FAKE NEWS FAKE NEWS</Text>
                                <Text style={styles.date}>2023-03-22</Text>
                                <Image
                                    source={{ uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" }}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Modal
                        transparent={true}
                        animationType="fade"
                        visible={showModal}
                        nRequestClose={() => ModalOpen(false)}
                    >
                        <ArticleModal
                            ModalOpen={ModalOpen}
                        />
                    </Modal> 
                </View>
            </ScrollView>
    </View>*/}