import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { TAJ } from "../../service/imageservices";

const Scroll = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          The Taj Mahal is widely considered one of the most beautiful buildings
          ever created. The exquisite marble structure in Agra, India, is a
          mausoleum, an enduring monument to the love of a husband for his
          favorite wife. It's also an eternal testament to the artistic and
          scientific accomplishments of a wealthy empire. Shah Jahan, “the King
          of the World,” took control of the Mughal Empire throne in 1628 very
          much in love with the queen he dubbed Mumtaz Mahal or “Chosen One of
          the Palace.” The poets at Agra’s Mughal court said her beauty was such
          that the moon hid its face in shame before her. The Mughals were at
          the peak of their power and wealth during Shah Jahan’s reign, and
          India’s rich lode of precious gems yielded him much wealth and power.
          But he was powerless to stop Mumtaz Mahal’s death during childbirth in
          1631. Legend has it that she bound him with a deathbed promise to
          build her the most beautiful tomb ever known.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: "skyblue",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 30,
  },
});

export default Scroll;
