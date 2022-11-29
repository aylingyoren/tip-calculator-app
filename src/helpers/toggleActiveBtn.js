const activeBtnClass = "tips-btn-active";

const toggleActiveBtn = (target) => {
  const tipsBtn = document.getElementsByClassName("tips-btn");
  for (const tipBtn of tipsBtn) {
    tipBtn !== target
      ? tipBtn.classList.remove(activeBtnClass)
      : tipBtn.classList.add(activeBtnClass);
  }
};

export default toggleActiveBtn;
