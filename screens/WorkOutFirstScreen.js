import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  TextInput,
  Modal,
  Dimensions,
} from "react-native";
import ExerciseDificultyList from "../components/ExerciseDificultyList";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Adicionado para ícones de músculo
import { UserContext } from "../contexts/user";

const numColumns = 2; // Número de colunas na grade

function WorkoutFirstScreen({ navigation }) {
  const { user, updateUser } = useContext(UserContext);
  const workoutPlans = user?.plans || [];

  const [modalVisible, setModalVisible] = useState(false);
  const [planName, setPlanName] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setPlanName("");
  };

  const savePlan = () => {
    if (planName.trim() === "") {
      return;
    }

    const newPlan = {
      name: planName,
      exercises: [],
    };

    const updatedPlans = [...workoutPlans, newPlan];
    updateUser({ plans: updatedPlans });

    closeModal();
  };

  const openDeleteModal = (plan) => {
    setSelectedPlan(plan);
    setDeleteModalVisible(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalVisible(false);
    setSelectedPlan(null);
  };

  const deletePlan = () => {
    if (selectedPlan) {
      const updatedPlans = workoutPlans.filter((plan) => plan !== selectedPlan);
      updateUser({ plans: updatedPlans });
      closeDeleteModal();
    }
  };

  function renderWorkoutPlanItem({ item }) {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#F0F0F0" : "#FFFFFF",
          },
          styles.planItem,
        ]}
        onPress={() =>
          navigation.navigate("WorkoutPlanDetailed", { plan: item })
        }
        onLongPress={() => openDeleteModal(item)}
      >
        <View style={styles.planItemContent}>
          <MaterialCommunityIcons name="arm-flex" size={40} color="#4A4A4A" />
          <Text style={styles.planText}>{item.name}</Text>
        </View>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#4A4A4A"
              style={styles.backButton}
            />
          </Pressable>
          <Text style={styles.headerTitle}>Exercises</Text>
        </View>
        <View style={styles.list}>
          <ExerciseDificultyList navigation={navigation} />
        </View>
        <Text style={[styles.text]}>Plans</Text>
        <View style={styles.list}>
          <FlatList
            key={`flatlist-${numColumns}`} // Adicionado para forçar re-renderização
            data={workoutPlans}
            renderItem={renderWorkoutPlanItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numColumns}
            columnWrapperStyle={styles.columnWrapper}
            ListFooterComponent={
              <Pressable style={styles.buttonContainer} onPress={openModal}>
                <AntDesign name="pluscircle" size={50} color="#4A4A4A" />
              </Pressable>
            }
          />
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <Pressable style={styles.modalContainer} onPress={closeModal}>
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <Text style={styles.modalTitle}>New Plan</Text>
            <TextInput
              style={styles.input}
              placeholder="Plan's name"
              value={planName}
              onChangeText={(text) => setPlanName(text)}
            />
            <Pressable style={styles.saveButton} onPress={savePlan}>
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={deleteModalVisible}
        onRequestClose={closeDeleteModal}
      >
        <Pressable style={styles.modalContainer} onPress={closeDeleteModal}>
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <Text style={styles.modalTitle}>Delete Plan</Text>
            <Text style={styles.modalText}>
              Are you sure you want to delete this plan?
            </Text>
            <Pressable style={styles.deleteButton} onPress={deletePlan}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
            <Pressable style={styles.cancelButton} onPress={closeDeleteModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
    marginTop: Platform.OS === "android" ? 70 : 10,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  text: {
    fontSize: 28,
    marginBottom: 15,
    color: "#4A4A4A",
    fontWeight: "600",
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
  planItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignItems: "center",
  },
  planItemContent: {
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  planText: {
    marginTop: 10,
    fontSize: 18,
    color: "#4A4A4A",
    fontWeight: "500",
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4A4A4A",
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#4A4A4A",
  },
  modalText: {
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    width: "100%",
    borderRadius: 5,
  },
  saveButton: {
    backgroundColor: "#192126",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#FF0000",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#CCCCCC",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#4A4A4A",
    fontSize: 18,
    fontWeight: "bold",
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default WorkoutFirstScreen;
