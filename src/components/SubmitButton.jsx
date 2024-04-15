import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitButton = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="btn btn-primary uppercase btn-block"
    >
      {isSubmitting ? (
        <span className="loading loading-ring loading-xs"></span>
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
