const toggleActiveBtn = (target) => {
  const tipsBtn = document.getElementsByClassName("tips-btn");
  for (const tipBtn of tipsBtn) {
    tipBtn !== target
      ? tipBtn.classList.remove("tips-btn-active")
      : tipBtn.classList.add("tips-btn-active");
  }
};

export default toggleActiveBtn;
