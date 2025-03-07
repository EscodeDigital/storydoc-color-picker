import React from "react";
import PropTypes from "prop-types";
import Slider from "@react-native-community/slider";
import { StyleSheet, View } from "react-native";

const GradientSlider = ({
  style,
  value,
  step,
  maximumValue,
  gradient,
  onValueChange,
  thumbTintColor,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.gradient}>{gradient}</View>
      <Slider
        value={value}
        step={step}
        animateTransitions
        animationType="spring"
        thumbTouchSize={{ width: 48, height: 48 }}
        maximumValue={maximumValue}
        onValueChange={onValueChange}
        minimumTrackTintColor="transparent"
        maximumTrackTintColor="transparent"
        thumbStyle={[styles.thumb, { backgroundColor: thumbTintColor }]}
      />
    </View>
  );
};

export default GradientSlider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    height: 40,
  },
  thumb: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    height: 20,
    borderRadius: 4,
    overflow: "hidden",
  },
});

GradientSlider.propTypes = {
  value: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  maximumValue: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired,
  thumbTintColor: PropTypes.string.isRequired,
};
