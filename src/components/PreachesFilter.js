import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Text, StyleSheet, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";

export default function Filter(props) {
  const [initialDate, setInitialDate] = useState(props.initialDate);
  const [finalDate, setFinalDate] = useState(props.finalDate);
  const [biblicalPassge, setBiblicalPassge] = useState(props.biblicalPassge);
  const [keyWords, setKeyWords] = useState(props.keyWords);

  const resetFilterValues = () => {
    setInitialDate(null);
    setFinalDate(null);
    setBiblicalPassge(null);
    setKeyWords(null);
  };

  const updateFilterValues = () => {
    props.updateFilter(initialDate, finalDate, biblicalPassge, keyWords);
    props.showAlert(false);
  };

  return (
    <View>
      <Text style={styles.title}>Filtros</Text>
      <Text style={styles.textInputTitle}>Pasaje Biblico</Text>
      <TextInput
        value={biblicalPassge}
        style={[styles.SectionStyle]}
        id="passageInputText"
        onChangeText={(text) => setBiblicalPassge(text)}
      />
      <Text style={styles.textInputTitle}>Palabras Clave</Text>
      <TextInput
        value={keyWords}
        style={[styles.SectionStyle]}
        id="preachInputText"
        onChangeText={(text) => setKeyWords(text)}
      />
      <Text style={styles.textInputTitle}>Fecha de publicación</Text>
      <Text style={styles.textSubTitle}>Desde:</Text>
      <View style={{ alignItems: "center" }}>
        <DatePicker
          style={{ width: 200 }}
          date={initialDate}
          mode="date"
          placeholder="fecha inicial"
          format="DD/MM/YYYY"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setInitialDate(date);
          }}
        />
      </View>
      <Text style={styles.textSubTitle}>Hasta:</Text>
      <View style={{ alignItems: "center" }}>
        <DatePicker
          style={{ width: 200 }}
          date={finalDate}
          mode="date"
          placeholder="fecha final"
          format="DD/MM/YYYY"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setFinalDate(date);
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={styles.resetFilterButton}
          onPress={() => resetFilterValues()}
        >
          <Text style={styles.resetFilterButtonText}>Limpiar Campos</Text>
        </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.actionFilterButton}
          onPress={() => props.showAlert(false)}
        >
          <Text style={styles.resetFilterButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.confirmFilterButton}
          onPress={() => updateFilterValues()}
        >
          <Text style={styles.resetFilterButtonText}>Aplicar Filtros</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
  },
  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "#000",
    height: 40,
    width: 250,
    borderRadius: 5,
    margin: 10,
    bottom: 8,
    padding: 5,
  },
  textInputTitle: {
    width: 250,
    textAlign: "left",
    fontSize: 18,
    lineHeight: 20,
    color: "black",
  },
  textSubTitle: {
    fontSize: 14,
  },
  resetFilterButton: {
    backgroundColor: "#3586BC",
    borderRadius: 5,
    width: "50%",
    marginTop: 20,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  actionFilterButton: {
    backgroundColor: "gray",
    borderRadius: 5,
    width: "45%",
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  confirmFilterButton: {
    backgroundColor: "green",
    borderRadius: 5,
    width: "45%",
    height: 40,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  resetFilterButtonText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
    lineHeight: 30,
  },
});
