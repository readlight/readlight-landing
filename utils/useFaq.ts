import { useState, useEffect } from 'react';

export default function useFaq(): {
  faqIndex: number;
  changeFaq: (targetIndex: number) => void;
} {
  function updateFaq(targetIndex: number) {
    const newState = {
      faqIndex: targetIndex,
      changeFaq: changeEventListner,
    };
    return newState;
  }

  function returnUpdateFaq() {
    return faqData;
  }

  function changeEventListner(targetIndex: number) {
    setFaqdata(updateFaq(targetIndex));
  }

  const [faqData, setFaqdata] = useState(updateFaq(0));

  useEffect(() => {
    returnUpdateFaq();
  }, [faqData]);

  return faqData;
}
