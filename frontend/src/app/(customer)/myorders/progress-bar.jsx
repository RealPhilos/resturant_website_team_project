function ProgressBar({ doneCount, cookingCount, totalOrders }) {
  const completedPercentage =
    totalOrders > 0 ? (doneCount / totalOrders) * 100 : 0;
  const cookingPercentage =
    totalOrders > 0 ? (cookingCount / totalOrders) * 100 : 0;

  const containerStyles = {
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "12px",
    overflow: "hidden",
    position: "relative",
    height: "24px",
  };

  const completedBarStyles = {
    height: "100%",
    width: `${completedPercentage}%`,
    backgroundColor: "#72c472",
    transition: "width 0.5s ease-in-out",
    zIndex: 2,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "10px",
  };

  const cookingBarStyles = {
    height: "100%",
    width: `${cookingPercentage}%`,
    backgroundColor: "#ffad42",
    transition: "width 0.5s ease-in-out",
    zIndex: 1,
    position: "absolute",
    left: `${completedPercentage}%`,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: "10px",
  };

  return (
    <div style={containerStyles}>
      <div>
        {completedPercentage > 0 ? ( // Only render the cooking bar if it's needed
          <div style={completedBarStyles}>
            {completedPercentage > 5 ? (
              <span style={{ color: "white", fontWeight: "bold" }}>
                {doneCount} Done
              </span>
            ) : null}
          </div>
        ) : null}
      </div>
      {cookingPercentage > 0 ? ( // Only render the cooking bar if it's needed
        <div style={cookingBarStyles}>
          {cookingPercentage > 5 ? ( // Only show text if the bar is wide enough
            <span style={{ color: "white", fontWeight: "bold" }}>
              {cookingCount} Cooking
            </span>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default ProgressBar;
