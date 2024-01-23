const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  console.log("🚀 ~ setOutput ~ selectedOptionValue:", selectedOptionValue);
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  console.log("🚀 ~ setOutput ~ selectedOptionIndex:", selectedOptionIndex);
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;
  console.log(selectedOptionText);

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
