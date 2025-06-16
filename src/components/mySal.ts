import { ref } from "vue";

export default function () {
  const userName = ref('harry');
  const salary = ref(12000);
  function addSal() {
    salary.value += 1000;
  }
  
  return {userName, salary, addSal};
}