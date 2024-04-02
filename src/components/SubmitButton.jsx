import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitButton = ({ value, color }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`btn btn-${color} uppercase btn-block`}
    >
      {isSubmitting ? (
        <span className="loading loading-ring loading-xs"></span>
      ) : (
        value
      )}
    </button>
  );
};

export default SubmitButton;
