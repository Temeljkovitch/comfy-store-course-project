import React from "react";
import { useNavigation } from "react-router-dom";

const SubmitButton = ({ value }) => {
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
        value
      )}
    </button>
  );
};

export default SubmitButton;
