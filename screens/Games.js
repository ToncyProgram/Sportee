import { StyleSheet, View, Text, StatusBar, Image, TouchableOpacity, Modal, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import axios from "axios";
import { useState, useEffect } from "react";

import Swiper from 'react-native-swiper'

export default function Games() {



    const [showModal2, setShowModal2] = useState(false);
    const [selectedElement2, setSelectedElement2] = useState(null);

    const ModalOpen2 = (selectedIndex2) => {
        setShowModal2(true);
        setSelectedElement2(result2[selectedIndex2]);
    };

    const [showModal, setShowModal] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const ModalOpen = (selectedIndex) => {
        setShowModal(true);
        setSelectedElement(result[selectedIndex]);
    };

    const [result, setResult] = useState(null);
    const [result2, setResult2] = useState(null);
    const [loading, setLoading] = useState(false);


    const getRecentArticle = () => {

        setLoading(true);

        let recent = "https://videogames-news2.p.rapidapi.com/videogames_news/recent";
        let popular = "https://videogames-news2.p.rapidapi.com/videogames_news/search_news"

        const requestRecent = axios.get(recent, {
            headers: {
                "X-RapidAPI-Key": "1c78a37e73mshf7922a8ef7a52ffp114848jsna13a4da90e9a",
                "X-RapidAPI-Host": "videogames-news2.p.rapidapi.com"
            }
        });
        const requestPopular = axios.get(popular, {
            params: { query: 'Gaming', sort_by: 'relevancy' },
            headers: {
                'X-RapidAPI-Key': '1c78a37e73mshf7922a8ef7a52ffp114848jsna13a4da90e9a',
                'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
            }
        });

        axios.all([requestRecent, requestPopular])
            .then(
                axios.spread((...responses) => {
                    if (responses[0].status === 200) {
                        setResult(responses[0].data)
                    }

                    if (responses[1].status === 200) {
                        setResult2(responses[1].data)
                    }
                })
            )
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    useEffect(() => {
        getRecentArticle();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle={'default'} />
            {loading && <ActivityIndicator size={"large"} />}
            <View style={{ padding: 17 }} />
            <View>
                {result && result.length > 0 && (
                    <View style={styles.background}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 25 }}>RECENT NEWS</Text>

                        <Swiper
                            style={styles.wrapper}
                            loop={true}
                            key={result.map}
                            showsButtons={true}
                            buttonWrapperStyle={{ top: "-25%", paddingHorizontal: 10 }}
                        >
                            {result.map((element, index) => (
                                <View key={index}>
                                    {
                                        <View style={styles.section}>
                                            <View style={styles.center}>
                                                <TouchableOpacity onPress={() => ModalOpen(index)}>
                                                    <Image
                                                        source={{ uri: element.image }}
                                                        style={styles.image}
                                                    />
                                                </TouchableOpacity>
                                                <Text style={styles.title}>{element.title}</Text>
                                            </View>
                                        </View>
                                    }
                                </View>

                            ))}
                        </Swiper>
                    </View>

                )
                }
                <View style={{ paddingTop: 25 }} />
                {result2 && result2.length > 0 && (
                    <View style={styles.background2}>
                        <Text style={{ color: "black", fontWeight: "bold", fontSize: 25, paddingBottom: 15, paddingTop: 15, }}>MOST POPULAR NEWS</Text>
                        <Swiper
                            style={styles.wrapper}
                            loop={true}
                            key={result2.map}
                            showsButtons={true}
                            buttonWrapperStyle={{ top: "-23%", paddingHorizontal: 10 }}
                        >
                            {result2.map((element2, index2) => (
                                <View key={index2}>
                                    {
                                        <View style={styles.section}>
                                            <View style={styles.center}>
                                                <TouchableOpacity onPress={() => ModalOpen2(index2)}>
                                                    <Image
                                                        source={{ uri: element2.image }}
                                                        style={styles.image}
                                                    />
                                                </TouchableOpacity>
                                                <Text style={styles.title}>{element2.title}</Text>
                                            </View>
                                        </View>
                                    }
                                </View>

                            ))}
                        </Swiper>

                    </View>

                )
                }
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={showModal}
                    nRequestClose={() => setShowModal(false)}
                >
                    <TouchableOpacity disabled={true} style={styles.containerModal}>
                        <View style={styles.sectionModal}>
                            <View>
                                <View style={styles.center}>
                                    <Text style={styles.title2}>{selectedElement?.title}</Text>

                                    <Text style={styles.date}>{selectedElement?.date}</Text>

                                    <Image
                                        source={{ uri: selectedElement?.image }}
                                        style={styles.image}
                                    />
                                    <Text style={styles.description}>{selectedElement?.description}</Text>
                                    <TouchableOpacity onPress={() => setShowModal(false)}>
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
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={showModal2}
                    nRequestClose={() => setShowModal2(false)}
                >
                    <TouchableOpacity disabled={true} style={styles.containerModal}>
                        <View style={styles.sectionModal}>
                            <View>
                                <View style={styles.center}>
                                    <Text style={styles.title2}>{selectedElement2?.title}</Text>

                                    <Text style={styles.date}>{selectedElement2?.date}</Text>

                                    <Image
                                        source={{ uri: selectedElement2?.image }}
                                        style={styles.image}
                                    />
                                    <Text style={styles.description}>{selectedElement2?.description}</Text>
                                    <TouchableOpacity onPress={() => setShowModal2(false)}>
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
        </ScrollView >

    );
};




const styles = StyleSheet.create({
    wrapper: {},

    container: {
        backgroundColor: "#430b63",
        flex: 1,
        alignItems: "center",
    },
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    sectionModal: {
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
        marginBottom: "4%",
        fontWeight: "bold",
        color: "black",

    },
    title2: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "4%",
        marginBottom: "4%",
        fontWeight: "bold",
        color: "white",

    },
    date: {
        color: "white",
        marginBottom: "3%",

    },
    center: {
        justifyContent: "center",
        alignItems: "center",

    },
    section: {
        backgroundColor: "#dcb6f2",

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
    background: {
        backgroundColor: "#dcb6f2",
        alignItems: "center",
        height: 300,
        width: 330,
        borderRadius: 20,
    },
    background2: {
        backgroundColor: "#dcb6f2",
        alignItems: "center",
        height: 330,
        width: 330,
        borderRadius: 20,
    }

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